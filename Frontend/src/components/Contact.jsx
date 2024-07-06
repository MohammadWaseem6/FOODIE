import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="bg-gray-900 min-h-screen p-8 text-white">
      <h1 className="text-4xl font-extrabold text-center mb-8">Contact Us</h1>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div className="bg-slate-800 p-6 rounded-lg shadow-lg">
          <FaPhoneAlt className="text-3xl mb-4 text-center mx-auto text-teal-400" />
          <h2 className="text-2xl font-bold text-center mb-4">Phone</h2>
          <p className="text-center">Call us at +919596585405 for any inquiries or support.</p>
        </div>
        <div className="bg-teal-800 p-6 rounded-lg shadow-lg">
          <FaEnvelope className="text-3xl mb-4 text-center mx-auto text-yellow-400" />
          <h2 className="text-2xl font-bold text-center mb-4">Email</h2>
          <p className="text-center">Send us an email at contact@foodie.com for any questions.</p>
        </div>
        <div className="bg-yellow-800 p-6 rounded-lg shadow-lg">
          <FaMapMarkerAlt className="text-3xl mb-4 text-center mx-auto text-slate-400" />
          <h2 className="text-2xl font-bold text-center mb-4">Address</h2>
          <p className="text-center">New Colony Sopore Jammu & Kashmir INDIA</p>
        </div>
      </div>
      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <div className="bg-slate-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2">Name:</label>
              <input id="name" type="text" className="w-full rounded px-3 py-2 bg-gray-700 text-white" placeholder="Your Name" />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2">Email:</label>
              <input id="email" type="email" className="w-full rounded px-3 py-2 bg-gray-700 text-white" placeholder="Your Email" />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2">Message:</label>
              <textarea id="message" className="w-full rounded px-3 py-2 bg-gray-700 text-white" rows="4" placeholder="Your Message"></textarea>
            </div>
            <button type="submit" className="w-full bg-teal-500 hover:bg-teal-600 text-white py-2 rounded transition duration-300">Send Message</button>
          </form>
        </div>
        <div className="bg-slate-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Our Location</h2>
          <div className="w-full h-64 bg-gray-700 rounded-lg overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.27991419095!2d-74.25986465752962!3d40.69714942439027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f4f5a3b8b8d7%3A0x8d4e0e5cf9b72e10!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1624623833606!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              title="Google Map Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
