import axios from "axios";
import { useState } from "react";
import "../styles/Usersignup.css"

const UserSignUp = () => {
    let [name,setname]=useState("")
    let [email,setemail]=useState("")
    let [phone,setphone]=useState("")
    let [password,setpassword]=useState("")
    let [age,setage]=useState("")
    let [gender,setgender]=useState("")
    let data={name,age,gender,email,phone,password}

    function registeruser(e) {
        e.preventDefault()

        axios.post(`http://localhost:8080/users`,data)
        .then((resp)=>{
            console.log(resp.data);
            alert("User registered successfully")
        })
        .catch((err)=>{
            console.log(err.data);
            alert("invalid credentials")
        })
        
    }
    return (  
        <div className="userSignUp">
           <form onSubmit={registeruser}>
                <label htmlFor="">Name</label>
                <input required type="text" value={name} onChange={(e)=>{setname(e.target.value)}} placeholder="enter the Name"/>
                <label htmlFor="">Email</label>
                <input required value={email} onChange={(e)=>{setemail(e.target.value)}} type="email" placeholder="enter email"/>
                <label htmlFor="">Phone Number</label>
                <input required value={phone} onChange={(e)=>{setphone(e.target.value)}} type="tel" placeholder="enter phone number" />
                <label htmlFor="">Age</label>
                <input required value={age} onChange={(e)=>{setage(e.target.value)}} type="text" placeholder="enter Age" />
                <label htmlFor="">Gender</label>
                <input type="text" onChange={(e)=>{setgender(e.target.value)}}  value={gender} placeholder="enter gender"/>
                <label htmlFor="">Password</label>
                <input required value={password} onChange={(e)=>{setpassword(e.target.value)}} type="password" placeholder="enter password" />
                <button className="btn btn-outline-info">Submit</button>
            </form>
        </div>
    );
}
 
export default UserSignUp