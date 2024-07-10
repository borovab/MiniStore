import React, { useState } from 'react';
import './Logincomp.css';
import { useNavigate } from 'react-router-dom';

const LoginComp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const login = async () => {
    const result = await fetch("http://localhost:3000/users");
    const users = await result.json();

    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
      localStorage.setItem('user-info', JSON.stringify(user));
      navigate('/');
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div id='login'>
      <label>Email</label>
      <input type="text" name='email' value={email} onChange={handleEmailChange} />
      <label>Password</label>
      <input type="password" name='password' value={password} onChange={handlePasswordChange} />
      <button onClick={login}>Login</button>
    </div>
  );
}

export default LoginComp;
