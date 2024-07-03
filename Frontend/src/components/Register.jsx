import  { useState } from 'react';
import axios from 'axios';
//  day 2
const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    pincode: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8081/register', formData);
      console.log(response.data);
      alert('User registered successfully');
    } catch (error) {
      console.error(error);
      alert('Failed to register user');
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full mx-4 sm:w-96">
        <h1 className="text-3xl font-extrabold text-white text-center mb-6">Register</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="text-white">
            <label htmlFor="name" className="block">Name:</label>
            <input
              id="name"
              className="block w-full rounded-sm px-3 py-2 bg-gray-700 text-white"
              type="text"
              placeholder="Enter your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="text-white">
            <label htmlFor="email" className="block">Email:</label>
            <input
              id="email"
              className="block w-full rounded-sm px-3 py-2 bg-gray-700 text-white"
              type="email"
              placeholder="Enter your Email"
              value={formData.email}
              onChange={handleChange}
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
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="text-white">
            <label htmlFor="phone" className="block">Phone Number:</label>
            <input
              id="phone"
              className="block w-full rounded-sm px-3 py-2 bg-gray-700 text-white"
              type="tel"
              placeholder="Enter your Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="text-white">
            <label htmlFor="pincode" className="block">Pincode:</label>
            <input
              id="pincode"
              className="block w-full rounded-sm px-3 py-2 bg-gray-700 text-white"
              type="text"
              placeholder="Enter your Pincode"
              value={formData.pincode}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="block w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-sm transition duration-300"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
