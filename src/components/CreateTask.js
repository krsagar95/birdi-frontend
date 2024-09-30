import React, { useState, useEffect } from 'react';

 

const CreateTask = ({ show, onClose, onSave, task }) => {

  const [title, setTitle] = useState('');

  const [description, setDescription] = useState('');

  const [dueDate, setDueDate] = useState('');

  const [status, setStatus] = useState('PENDING');

  const [userId] = useState(JSON.parse(localStorage.getItem('user')).id);

 

  // Use effect to pre-fill the form if editing an existing task

  useEffect(() => {

    if (task) {

      setTitle(task.title);

      setDescription(task.description);

      setDueDate(task.dueDate);

      setStatus(task.status);

    } else {

      setTitle('');

      setDescription('');

      setDueDate('');

      setStatus('PENDING');

    }

  }, [task]);

 

  const handleSubmit = () => {

    const updatedTask = {

      ...task,

      title,

      description,

      dueDate,

      status,

      userId,

    };

    onSave(updatedTask);

    onClose();

  };

 

  return (

    <div className={`modal ${show ? 'd-block' : 'd-none'}`} tabIndex="-1">

      <div className="modal-dialog">

        <div className="modal-content">

          <div className="modal-header">

            <h5 className="modal-title">{task ? 'Edit Task' : 'Create New Task'}</h5>

            <button type="button" className="btn-close" onClick={onClose}></button>

          </div>

          <div className="modal-body">

            <div className="mb-3">

              <label className="form-label">Title</label>

              <input

                type="text"

                className="form-control"

                value={title}

                onChange={(e) => setTitle(e.target.value)}

              />

            </div>

            <div className="mb-3">

              <label className="form-label">Description</label>

              <textarea

                className="form-control"

                value={description}

                onChange={(e) => setDescription(e.target.value)}

              ></textarea>

            </div>

            <div className="mb-3">

              <label className="form-label">Due Date</label>

              <input

                type="date"

                className="form-control"

                value={dueDate}

                onChange={(e) => setDueDate(e.target.value)}

              />

            </div>

            <div className="mb-3">

              <label className="form-label">Status</label>

              <select

                className="form-control"

                value={status}

                onChange={(e) => setStatus(e.target.value)}

              >

                <option value="PENDING">Pending</option>

                <option value="COMPLETED">Completed</option>

              </select>

            </div>

          </div>

          <div className="modal-footer">

            <button type="button" className="btn btn-secondary" onClick={onClose}>

              Close

            </button>

            <button type="button" className="btn btn-primary" onClick={handleSubmit}>

              {task ? 'Save Changes' : 'Create Task'}

            </button>

          </div>

        </div>

      </div>

    </div>

  );

};

 

export default CreateTask;