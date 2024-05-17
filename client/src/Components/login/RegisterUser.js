import { useState } from 'react'
import React from 'react'
import axios from 'axios'
import './SignIn.css'


function RegisterUser() {
    
    const users = {
        name:"",
        password:""
    }

    const[user, setUser] = useState(users)

    const inputHandler = (e)=>{
        const{name, value} = e.target;
        setUser({...user, [name]:value})
        // console.log(name)
        // console.log(value)
    }

    const submitForm = async(e) =>{
        e.preventDefault();
        await axios.post("http://localhost:8000/quiz/adduser",user)
        .then((response)=>{
            console.log(response)
        })
        .catch(error => console.log(error))
    }


  return (
    <>
    <form onSubmit={submitForm} >
  <div className="imgcontainer">
    {/* <img src="img_avatar2.png" alt="Avatar" className="avatar" /> */}
  </div>
  <div className="container">
    <label htmlFor="name">
      <b>Username</b>
    </label>
    <input onChange={inputHandler} type="text" placeholder="Enter Username" name="name" required="" />
    <label htmlFor="psw">
      <b>Password</b>
    </label>
    <input
      onChange={inputHandler}
      type="password"
      placeholder="Enter Password"
      name="password"
      required=""
    />
    <button type="submit">Register</button>
  </div>
  <div className="container">
    <button type="button" className="cancelbtn">
      Cancel
    </button>
  </div>
</form>

    </>
  )
}

export default RegisterUser