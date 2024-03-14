import { Link } from "react-router-dom";
import "../styles/LandingPage.css"
const LandingPage=()=>{
    return(
        <div className="landingPage">
            <Link to="/merchant">
                <img src="https://th.bing.com/th/id/OIP.7mUh87kfSFVa8WFJOu_v_QAAAA?pid=ImgDet&w=181&h=181&c=7&dpr=1.5"></img>Merchant</Link>
            <Link to="/user">
                <img src="https://th.bing.com/th?q=Facebook+User+Icon&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.5&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247"></img>
                User</Link>
        </div>
    );
}
export default LandingPage;
