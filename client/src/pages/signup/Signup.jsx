import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GenderCheckbox from './GenderCheckbox'; // Ensure you have GenderCheckbox in the same directory
import useSignup from '../../hooks/useSignup';

const Signup = () => {
    const [inputs, setInputs] = useState({
        fullName: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        gender: '',
    });

    const { loading, signup } = useSignup();

    const handleGenderChange = (gender) => {
        setInputs({ ...inputs, gender });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(inputs);
    };

    return (
        <div
            className="flex flex-col items-center justify-center min-h-screen bg-cover px-4"
        >
            <div className="w-full max-w-md p-10 rounded-xl shadow-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-black bg-opacity-70 backdrop-filter backdrop-blur-3xl">
                <h1 className="text-5xl font-bold text-center text-white mb-8">
                    Signup <span className="text-blue-400">ChatBook</span>
                </h1>

                <form onSubmit={handleSubmit}>
                    {/* Full Name Field */}
                    <div className="mb-5">
                        <label className="block text-base font-semibold text-gray-200 mb-1">Full Name</label>
                        <input
                            type="text"
                            className="w-full px-4 py-2 text-gray-900 bg-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your full name..."
                            value={inputs.fullName}
                            onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
                        />
                    </div>

                    {/* Username Field */}
                    <div className="mb-5">
                        <label className="block text-base font-semibold text-gray-200 mb-1">Username</label>
                        <input
                            type="text"
                            className="w-full px-4 py-2 text-gray-900 bg-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Choose a username..."
                            value={inputs.username}
                            onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
                        />
                    </div>

                    {/* Email Field */}
                    <div className="mb-5">
                        <label className="block text-base font-semibold text-gray-200 mb-1">Email</label>
                        <input
                            type="email"
                            className="w-full px-4 py-2 text-gray-900 bg-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your email..."
                            value={inputs.email}
                            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
                        />
                    </div>

                    {/* Password Field */}
                    <div className="mb-5">
                        <label className="block text-base font-semibold text-gray-200 mb-1">Password</label>
                        <input
                            type="password"
                            className="w-full px-4 py-2 text-gray-900 bg-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Create a password..."
                            value={inputs.password}
                            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                        />
                    </div>

                    {/* Confirm Password Field */}
                    <div className="mb-5">
                        <label className="block text-base font-semibold text-gray-200 mb-1">Confirm Password</label>
                        <input
                            type="password"
                            className="w-full px-4 py-2 text-gray-900 bg-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Confirm your password..."
                            value={inputs.confirmPassword}
                            onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
                        />
                    </div>

                    {/* Gender Field */}
                    <GenderCheckbox
                        onCheckboxChange={handleGenderChange}
                        selectedGender={inputs.gender}
                    />

                    {/* Submit Button */}
                    <div>
                        <button
                            className={`w-full py-3 mt-2 font-bold text-white rounded-md transition duration-300 
                                ${loading ? "bg-gray-500 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600 border border-slate-700"}`}
                            disabled={loading}
                        >
                            {loading ? (
                                <div className="flex items-center justify-center">
                                    <span className="loading loading-spinner w-6 h-6 border-4 border-t-blue-500 border-gray-300 rounded-full animate-spin"></span>
                                    <span className="ml-2">Loading...</span>
                                </div>
                            ) : (
                                "Sign Up"
                            )}
                        </button>
                    </div>

                    {/* Link to Login */}
                    <Link
                        to="/login"
                        className="text-sm text-gray-400 hover:text-blue-400 hover:underline block text-center mt-4"
                    >
                        Already have an account? Login
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default Signup;
