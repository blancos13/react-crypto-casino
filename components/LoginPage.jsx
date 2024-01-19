import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userBalance, setUserBalance] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const checkLoggedInStatus = async () => {
      const storedToken = localStorage.getItem('token');
      if (storedToken) {
        // If a token exists in local storage, set isLoggedIn to true
        setIsLoggedIn(true);
  
        // Fetch user data and balance
        await fetchUserData(storedToken);
        await fetchUserBalance(username);
      }
    };
  
    checkLoggedInStatus();
  }, [username]); // Include 'username' as a dependency
  
  const generateWorldName = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let worldName = '';
  
    for (let i = 0; i < 8; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      worldName += characters.charAt(randomIndex);
    }
  
    return worldName;
  };
  
  // Common style object for the labels
  const labelStyle = {
    display: 'flex',
    fontWeight: 500,
    backgroundColor: 'rgb(28, 29, 39)',
    color: 'rgb(163, 166, 194)',
    padding: '0.75rem',
    border: '1px solid rgb(57, 62, 90)',
    borderRadius: '5px',
    flexDirection: 'column',
  };

  const labelStyles = {
    fontWeight: 500,
    color: 'rgb(163, 166, 194)',
    padding: '1rem',
    borderRadius: '5px',
  };

  // Style object for the button
  const buttonStyle = {
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0.5rem 1rem',
    transition: 'all 0.1s ease 0s',
    color: 'white',
    backgroundColor: 'rgb(68, 131, 235)',
    boxShadow: 'rgba(255, 255, 255, 0.2) 0px 1px 0px inset, rgba(0, 0, 0, 0.15) 0px -3px 0px inset, rgb(83, 97, 180) 0px 0px 12px inset',
    border: 'transparent',
    borderRadius: '4px',
    textDecoration: 'none',
    fontWeight: 600,
    fontFamily: 'inherit',
    fontSize: '0.9rem',
    textShadow: 'rgba(0, 0, 0, 0.3) 0.5px 1px 2px',
    cursor: 'pointer',
    userSelect: 'none',
    width: '100%',
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3001/login', {
        username,
        password,
      });
  
      if (response.data.success) {
        const { username, token } = response.data;
  
        // Update component state with username and set isLoggedIn to true
        setUsername(username);
        setIsLoggedIn(true);
  
        // Store the token in localStorage
        localStorage.setItem('token', token);
  
        // Fetch user data and balance after successful login
        await fetchUserData();
        await fetchUserBalance(username);
  
        toast.success(`Login successful! Welcome, ${username}!`);
      } else {
        toast.error('Login failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during Login:', error);
      toast.error('An error occurred during Login. Please try again.');
    }
  };
  
  const handleLogout = () => {
    // Clear the token from localStorage, set isLoggedIn to false, and reset user-related states
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    setUsername('');
    setUserBalance(null);
  };

  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:3001/getUserData', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      // ... (handle the response)
    } catch (error) {
      console.error('Error fetching user data:', error);
      toast.error('An error occurred while fetching user data.');
    }
  };
  
  const handleCheckBalance = () => {
    // Fetch user balance when the button is clicked
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      fetchUserBalance(username);
    }
  };

  const fetchUserBalance = async () => {
    try {
      const storedToken = localStorage.getItem('token');
  
      // Include the token in the request headers
      const balanceResponse = await axios.get(`http://localhost:3001/getBalance`, {
        headers: {
          Authorization: `Bearer ${storedToken}`,
        },
      });
  
      if (balanceResponse.data.success) {
        const { username, balance } = balanceResponse.data;
        setUserBalance(balance);
        setUsername(username); // Set the username in the component state
      } else {
        console.error('Error fetching user balance:', balanceResponse.data.error);
        toast.error('An error occurred while fetching user balance.');
      }
    } catch (error) {
      console.error('Error fetching user balance:', error);
      toast.error('An error occurred while fetching user balance.');
    }
  };
    
  const handleIncreaseBalance = async () => {
    try {
      const token = localStorage.getItem('token');

      // Send a request to the server to increase the user's balance
      const response = await axios.post(
        'http://localhost:3001/increaseBalance',
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.success) {
        // Fetch the updated balance after increasing
        fetchUserBalance(username);

        toast.success('Balance increased successfully!');
      } else {
        toast.error('Failed to increase balance.');
      }
    } catch (error) {
      console.error('Error during balance increase:', error);
      toast.error('An error occurred during balance increase.');
    }
  };

  return (
    <div className="register-container">
            <button style={buttonStyle} type="button" onClick={openModal}>
        Open Wallet
      </button>

      {/* Modal */}
<Modal
  isOpen={isModalOpen}
  onRequestClose={closeModal}
  contentLabel="Wallet Modal"
  className="custom-modal"
  style={{
    content: {
      width: '200px',
      height: '200px',
      margin: 'auto',
      backgroundColor: 'white', // Modal içeriğinin arka plan rengi
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.7)', // Modal arka planının rengi ve şeffaflığı
    },
  }}
>
  {/* Modal içeriği için konteyner */}
  <div id="modal" className="sc-1fxen5m-0 jffOPb">
    {/* GrowID input box */}
    <div>
      <label htmlFor="growIdInput">GrowID</label>
      <input type="text" id="growIdInput" placeholder="GrowID'nizi girin" />
    </div>

    {/* World name input box */}
    <div>
      <label htmlFor="worldNameInput">Dünya Adı</label>
      <input
        type="text"
        id="worldNameInput"
        placeholder="Otomatik oluşturulan dünya adı"
        value={generateWorldName()}
        readOnly
      />
    </div>

    {/* ... (diğer mevcut modal içeriği) */}
  </div>

  {/* Kapatma düğmesi */}
  <button className="close-button" onClick={closeModal}>
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 24 24"
      height="23"
      width="23"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
    </svg>
  </button>
</Modal>;



      {isLoggedIn ? (
        <div>
          <h2 style={labelStyles}>Welcome, {username}!</h2>
          <p>Your balance: {userBalance}</p>
          <button style={buttonStyle} type="button" onClick={handleCheckBalance}>
            Check Balance
          </button>
          <button style={buttonStyle} type="button" onClick={handleIncreaseBalance}>
            Increase Balance
          </button>
          <button style={buttonStyle} type="button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      ) : (
        <div>
          <h2 style={labelStyles}>Login</h2>
          <form className="register-form">
            <label style={labelStyle}>
              Username:
              <input
                className="input-field"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <br />
            <label style={labelStyle}>
              Password:
              <input
                className="input-field"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <br />
            <button style={buttonStyle} type="button" onClick={handleLogin}>
              Login
            </button>
          </form>
        </div>
      )}

      {/* ToastContainer for displaying toast notifications */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="white"
        style={{
          fontSize: '14px', // Adjust the font size
          padding: '10px', // Adjust the padding
          maxWidth: '100%', // Ensure the container is responsive
        }}
      />
    </div>
  );
};

export default LoginPage;
