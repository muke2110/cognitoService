import React, { useState } from 'react';
import './Login.css';
import { Amplify } from 'aws-amplify';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const Auth = Amplify

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const user = await Auth.signIn(username, password);
      console.log('Successfully logged in', user);
      // Handle successful login, such as redirecting the user
    } catch (error) {
      console.error('Error signing in', error);
      // Handle login error, such as displaying an error message to the user
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
