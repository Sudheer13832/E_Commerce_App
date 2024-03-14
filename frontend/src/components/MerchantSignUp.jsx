import { useState } from "react";
import "../styles/MerchantSignUp.css"
import axios from "axios";
const MerchantSignUp = () => {
    let [name,setname]=useState("")
    let [email,setemail]=useState("")
    let [phone,setphone]=useState("")
    let [gst_number,setgst_number]=useState("")
    let [password,setpassword]=useState("")

    let data={name,email,phone,gst_number,password}
    
 function register(e) {
    e.preventDefault()

    axios.post(`http://localhost:8080/merchants`,data)
    .then(res=>{
        console.log(res.data);
        alert("Merchant saved successfully")
    })
    .catch(err=>{
        console.log(err.data);
        alert("Invalid Details")
    })
        
    }
    return (
        <div className="merchant-signup">
            <form onSubmit={register}>
                <label htmlFor="">Name</label>
                <input required type="text" value={name} onChange={(e)=>{setname(e.target.value)}} placeholder="enter the Name"/>
                <label htmlFor="">Email</label>
                <input required value={email} onChange={(e)=>{setemail(e.target.value)}} type="email" placeholder="enter email"/>
                <label htmlFor="">Phone Number</label>
                <input required value={phone} onChange={(e)=>{setphone(e.target.value)}} type="tel" placeholder="enter phone number" />
                <label htmlFor="">GST Number</label>
                <input required value={gst_number} onChange={(e)=>{setgst_number(e.target.value)}} type="text" placeholder="enter GST number" />
                <label htmlFor="">Password</label>
                <input required value={password} onChange={(e)=>{setpassword(e.target.value)}} type="password" placeholder="enter password" />
                <button className="btn btn-outline-info">Submit</button>
            </form>
        </div>
    );
}

export default MerchantSignUp;