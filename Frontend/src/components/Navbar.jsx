import { NavLink } from 'react-router-dom';
import { IoSearch } from "react-icons/io5";
import Home from './Home';
import { FaUser } from 'react-icons/fa';

const Navbar = () => {
    return (
        <div>
            <nav className="relative flex items-center justify-between p-4  bg-[#02005c] font-semibold ">
                <h1 className="uppercase text-2xl rounded-md font-bold text-yellow-200  ">FOODIE</h1>
                <div className="relative flex items-center ml-24">
                    <input
                        className=' ml-20 w-[400px] h-[40px] pl-10 py-2 border rounded-lg bg-yellow-100'
                        type="text"
                        placeholder='Search Your Food....'
                    />
                    <IoSearch className='absolute ml-96 left-2 text-gray-400' />
                </div>


                <ul className="flex space-x-3   ">
                    <li>

                        <NavLink
                            exact
                            to="/"
                            className="text-white hover:text-black transition duration-300 ease-in-out transform hover:scale-110 hover:bg-red-200 rounded-full px-4 py-2 shadow-lg hover:shadow-xl"
                            activeClassName="text-red-500"
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className="text-white hover:text-black transition duration-300 ease-in-out transform hover:scale-110 hover:bg-red-200 rounded-full px-4 py-2 shadow-lg hover:shadow-xl"
                            activeClassName="text-red-500"
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/login"
                            className="text-white hover:text-black transition duration-300 ease-in-out transform hover:scale-110 hover:bg-red-200 rounded-full px-4 py-2 shadow-lg hover:shadow-xl"
                            activeClassName="text-red-500"
                        >
                            Login
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            className="text-white hover:text-black transition duration-300 ease-in-out transform hover:scale-110 hover:bg-red-200 rounded-full px-4 py-2 shadow-lg hover:shadow-xl"
                            activeClassName="text-red-500"
                        >
                            Contact
                        </NavLink>
                    </li>
                </ul>
                <NavLink to='/login'
                >  <div className="text-white text-4xl ">

                        <FaUser className="w-50 text-red-400"
                            activeClassName="text-red-500" />
                    </div></NavLink>
            </nav>
            <Home />


        </div>
    );
}

export default Navbar;
