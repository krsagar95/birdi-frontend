// src/services/TaskService.js

import axios from 'axios';

 

const API_URL = 'http://localhost:8080/api/tasks';

const token = localStorage.getItem('token');

 

const TaskService = {

    getTasks: async () => {

        return await axios.get(API_URL + '/user/' + JSON.parse(localStorage.getItem("user"))?.id, {

            headers: { Authorization: `Bearer ${token}` }

        });

    },

 

    createTask: async (task) => {

        return await axios.post(API_URL, task, {

            headers: { Authorization: `Bearer ${token}` }

        });

    },

 

    updateTask: async (taskId, updatedTask) => {

        return await axios.put(`${API_URL}/${taskId}`, updatedTask, {

            headers: { Authorization: `Bearer ${token}` }

        });

    },

 

   deleteTask: async (taskId) => {

        return axios.delete(`${API_URL}/${taskId}`, {

            headers: {

                Authorization: `Bearer ${token}`

            }

        });

    }

};

 

export default TaskService;
