import React, { useState } from 'react'
import './Registercomp.css'
import { useNavigate } from 'react-router-dom';




const ResigterComp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const register = async () => {
    const item = { email, password };
    const result = await fetch("http://localhost:3000/users", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(item)
    });
    const data = await result.json();
    localStorage.setItem('user-info', JSON.stringify(data));
    navigate('/');
  };

  return (
    <div id='register'>
        <label>Email</label>
        <input type="text" name='email' value={register.email} onChange={handleEmailChange}/>
        <label>Password</label>
        <input type="password" name='password' value={register.password} onChange={handlePasswordChange}/>
        <button onClick={register}>Register</button>

    </div>
  )
}

export default ResigterComp