import React from 'react';

import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Login from './components/Login';

import Register from './components/Register';

import TaskManager from './components/TaskManager';

import Home from './components/Home';

 

function App() {

    const isAuthenticated = !!localStorage.getItem('token');

 

    return (

        <Router>

            <div className="App">

                <Routes>

                    <Route path="/" element={<Home />} />

                    <Route path="/login" element={<Login />} />

                    <Route path="/register" element={<Register />} />

                    <Route path="/tasks" element={isAuthenticated ? <TaskManager /> : <Navigate to="/login" />} />

                    <Route path="*" element={<Navigate to="/" />} />

                </Routes>

            </div>

        </Router>

    );

}

 

export default App;