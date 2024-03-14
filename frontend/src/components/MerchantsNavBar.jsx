import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const MerchantsNavBar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>ShoppeeQ</h1>
      </div>
      <div className="opt">
        <button className="btn btn-danger"><Link to="/merchant-home-page/product-view">View  Products</Link></button>
      </div>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          <AccountCircleIcon />Account
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="/merchant-home-page/update-merchant">Edit Account</Dropdown.Item>
          <Dropdown.Item href="/">Log Out</Dropdown.Item>

        </Dropdown.Menu>
      </Dropdown>
    </nav>
  );
}

export default MerchantsNavBar;