import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useLogin from '../../hooks/useLogin';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {loading, login} = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(username, password);
    };

    return (
        <div
            className="flex flex-col items-center justify-center min-h-screen bg-cover px-4"
            style={{ backgroundImage: "url('path/to/your/background/image.jpg')" }}
        >
            <div className="w-full max-w-md p-8 rounded-lg shadow-lg bg-gradient-to-r from-gray-800 via-gray-900 to-black bg-opacity-60 backdrop-filter backdrop-blur-lg">
                <h1 className="text-4xl font-bold text-center text-white mb-6">
                    Login <span className="text-blue-400">ChatBook</span>
                </h1>

                <form onSubmit={handleSubmit}>
                    {/* Username Field */}
                    <div className="mb-5">
                        <label className="block text-sm font-medium text-gray-300 mb-2">Username</label>
                        <input
                            type="text"
                            className="w-full px-4 py-2 text-gray-900 bg-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your username..."
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    {/* Password Field */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
                        <input
                            type="password"
                            className="w-full px-4 py-2 text-gray-900 bg-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your password..."
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className={`w-full py-3 font-bold text-white rounded-lg shadow-md transition duration-300 
                                ${loading ? "bg-gray-500 cursor-not-allowed" : "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"}`}
                            disabled={loading}
                        >
                            {loading ? (
                                <div className="flex items-center justify-center">
                                    <span className="loading-spinner w-6 h-6 border-4 border-t-blue-500 border-gray-300 rounded-full animate-spin"></span>
                                    <span className="ml-2">Logging In...</span>
                                </div>
                            ) : (
                                "Login"
                            )}
                        </button>

                    </div>

                    {/* Link to Signup */}
                    <Link
                        to="/signup"
                        className="text-sm text-gray-400 hover:text-blue-400 hover:underline block text-center mt-4"
                    >
                        Don’t have an account? Signup
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default Login;
