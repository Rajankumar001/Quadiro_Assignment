import React ,{useState}from 'react';
import axios from 'axios';
const Register = () => {
  const [username,setUsername]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [role,setRole]=useState("");
const Register_handler=async(e)=>{
  e.preventDefault(); 
    const user={username,email,password,role};
    console.log(user);
     await axios.post('http://localhost:5000/api/auth/register',user)
     .then((res) => {
      console.log("Todo saved:", res.data.data);
    })
    .catch((err) => {
      console.error("Error:", err);
    });
    console.log(user);
    setUsername(" ");
    setEmail(" ");
    setPassword(" ");
    setRole(" ");
   }

  return (
    <>
     <div className='container'>
      <form>
      <h2>Register here !</h2>
      <div class="mb-3">
    <label for="exampleInputEmail1" className="form-label">Name</label>
    <input type="text" className="form-control" id="exampleInputName"  value={username} onChange={(e)=>setUsername(e.target.value)}/>
   
    </div>
      <div class="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1"  value={email} onChange={(e)=>setEmail(e.target.value)}/>
    </div>
    <div class="mb-3">
    <label for="exampleInputEmail1" className="form-label">Role</label>
    <input type="text" className="form-control" id="exampleInputrole"  value={role} onChange={(e)=>setRole(e.target.value)}/>
    </div>
    <div class="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e)=>setPassword(e.target.value)}/>
  </div>
  <button type="submit" onClick={Register_handler} class="btn btn-primary">Submit</button>
</form>
</div>
    </>
  )
}

export default Register
