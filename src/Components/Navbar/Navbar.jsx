import React, { useState } from "react";
import "./Navbar.css";
import menu_icon from "../../assets/menu.png";
import logo from "../../assets/logo.png";
import search_logo from "../../assets/search.png";
import upload_icon from "../../assets/upload.png";
import more_icon from "../../assets/more.png";
import notification_icon from "../../assets/notification.png";
import profile_icon from "../../assets/jack.png";
import { Link } from "react-router-dom";
import { GoogleLogin , googleLogout} from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";




const Navbar = ({ setSidebar }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [decodeData, setDecodeData ]= useState(null)

  const handleProfileClick = () => {
    setShowDropdown((prev) => !prev);
  };

  const handle_Logout= ()=>{
    googleLogout();
    setDecodeData(null)
  }

  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <img
          className="menu-icon"
          onClick={() => setSidebar((prev) => (prev === false ? true : false))}
          src={menu_icon}
          alt=""
        />
        <Link to={"/"}>
          <img className="logo" src={logo} alt="" />
        </Link>
      </div>

      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input type="text" placeholder="Search" />
          <img src={search_logo} alt="" />
        </div>
      </div>

      <div className="nav-right flex-div">
        <img src={upload_icon} alt="" />
        <img src={more_icon} alt="" />
        <img src={notification_icon} alt="" />
        <div className="profile-container" onClick={handleProfileClick}>
          <img className="user-icon" src={decodeData?decodeData.picture:profile_icon} alt="Profile" />
          {showDropdown && (
            <div className="dropdown-menu">
              <div className="dropdown-header">
                <img src={decodeData?decodeData.picture:profile_icon} alt="Profile" />
                <div>
                  <p>{decodeData?decodeData.name:"User-1"}</p>
                  <span>{decodeData?decodeData.email:"user@gmail.com"}</span>
                </div>
              </div>
              {!decodeData && (
                <GoogleLogin
                onSuccess={(credentialResponse) => {
                  const decoded = jwtDecode(credentialResponse?.credential);
                  setDecodeData(decoded)
                  console.log(decoded);
                }}
                onError={() => {
                  console.log("Login Failed");
                }}
              />
              )}
              
              {/* <div className="dropdown-item">Login with Google Account</div> */}
              <div className="dropdown-item" onClick={handle_Logout}>Logout account</div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
