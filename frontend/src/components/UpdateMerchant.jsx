import axios from "axios"
import { useEffect, useState } from "react"

const UpdateMerchant = () => {
    let [id,setid]=useState()
    let [name,setname]=useState("")
    let [email,setemail]=useState("")
    let [phone,setphone]=useState("")
    let [gst_number,setgst_number]=useState("")
    let [password,setpassword]=useState("")

    let data={id,name,email,gst_number,phone,password}
    let merchant=JSON.parse(localStorage.getItem("Merchant"))
    // console.log(merchant.id);
    // useEffect(()=>{
    //     // setid(merchant.id)
    //     setname(merchant.name)
    //     setemail(merchant.email)
    //     setgst_number(merchant.gst_number)
    //     setphone(merchant.phone)
    //     setpassword(merchant.setpassword)
    // },[])

    let updateData = (e)=>{
        e.preventDefault();
            axios.put(`http://localhost:8080/merchants`,data)
            .then((res)=>{
                console.log(res);
                alert("Data Edited succesfull")
            })
            .catch((res)=>{
                
                console.log(res);
                alert("Data Not Found")
            })
    }

    return ( 
        <div className="update-merchant">
             <form onSubmit={updateData} action="">
                <label htmlFor="">Id</label>
                <input required type="number" value={id} onChange={(e)=>{setid(e.target.value)}} placeholder="enter the Id"/>
                <label htmlFor="">Name</label>
                <input required type="text" value={name} onChange={(e)=>{setname(e.target.value)}} placeholder="enter the Name"/>
                <label htmlFor="">Email</label>
                <input required value={email} onChange={(e)=>{setemail(e.target.value)}} type="email" placeholder="enter email"/>
                <label htmlFor="">Phone Number</label>
                <input required value={phone} onChange={(e)=>{setphone(e.target.value)}} type="tel" placeholder="enter phone number" />
                <label htmlFor="">GST Number</label>
                <input required value={gst_number} onChange={(e)=>{setgst_number(e.target.value)}} type="text" placeholder="enter GST number" />
                <label htmlFor="">Password</label>
                <input required value={password} onChange={(e)=>{setpassword(e.target.value)}} type="text" placeholder="enter password" />
                <button className="btn btn-outline-info">Submit</button>
            </form>
        </div>
     );
}
 
export default UpdateMerchant;