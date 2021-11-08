import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="bgpersonal">
                <nav className="navbar navbar-expand-lg">
                    <ul className="nav me-auto mb-2 mb-lg-0 mr-2 ">
                        <li className="nav-item "><a href="/" className="nav-link text-light ">Home</a></li>                        
                        <li className="nav-item "><a href="#" className="nav-link text-light">Community</a></li>
                        <li className="nav-item "><a href="/restaurant" className="nav-link text-light">Restaurant</a></li>
                        <li className="nav-item "><a href="/food" className="nav-link text-light">Food</a></li>
                        <li className="nav-item "><a href="#" className="nav-link text-light">Contact</a></li>
                        
                    </ul>
                </nav>
            </div>
          );
    }
}
 
export default Header;