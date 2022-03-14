import axios from 'axios';
import React, { useState } from 'react'

function Login() {
  const [ username, setUsername ] = useState(""); 
  const [ password, setPassword ] = useState(""); 
  const login = () => {
    const data = { username: username, password: password};
    axios.post("http://localhost:3001/auth/login", data).then((reponse) => {
      console.log(reponse);
    });
  }
  return (
    <div>
      <input 
        type="text"
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
      <input 
      type="password"
      onChange={(event) => {
        setPassword(event.target.value);
        
      }}
      />
      <button onClick={login}>Login</button>

    </div>
  )
}

export default Login