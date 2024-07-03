import { useState } from 'react';
import img1 from '../assets/images/img1.jpg';
import imgBg from '../assets/images/imgBg.jpg';
import imga from '../assets/images/imga.jpg';
import imgb from '../assets/images/imgb.jpg';
import imgc from '../assets/images/imgc.jpg';
import Footer from './Footer';

const Home = () => {
  const [order, setOrder] = useState([]);

  const handleOrder = () => {
    
    const newOrder = {
      id: order.length + 1, 
      timestamp: new Date().toLocaleString(),
      details: "Example order details", 
    };
    setOrder([...order, newOrder]);
    console.log('Order placed:', newOrder);
      alert("Order placed successfully")
  };

  return (
    <div>
      {/* First section */}
      <div className="relative w-full h-screen">
        <img
          src={img1}
          className="w-full h-full object-cover"
          alt="Background Image"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-[#030303] bg-opacity-60 text-white text-center text-2xl font-bold w-96 h-90 p-6 rounded-lg shadow-lg">
            <h1 className="text-white text-4xl font-extrabold animate-fade-in">Your  Taste is Our <span className='text-red-800'>Priority</span></h1>
            <p className="text-gray-300 animate-slide-in">Discover our diverse menu, try our delicious dishes, and enjoy a delicious meal together.</p>
            <button  onClick={handleOrder}
              className="mt-6 bg-[#55AD9B] hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full animate-bounce"
            >
              Order Now
            </button>
          </div>
        </div>
      </div>

      {/* Second section */}
      <div className="relative w-full h-screen bg-slate-800 border border-1 border-white">
        <img
          src={imgBg}
          className="w-full h-full object-cover"
          alt="Background Image"
        />
        <div className="absolute inset-0 flex mt-32 items-center space-x-20 ml-32 grid-cols-3">
          <div className="bg-[#030303] bg-opacity-60 text-white text-center text-2xl font-bold w-96 h-90 p-6 rounded-lg shadow-lg">
            <h1 className="text-white text-4xl font-extrabold animate-fade-in">Discover Our <span className='text-red-400'>Menu</span></h1>
            <img
              src={imga}
              className="w-80 object-fit h-64"
              alt="Image A"
            />
            <p className="text-gray-400 animate-slide-in text-xl">Discover our diverse menu, try our delicious dishes, and enjoy a delicious meal together.</p>
            <button className="mt-4 bg-[#3DC2EC] hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full animate-pulse">Order Now</button>
          </div>
          <div className="bg-[#030303] bg-opacity-60 text-white text-center text-2xl font-bold w-96 h-90 p-6 rounded-lg shadow-lg">
            <h1 className="text-white text-4xl font-extrabold animate-fade-in">Discover Our <span className='text-red-400'>Specialties</span></h1>
            <img
              src={imgb}
              className="w-full h-64 object-fit"
              alt="Image B"
            />
            <p className="text-gray-400 animate-slide-in text-xl">Discover our diverse menu, try our delicious dishes, and enjoy a delicious meal together.</p>
            <button className="mt-4 bg-[#3DC2EC] hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full animate-pulse">Order Now</button>
          </div>
          <div className="bg-[#030303] bg-opacity-60 text-white text-center text-2xl font-bold w-96 h-90 p-6 rounded-lg shadow-lg">
            <h1 className="text-white text-4xl font-extrabold animate-fade-in">Discover Our <span className='text-red-400'>Delicacies</span></h1>
            <img
              src={imgc}
              className="w-full h-64 object-fit"
              alt="Image C"
            />
            <p className="text-gray-400 animate-slide-in text-xl">Discover our diverse menu, try our delicious dishes, and enjoy a delicious meal together.</p>
            <button className="mt-4 bg-[#3DC2EC] hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full animate-pulse">Order Now</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
