import axios from "axios";
import { useState } from "react";
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from "react-router-dom";
import "../styles/Userlogin.css"


const UserLogin=()=>{
    let [email,setemail]=useState("")
    let [password,setpassword]=useState("")

    let navigate=useNavigate()
    function verifyUserByEmail(e) {
        e.preventDefault()
        axios.post(`http://localhost:8080/users/verify-by-email?email=${email}&password=${password}`)
        .then((res)=>{
            console.log(res.data);
            navigate("/user-home-page")
            alert("User Login Successfull")
        })

        .catch((err)=>{
            console.log(err.data);
            alert("Invalid credentials")
        })
        
    }
    return (
        <div className="userLogin">
           <Form>
                <h4>User Login Form</h4>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control value={email} onChange={(e)=>{setemail(e.target.value)}} type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control value={password} onChange={(e)=>{setpassword(e.target.value)}} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group>
                    <button onClick={verifyUserByEmail} className='btn btn-success mx-5' >Sign In</button>
                    <button className='btn btn-danger mx-5'><Link to="/user-signup">Sign Up</Link></button>
                </Form.Group>
            </Form>
        </div>
    );
}
export default UserLogin;