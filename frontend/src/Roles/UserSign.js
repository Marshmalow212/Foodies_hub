import React from 'react'
import { useState } from "react";
import './UserSign.css'
import md5 from 'md5';

function UserSign() {
    const [toggleState, setToggleState] = useState(1);
    const [formData,setFormData] = useState(new FormData());
    const [inputData,setInputData] = useState({});

    // setInputData({['hello']:'noway'});

    const toggleTab = (index) => {
        setToggleState(index);
    };

    function getData(e) {
        let hashedPass = null;
        if(e.target.name == 'password'){
            hashedPass = md5(e.target.value);
            setInputData({...inputData,[e.target.name]:hashedPass});        
        }else setInputData({...inputData,[e.target.name]:e.target.value});        
    }
    function showData(e){
        e.preventDefault();
        console.log(inputData);
        Object.entries(inputData).forEach(([i,v])=>{
            console.log(i,v);
            setFormData(formData.append(i,v));
        });

    }

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
                            <input className="ul ul-uname" type="text" placeholder="Username/Email" name="username" onChange={(e)=>getData(e)}/>
                            <input className="ul ul-pass" type="password" placeholder="Password" name="password" onChange={(e)=>getData(e)}/>
                            <button className="ul-btn" onClick={(e)=>showData(e)}>LogIn</button>
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
                            <button className="ul-btn" >SignUp</button>
                        </form>
                    </div>
                </div>
            </div>
    )
}

export default UserSign
