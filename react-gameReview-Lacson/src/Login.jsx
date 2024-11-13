import React, { useState } from 'react';

export default function Login({ onLogin }) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const account = {
    username: "admin",
    password: "admin"
  };

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    if (userName === account.username && password === account.password) {
      onLogin(true);
      alert("Login successful!");
    } else {
      alert("Invalid username or password.");
    }
  };

  return (
    <div className="login-container">
      <h1>Welcome to Carrene's Reviews!</h1>
      <br />
      <h4>Login to Continue:</h4>
      <br />
      <hr />
      <br />
      <label>Username:</label>
      <input type="text" value={userName} onChange={handleUserNameChange} />
      <br />
      <label>Password:</label>
      <input type="password" value={password} onChange={handlePasswordChange} />
      <br />
      <button type="button" onClick={handleLogin}>Login</button>
    </div>
  );
}
