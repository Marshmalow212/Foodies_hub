import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import fhlogo from "../fh_logo.png"
import "./Header.css"
import { CgProfile } from "react-icons/cg";
import { GrNotification } from "react-icons/gr";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            // <div className="bgpersonal">
            <div className="header-container">
                <nav className="navbar navbar-expand-lg">
                    <a href="#" className="fhlogo" ><img src={fhlogo} alt="logo" width="25" height="25"/></a>
                    <ul className="nav me-auto mb-2 mb-lg-0 mr-2 ">
                        <li className="nav-item "><a href="/" className="nav-link text-dark">Home</a></li>                        
                        <li className="nav-item "><a href="#" className="nav-link text-dark">Community</a></li>
                        <li className="nav-item "><a href="/restaurant" className="nav-link text-dark">Restaurant</a></li>
                        <li className="nav-item "><a href="/food" className="nav-link text-dark">Food</a></li>
                        <li className="nav-item "><a href="#" className="nav-link text-dark">Contact</a></li>
                    
                    </ul>
                    <a href="#" className="foodies-notification"><GrNotification/></a>
                    <a href="#" className="foodies-profile"><CgProfile/></a>
                </nav>
            </div>
          );
    }
}
 
export default Header;