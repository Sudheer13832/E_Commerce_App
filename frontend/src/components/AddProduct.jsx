import axios from "axios"
import { useState } from "react"
import '../styles/AddProducts.css'


function AddProduct() {


    let [name, setname] = useState("")
    let [brand, setbrand] = useState("")
    let [category, setcategory] = useState("")
    let [description, setdescription] = useState("")
    let [cost, setcost] = useState("")
    let [image_url, setimage_url] = useState("")


    let data = { name, brand, category, description,cost, image_url }
    let merchant =JSON.parse(localStorage.getItem("Merchant"))

    let addData = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:8080/products/${merchant.id}`,data)
            .then((res) => {
                console.log(res);
                alert("Product Added succesfull")
            })
            .catch((err) => {
                console.log(err);
                alert("Something Went Wrong")
            })
    }

    return (
        <div className="AddProducts">
            <form onSubmit={addData} action="">
                <label htmlFor="">Name</label>
                <input required type="text" value={name} onChange={(e) => { setname(e.target.value) }} placeholder="enter the Name" />
                <label htmlFor="">Brand</label>
                <input required value={brand} onChange={(e) => { setbrand(e.target.value) }} type="text" placeholder="enter Brand" />
                <label htmlFor="">Category</label>
                <input required value={category} onChange={(e) => { setcategory(e.target.value) }} type="text" placeholder="enter category" />
                <label htmlFor="">Description</label>
                <input required value={description} onChange={(e) => { setdescription(e.target.value) }} type="text" placeholder="enter Description" />
                <label htmlFor="">Cost</label>
                <input required value={cost} onChange={(e) => { setcost(e.target.value) }} type="number" placeholder="enter Cost" />

                <label htmlFor="">Image Address</label>
                <input required value={image_url} onChange={(e) => { setimage_url(e.target.value) }} type="text" placeholder="enter Image Address" />
                <button className="btn btn-success">Submit</button>

            </form>

        </div>
    );
}

export default AddProduct;