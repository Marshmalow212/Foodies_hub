import React from 'react'
import './RestaurateurSign.css'
import bgimg from '../img/resSignPage.png'

function RestaurateurSign() {
    return (
        <div className="r-sign">
            <div className="r-heading">
            <h2>Foodies Hub</h2>
            <h4>Food finding, ordering & community system.</h4>
            </div>
            <div className="r-body">

            {/* RESTAURATEUR REGISTRATION */}
            <div className="r-form r-reg">
                <form>
                    <h4>Register Your Restaurant</h4>
                    <input
                        className="r-input"
                        type="text" 
                        required 
                        placeholder="Name of Your Restaurant"
                    ></input>

                    <input
                        className="r-input"
                        type="text"
                        required
                        placeholder="Address"
                    ></input>

                    <input
                        className="r-input"
                        type="email"
                        required
                        placeholder="Email Address"
                    ></input>

                    <input
                        className="r-input"
                        type="text"
                        required
                        placeholder="Phone Number"
                    ></input>

                    <input
                        className="r-input"
                        type="password"
                        required
                        placeholder="Password"
                    ></input>

                    <input
                        className="r-input"
                        type="password"
                        required
                        placeholder="Confirm Password"
                    ></input>

                    <button className="r-btn">Register</button>
                </form>
            </div>
            {/* <hr style={{border:"1px solid black"}}/> */}
            <div className="vl"/>
            <div className="r-form r-log">
                <form>
                    <h4>Goto Profile</h4>
                    <input 
                        className="r-input" 
                        type="email" 
                        required 
                        placeholder="Enter your email"
                    ></input>
                    <input 
                        className="r-input" 
                        type="password" 
                        required 
                        placeholder="Enter your password"
                    ></input>
                    <button className="r-btn">LogIn</button>
                    <div className="resSignImg" >
                        <img src={bgimg} />
                    </div>
                </form>
            </div>
            </div>
        </div>
    )
}

export default RestaurateurSign
