import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Hook from react-router-dom

  const loginHandler = async (e) => {
    e.preventDefault();
    const user = { email, password };
    console.log(user);

    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', user);
      console.log("Login:", res.data);

      if (res.data && res.data.token && res.data.role) {
        const userName = res.data.userName; //
        const userRole = res.data.userRole; 
        console.log(res.data.role)
        // Store the token
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('userName', userName);
        localStorage.setItem('userRole',userRole);

        // Redirect based on user role
        if (res.data.role === 'user') {
          navigate('/user');
        } else if (res.data.role === 'admin') {
          navigate('/admin');
        } else {
          console.error("Unknown role:", res.data.role);
        }
      } else {
        console.error("Login response does not contain expected data:", res.data);
      }
      console.log(user);
      setEmail("");
      setPassword("");

    } catch (err) {
      console.error("Error:", err);
    }

  };

  return (
    <>
      <div className='container'>
        <form onSubmit={loginHandler}>
          <h2>Login here!</h2>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input 
              type="email" 
              className="form-control" 
              id="exampleInputEmail1" 
              aria-describedby="emailHelp" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input 
              type="password" 
              className="form-control" 
              id="exampleInputPassword1" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>
          <button type="submit" className="btn btn-primary" onClick={loginHandler}>Submit</button>
        </form>
      </div>
    </>
  );
};

export default Login;
