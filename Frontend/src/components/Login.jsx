/* eslint-disable react/no-unescaped-entities */
import { NavLink } from "react-router-dom";

const Login = () => {
    
    return (
        <div className="bg-gray-900 min-h-screen flex items-center justify-center">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full mx-4 sm:w-96">
                <h1 className="text-3xl font-extrabold text-white text-center mb-6">Login</h1>
                <form className="space-y-4">
                    <div className="text-white">
                        <label htmlFor="email" className="block">Email:</label>
                        <input
                            id="email"
                            className="block w-full rounded-sm px-3 py-2 bg-gray-700 text-white"
                            type="email"
                            placeholder="Enter your Email"
                        />
                    </div>
                    <div className="text-white">
                        <label htmlFor="password" className="block">Password:</label>
                        <input
                            id="password"
                            className="block w-full rounded-sm px-3 py-2 bg-gray-700 text-white"
                            type="password"
                            placeholder="Enter your password"
                        />
                    </div>
                    <button
                        type="submit"
                        className="block w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-sm transition duration-300"
                    >
                        Login
                    </button>
                </form>
                <div className="text-white text-center mt-4">
                    <p>Don't have an account?</p>
                    <NavLink
                        to='/register'>    <a  className="text-blue-400 hover:underline">Register here</a>
                    </NavLink>

                </div>
            </div>
        </div>

    );
};

export default Login;
