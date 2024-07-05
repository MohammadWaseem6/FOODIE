/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await fetch('http://localhost:8081/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            
            });

            if (!response.ok) {
                throw new Error('Login failed');
            }
            

            const data = await response.json();
            // Save token to localStorage or context
            localStorage.setItem('token', data.token);
            // Handle successful login (e.g., redirect)
            console.log('Login successful:', data);
            navigate('/'); // Redirect to home page or dashboard
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    };

    return (
        <div className="bg-gray-900 min-h-screen flex items-center justify-center">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full mx-4 sm:w-96">
                <h1 className="text-3xl font-extrabold text-white text-center mb-6">Login</h1>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="text-white">
                        <label htmlFor="email" className="block">Email:</label>
                        <input
                            id="email"
                            className="block w-full rounded-sm px-3 py-2 bg-gray-700 text-white"
                            type="email"
                            placeholder="Enter your Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="text-white">
                        <label htmlFor="password" className="block">Password:</label>
                        <input
                            id="password"
                            className="block w-full rounded-sm px-3 py-2 bg-gray-700 text-white"
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    {error && <p className="text-red-500 text-center">{error}</p>}
                    <button
                        type="submit"
                        className="block w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-sm transition duration-300"
                        disabled={loading}
                    >
                        {loading ? 'Logging in...' : 'Login'}
                    </button>
                </form>
                <div className="text-white text-center mt-4">
                    <p>Don't have an account?</p>
                    <NavLink to='/register' className="text-blue-400 hover:underline">Register here</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Login;
