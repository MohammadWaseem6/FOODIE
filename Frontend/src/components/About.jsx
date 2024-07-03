import React from 'react';
import { FaTruck, FaGlobe, FaPlane, FaMapMarkerAlt, FaStar } from 'react-icons/fa'; // Importing icons from react-icons

const About = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-4xl font-extrabold text-white text-center mb-8">About Us</h1>
        <p className="text-lg text-white leading-relaxed">
          We are on a mission to revolutionize food delivery in India. Our commitment is to deliver
          not just meals, but experiences. From the bustling streets of Mumbai to the serene valleys
          of Kashmir, we bring the flavors of India to your doorstep.
        </p>
        <p className="text-lg text-white mt-4 leading-relaxed">
          At FOODIE, taste meets technology. With our intuitive ordering platform and
          top-notch customer service, we ensure every interaction is seamless and satisfying.
          Whether you're a food enthusiast or simply hungry, join us in celebrating the joy of good
          food.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mt-12">
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg flex items-center">
          <FaTruck className="text-5xl text-green-400 mr-4" />
          <div>
            <h2 className="text-3xl font-semibold text-white mb-4">Fast Delivery</h2>
            <p className="text-lg text-white leading-relaxed">
              With our efficient delivery network, we ensure your meals arrive fresh and on time,
              every time. Experience convenience like never before with FOODIE.
            </p>
          </div>
        </div>
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg flex items-center">
          <FaGlobe className="text-5xl text-purple-400 mr-4" />
          <div>
            <h2 className="text-3xl font-semibold text-white mb-4">Global Reach</h2>
            <p className="text-lg text-white leading-relaxed">
              Serving customers not only in major cities but also in remote areas across India
              and worldwide. Experience our commitment to reaching every corner of the globe with
              delicious food options.
            </p>
          </div>
        </div>
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg flex items-center">
          <FaPlane className="text-5xl text-blue-400 mr-4" />
          <div>
            <h2 className="text-3xl font-semibold text-white mb-4">International Delivery</h2>
            <p className="text-lg text-white leading-relaxed">
              We deliver worldwide, bringing the best of Indian cuisine to your doorstep,
              ensuring a global culinary experience wherever you are.
            </p>
          </div>
        </div>
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg flex items-center">
          <FaMapMarkerAlt className="text-5xl text-red-400 mr-4" />
          <div>
            <h2 className="text-3xl font-semibold text-white mb-4">Local Service</h2>
            <p className="text-lg text-white leading-relaxed">
              From metro cities to rural areas, our local delivery ensures freshness and taste
              in every bite, with personalized service tailored to your locality.
            </p>
          </div>
        </div>
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg flex items-center">
          <FaStar className="text-5xl text-yellow-400 mr-4" />
          <div>
            <h2 className="text-3xl font-semibold text-white mb-4">Customer Reviews</h2>
            <div className="flex items-center mb-4">
              <FaStar className="text-yellow-400 mr-2" />
              <p className="text-lg text-white leading-relaxed">"The food quality is exceptional, and the delivery is always on time!"</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg flex items-center">
          <FaStar className="text-5xl text-yellow-400 mr-4" />
          <div>
            <div className="flex items-center mb-4">
              <FaStar className="text-yellow-400 mr-2" />
              <p className="text-lg text-white leading-relaxed">"I love the variety of cuisines available, it's like traveling the world through food!"</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg flex items-center">
          <FaStar className="text-5xl text-yellow-400 mr-4" />
          <div>
            <div className="flex items-center mb-4">
              <FaStar className="text-yellow-400 mr-2" />
              <p className="text-lg text-white leading-relaxed">"Great customer service! They really go above and beyond to make sure you're satisfied."</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg flex items-center">
          <FaStar className="text-5xl text-yellow-400 mr-4" />
          <div>
            <div className="flex items-center mb-4">
              <FaStar className="text-yellow-400 mr-2" />
              <p className="text-lg text-white leading-relaxed">"Consistently delicious meals, always delivered with a smile."</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg flex items-center">
          <FaStar className="text-5xl text-yellow-400 mr-4" />
          <div>
            <div className="flex items-center">
              <FaStar className="text-yellow-400 mr-2" />
              <p className="text-lg text-white leading-relaxed">"Reliable service and high-quality ingredients make them my go-to for food delivery."</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg flex items-center">
          <FaStar className="text-5xl text-yellow-400 mr-4" />
          <div>
            <h2 className="text-3xl font-semibold text-white mb-4">Customer Satisfaction</h2>
            <p className="text-lg text-white leading-relaxed">
              We prioritize your satisfaction above all else. Our team is dedicated to providing
              personalized service and ensuring every meal brings joy to your table.
            </p>
          </div>
        </div>
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg flex items-center">
          <FaStar className="text-5xl text-yellow-400 mr-4" />
          <div>
            <h2 className="text-3xl font-semibold text-white mb-4">Quality Ingredients</h2>
            <p className="text-lg text-white leading-relaxed">
              Using only the freshest and finest ingredients, we guarantee a delightful culinary
              experience with every dish you order.
            </p>
          </div>
        </div>
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg flex items-center">
          <FaStar className="text-5xl text-yellow-400 mr-4" />
          <div>
            <h2 className="text-3xl font-semibold text-white mb-4">Variety of Cuisines</h2>
            <p className="text-lg text-white leading-relaxed">
              Explore a diverse menu with cuisines from around the world, carefully curated to
              satisfy every palate and craving.
            </p>
          </div>
        </div>
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg flex items-center">
          <FaStar className="text-5xl text-yellow-400 mr-4" />
          <div>
            <h2 className="text-3xl font-semibold text-white mb-4">Easy Ordering</h2>
            <p className="text-lg text-white leading-relaxed">
              Our intuitive and user-friendly ordering platform ensures a seamless experience from
              selection to delivery, making food ordering effortless and enjoyable.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
