import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import fhlogo from "../fh_logo.png"
import "./Header.css"
import { CgProfile } from "react-icons/cg";
import { GrNotification } from "react-icons/gr";
import UserSign from '../Roles/UserSign';
import Home from '../Home/Home';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            passState:false,
        }
        this.stateSign=this.stateSign.bind(this);
    }

    //not passing line 24,30 {issue}
    stateSign(e){
        e.preventDefault();
        if(this.state.passState){
            this.setState({passState:false});
            <Home recv={this.state.passState}/>;
            console.log('clicked 1')
        }
        else{
            console.log('clicked 2');
            this.setState({passState:true});
            <Home recv={this.state.passState}/>;
        }
    }
    render() { 
        return (
            <div className="header-container">
                <nav className="navbar navbar-expand-lg">
                    <a href="#" className="fhlogo" ><img src={fhlogo} alt="logo" width="23" height="25"/></a>
                    <ul className="nav me-auto mb-2 mb-lg-0 mr-2 ">
                        <li className="nav-item "><a href="/" className="nav-link text-dark">Home</a></li>                        
                        <li className="nav-item "><a href="#" className="nav-link text-dark">Community</a></li>
                        <li className="nav-item "><a href="/restaurant" className="nav-link text-dark">Restaurant</a></li>
                        <li className="nav-item "><a href="/food" className="nav-link text-dark">Food</a></li>
                        <li className="nav-item "><a href="#" className="nav-link text-dark">Contact</a></li>
                    
                    </ul>
                    <a href="#" className="foodies-notification"><GrNotification/></a>
                    {/* <a href="#" className="foodies-profile">
                        <CgProfile/></a> */}
                    <div className="foodies-profile" onClick={this.stateSign}>
                        <CgProfile/>
                    </div>
                </nav>
            </div>
          );
    }
}
 
export default Header;