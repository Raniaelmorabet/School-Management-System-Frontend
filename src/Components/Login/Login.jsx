import React, { useRef, useEffect, useState } from 'react';
import axios from 'axios';
import './Login.css';
import { FaUser, FaLock } from 'react-icons/fa';

function Login() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Set focus to the email input on component mount
    emailRef.current.focus();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    try {
      const response = await axios.post('/api/auth/login', { email, password }); //bdel smiya dyal endpoint b lli endk f backend 'oussama'
      const { token, role } = response.data;

      if (role === 'director' || role === 'assistant') {
        localStorage.setItem('jwt', token);
        console.log('Login successful');
      } else {
        setError('Access denied: unauthorized role');
      }
    } catch (err) {
      setError('Login failed: ' + err.message);
    }
  };

  return (
    <div className="container">
      <div className="form-box login">
        <form onSubmit={handleSubmit}>
          <h1 className="font-bold">Login</h1>
          {error && <p className="error">{error}</p>}
          <div className="input-box">
            <input
              type="email"
              placeholder="Email"
              required
              ref={emailRef}
            />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              required
              ref={passwordRef}
            />
            <FaLock className="icon" />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
