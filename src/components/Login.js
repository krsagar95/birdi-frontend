import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { login } from '../services/authService';

 

function Login() {

  const [username, setUsername] = useState('');

  const [password, setPassword] = useState('');

  const navigate = useNavigate();

 

  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      const response = await login(username, password);

      localStorage.setItem('token', response.token);

      localStorage.setItem('user', JSON.stringify(response));

      navigate('/tasks');

    } catch (error) {

      console.error('Login failed', error);

    }

  };

 

  return (

    <div className="d-flex align-items-center justify-content-center vh-100">

      <div className="card p-4 shadow-lg" style={{ width: '22rem' }}>

        <h2 className="text-center mb-4">Login</h2>

        <form onSubmit={handleLogin}>

          <div className="mb-3">

            <label htmlFor="username" className="form-label">

              Username

            </label>

            <input

              type="text"

              className="form-control"

              id="username"

              value={username}

              onChange={(e) => setUsername(e.target.value)}

              required

            />

          </div>

          <div className="mb-3">

            <label htmlFor="password" className="form-label">

              Password

            </label>

            <input

              type="password"

              className="form-control"

              id="password"

              value={password}

              onChange={(e) => setPassword(e.target.value)}

              required

            />

          </div>

          <button type="submit" className="btn btn-primary w-100">

            Login

          </button>

        </form>

        <div className="text-center mt-3">

          <span>Don't have an account?</span> <a href="/register">Register</a>

        </div>

      </div>

    </div>

  );

}

 

export default Login;