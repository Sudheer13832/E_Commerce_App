import { Link, Route, Routes, useNavigate } from "react-router-dom";
import "../styles/MerchantHomePage.css"
import MerchantsNavBar from "./MerchantsNavBar";
import ProductView from "./ProductView";
import UpdateMerchant from "./UpdateMerchant";

const MerchantHomePage = () => {
    // let navigate=useNavigate()
    // function addProducts(e) {
    //     e.preventDefault()
    //     navigate("/add-products") 
    // }

    // function UpdateProducts(e) {
    //     e.preventDefault()
    //     navigate("/update-products")
        
    // }
    return ( 
        <div className="merchantHomePage">
            <MerchantsNavBar/>
            <Routes>
                <Route path="/product-view" element={<ProductView/>}/>
                <Route path="/update-merchant" element={<UpdateMerchant/>}/>
            </Routes>
        </div>
     );
}
 
export default MerchantHomePage;