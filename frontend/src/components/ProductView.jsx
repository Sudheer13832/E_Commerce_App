import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import { Dropdown } from 'bootstrap'
// import Dropdown from 'bootstrap'
import Dropdown from 'react-bootstrap/Dropdown';


function ProductView() {
    let [item, setitem] = useState([])
    let admin = JSON.parse(localStorage.getItem("Merchant"))

    useEffect(() => {
        axios.get(`http://localhost:8080/products/${admin.id}`)
            .then((res) => {
                console.log(res.data.body);
                setitem(res.data.body)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    let searchBybrand = (brand) => {
        axios.get(`http://localhost:8080/products/find-by-brand/${brand}`)
            .then((res) => {
                console.log(res.data.body);
                setitem(res.data.body)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    let searchByCategory = (category) => {
        axios.get(`http://localhost:8080/products/find-by-category/${category}`)
            .then((res) => {
                console.log(res.data.body);
                setitem(res.data.body)
            })
            .catch((err) => {
                console.log(err);
            })

    }

    return (

        <div>
            
            {item.map((x) => {
                return (
                    <>
                        <div className="search">
                            <div className="brand">
                                <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                        Search
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item onClick={() => { searchBybrand(x.brand) }}>By Brand</Dropdown.Item>
                                        <Dropdown.Item onClick={() => { searchByCategory(x.category) }}>By Category</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>

                            <div className="productview">
                                <div className="image">
                                    <span id='category'>{x.category}</span>
                                    <img src="{x.image_url}" alt="" />
                                </div>

                                <div className="desc">
                                    <h4 id='name'>{x.name} || {x.brand}</h4>
                                    <span id='cost'><sup><b></b></sup>{x.cost}</span>
                                    <br />

                                </div>

                            </div>

                        </div>
                    </>
                )
            })}
        </div>
    )
}
export default ProductView