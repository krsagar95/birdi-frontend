import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { register } from '../services/authService';

 

function Register() {

  const [name, setName] = useState('');

  const [username, setUsername] = useState('');

  const [email, setEmail] = useState('');

  const [mobileNo, setMobileNo] = useState('');

  const [role, setRole] = useState('');

  const [password, setPassword] = useState('');

  const navigate = useNavigate();

 

  const handleRegister = async (e) => {

    e.preventDefault();

    try {

      const requestBody = {

        name,

        username,

        email,

        mobileNo,

        role,

        password,

      };

      await register(requestBody);

      navigate('/login');

    } catch (error) {

      console.error('Registration failed', error);

    }

  };

 

  return (

    <div className="d-flex align-items-center justify-content-center vh-100">

      <div className="card p-4 shadow-lg" style={{ width: '25rem' }}>

        <h2 className="text-center mb-4">Register</h2>

        <form onSubmit={handleRegister}>

          <div className="mb-3">

            <label htmlFor="name" className="form-label">

              Name

            </label>

            <input

              type="text"

              className="form-control"

              id="name"

              value={name}

              onChange={(e) => setName(e.target.value)}

              required

            />

          </div>

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

            <label htmlFor="email" className="form-label">

              Email

            </label>

            <input

              type="email"

              className="form-control"

              id="email"

              value={email}

              onChange={(e) => setEmail(e.target.value)}

              required

            />

          </div>

          <div className="mb-3">

            <label htmlFor="mobile" className="form-label">

              Mobile

            </label>

            <input

              type="tel"

              className="form-control"

              id="mobileNo"

              value={mobileNo}

              onChange={(e) => setMobileNo(e.target.value)}

              required

            />

          </div>

          <div className="mb-3">

            <label htmlFor="role" className="form-label">

              Role

            </label>

            <input

              type="text"

              className="form-control"

              id="role"

              value={role}

              onChange={(e) => setRole(e.target.value)}

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

            Register

          </button>

        </form>

        <div className="text-center mt-3">

          <span>Already have an account?</span> <a href="/login">Login</a>

        </div>

      </div>

    </div>

  );

}

 

export default Register;