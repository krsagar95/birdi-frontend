import React, { useEffect, useState } from 'react';

import TaskService from '../services/taskService';

import CreateTask from './CreateTask';

import { FaTrash, FaEdit } from 'react-icons/fa'; // Import the FaTrash icon

 

const TaskManager = () => {

    const [tasks, setTasks] = useState([]);

    const [showModal, setShowModal] = useState(false);

    const [currentTask, setCurrentTask] = useState(null);

 

    useEffect(() => {

        fetchTasks();

    }, []);

 

    const fetchTasks = async () => {

        const response = await TaskService.getTasks();

        setTasks(response.data);

    };

 

    const handleDeleteTask = async (taskId) => {

        try {

            await TaskService.deleteTask(taskId);

            fetchTasks();

        } catch (error) {

            console.error('Error deleting task:', error);

        }

    };

 

    const handleSaveTask = (task) => {

        if (task.id) {

            // Edit Task

            TaskService

                .updateTask(task.id, task)

                .then(() => {

                    setTasks((prevTasks) =>

                        prevTasks.map((t) => (t.id === task.id ? task : t))

                    );

                })

                .catch((error) => console.error('Error updating task:', error));

        } else {

            // Create Task

            TaskService

                .createTask(task)

                .then((response) => {

                    setTasks((prevTasks) => [...prevTasks, response.data]);

                })

                .catch((error) => console.error('Error creating task:', error));

        }

    };

 

    // const handleDeleteTask = (taskId) => {

    //     taskService

    //         .deleteTask(taskId)

    //         .then(() => {

    //             setTasks(tasks.filter((task) => task.id !== taskId));

    //         })

    //         .catch((error) => console.error('Error deleting task:', error));

    // };

 

    return (

        <div className="container mt-5">

            <div className="d-flex justify-content-between align-items-center mb-4">

                <h2>Task Manager</h2>

                <button

                    className="btn btn-primary"

                    onClick={() => {

                        setCurrentTask(null);

                        setShowModal(true);

                    }}

                >

                    Create Task

                </button>

            </div>

            <h2>Task List</h2>

            <div className="row">

                {tasks.map(task => (

                    <div className="col-md-4 mb-4" key={task.id}>

                        <div className="card position-relative">

                            <div className="card-body">

                                <div className="d-flex justify-content-end position-absolute top-0 end-0 m-2">

                                    <FaEdit

                                        className="me-2 "

                                        style={{ cursor: 'pointer' }}

                                        onClick={() => {

                                            setCurrentTask(task);

                                            setShowModal(true);

                                        }}

                                    />

                                    <FaTrash

                                        className="text-danger"

                                        style={{ cursor: 'pointer' }}

                                        onClick={() => handleDeleteTask(task.id)}

                                    />

                                </div>

                                <h5 className="card-title">{task.title}</h5>

                                <p className="card-text">{task.description}</p>

                                <p className="card-text"><small className="text-muted">Due Date: {task.dueDate}</small></p>

                            </div>

                        </div>

                    </div>

                ))}

            </div>

            {/* Create Task Modal */}

            <CreateTask

                show={showModal}

                onClose={() => setShowModal(false)}

                onSave={handleSaveTask}

                task={currentTask}

            />

       </div>

    );

};

 

export default TaskManager;