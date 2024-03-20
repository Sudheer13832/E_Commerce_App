import axios from 'axios';
import "../styles/MerchantLogin.css"
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import validator from 'validator';



const MerchantLogin = () => {
    let [email,setemail]=useState('')
    let [password,setpassword]=useState('')
    let navigate=useNavigate()
     function verifyByEmail(e) {
        e.preventDefault()
        axios.post(`http://localhost:8080/merchants/verify-by-email?email=${email}&password=${password}`)
        .then((resp)=>{
            console.log(resp.data);
            localStorage.setItem("Merchant",JSON.stringify(resp.data.body))

            navigate("/merchant-home-page")
            alert("Login succesfull")
        })
        .catch((err)=>{
            console.log(err.data);
            alert("Invalid credentials")
        })
    }
    return (
        <div className="merchantLogin">
            <Form>
                <h4>Merchant Login Form</h4>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control value={email} onChange={(e)=>{setemail(e.target.value)}} type="text" placeholder="Enter email address" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control value={password} onChange={(e)=>{setpassword(e.target.value)}} type="password" placeholder="Enter Password" />
                </Form.Group>
                <Form.Group>
                    <button onClick={verifyByEmail} className='btn btn-success mx-5' >Sign In</button>
                    <button className='btn btn-danger mx-5'><Link to="/merchant-signup">Sign Up</Link></button>
                </Form.Group>
            </Form>
        </div>
    );
}

export default MerchantLogin;