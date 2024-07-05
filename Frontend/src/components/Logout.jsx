import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const Logout = () => {
  const history = useHistory();
  const [loggedOut, setLoggedOut] = useState(false);

  useEffect(() => {
    // Simulate logout process
    localStorage.removeItem('token'); // Clear any user session data (e.g., tokens)
    setLoggedOut(true); // Set state to indicate logout success after token removal
    setTimeout(() => {
      history.push('/login'); // Redirect to the login page after a short delay (simulating asynchronous action completion)
    }, 2000); // Adjust the delay time as needed
  }, [history]);

  return (
    <div className="text-center mt-8">
      {loggedOut && (
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Logout Successful!</h2>
          <p className="text-lg text-gray-600">You have been logged out successfully.</p>
        </div>
      )}
    </div>
  );
};

export default Logout;
