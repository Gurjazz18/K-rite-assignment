import React, { useState } from 'react';
import "./Register.css"
const Register = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [age, setAge] = useState()

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      name,
      email,
      password,
      age,
    };
  
    fetch(`http://localhost:8080/user/register`, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if(res.status){
          alert("Register Succesfully")
        }
        // Reset the state values after successful submission
        
        setName('');
        setEmail('');
        setPassword('');
        setAge('');
        
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="register-container">
    <h1>Register Page</h1>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <input
        type="number"
        placeholder="Enter Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />

      <button type="submit">Submit</button>
    </form>
  </div>
  )
}

export default Register
