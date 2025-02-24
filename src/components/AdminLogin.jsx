import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const AdminLogin = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await axios.post('http://localhost:8000/api/admin/login/', credentials, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      });

      if (response.data.message === 'Login successful') {
        localStorage.setItem('isAuthenticated', 'true');
        navigate('/dashboard');
      }
    } catch (error) {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="container min-h-screen mx-auto pt-4">
      <div className="flex justify-between items-center">
        <h2 className="mb-6 text-2xl font-bold">Faculty Authentication</h2>
        <Link to="/">
          <button
            // onClick={Navigate to=''}
            className="rounded-md bg-gray-500 px-3 py-2 text-sm font-medium text-white hover:bg-red-600"
          >
            Faculty Auth
          </button>
        </Link>
      </div>
      <div className="w-full mx-auto mt-8 max-w-md space-y-8 rounded-xl bg-white p-10 shadow">
        <div>
          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">
            Admin Login
          </h2>
        </div>
        {error && (
          <div className="rounded-md bg-red-50 p-4 text-red-600">
            {error}
          </div>
        )}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4 rounded-md shadow-sm">
            <div>
              <input
                type="text"
                required
                className="relative block w-full rounded-md border p-2"
                placeholder="Username"
                value={credentials.username}
                onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
              />
            </div>
            <div>
              <input
                type="password"
                required
                className="relative block w-full rounded-md border p-2"
                placeholder="Password"
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
              />
            </div>
          </div>
          <button
            type="submit"
            className="group relative flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};


export default AdminLogin;