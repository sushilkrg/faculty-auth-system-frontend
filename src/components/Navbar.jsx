import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear any stored auth state
        localStorage.removeItem('isAuthenticated');
        navigate('/');
    };

    return (
        <nav className="bg-indigo-600 shadow-lg">
            <div className="mx-auto max-w-7xl px-4">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center">
                        <Link to="/dashboard" className="text-xl font-bold text-white">
                            Faculty Auth System
                        </Link>
                    </div>

                    <div className="flex items-center space-x-4">
                        <Link
                            to="/dashboard"
                            className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-indigo-500"
                        >
                            Dashboard
                        </Link>
                        <Link
                            to="/add-faculty"
                            className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-indigo-500"
                        >
                            Add Faculty
                        </Link>
                        {/* <Link
                            to="/faculty-auth"
                            className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-indigo-500"
                        >
                            Face Auth
                        </Link> */}
                        <button
                            onClick={handleLogout}
                            className="rounded-md bg-red-500 px-3 py-2 text-sm font-medium text-white hover:bg-red-600"
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;