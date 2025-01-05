import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-cover" >
            <div className="w-full max-w-md p-8 rounded-lg shadow-lg bg-gradient-to-r from-gray-800 via-gray-900 to-black bg-opacity-60 backdrop-filter backdrop-blur-lg">
                <h1 className="text-4xl font-bold text-center text-white mb-6">
                    Login
                    <span className="text-blue-400"> ChatApp </span>
                </h1>

                <form>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                            Username
                        </label>
                        <input type="text" className="w-full px-4 py-2 text-gray-900 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Username..." />
                    </div>

                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                            Password
                        </label>
                        <input type="password" className="w-full px-4 py-2 text-gray-900 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Password..." />
                    </div>

                    <Link to="/signup" className="text-sm text-gray-400 hover:text-blue-400 hover:underline block mb-4">
                        Don't have an account? Signup
                    </Link>

                    <button className="w-full py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md transition duration-300">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
