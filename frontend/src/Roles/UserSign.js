import React from 'react'
import { useState } from "react";
import './UserSign.css'

function UserSign() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
            <div className="user-sign-container">
                <div className="bloc-tabs">
                    <button
                        className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(1)}
                    >
                        LogIn
                    </button>

                    <button
                        className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                        onClick={() => toggleTab(2)}
                    >
                        SignUp
                    </button>
                </div>

                <div className="content-tabs">
                    <div
                        className={toggleState === 1 ? "content  active-content" : "content"}
                    >
                        <form>
                            <input className="ul ul-uname" type="text" placeholder="Username"/>
                            <input className="ul ul-pass" type="password" placeholder="Password"/>
                            <button className="ul-btn">LogIn</button>
                        </form>
                    </div>

                    <div
                        className={toggleState === 2 ? "content  active-content" : "content"}
                    >
                        <form>
                            <input className="ul ul-uname" type="text" placeholder="Username"/>
                            <input className="ul ul-email" type="email" placeholder="Email"/>
                            <input className="ul ul-pass" type="password" placeholder="Password"/>
                            <input className="ul ul-cpass" type="password" placeholder="Confirm Password"/>
                            <button className="ul-btn">SignUp</button>
                        </form>
                    </div>
                </div>
            </div>
    )
}

export default UserSign
