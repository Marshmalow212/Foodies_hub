import React from 'react'
import "./TestSearchBar.css"
import { FiSearch } from "react-icons/fi";

function TestSearchBar() {
    return (
        <div className="SearchBar">
            <div className="Srow">
                <input className="Sinput" type="text" placeholder=" Search here..."/>
                <select className="Sfilter">
                    <option>option1</option>
                    <option>option2</option>
                </select>
                <button className="SrchBtn"><FiSearch/></button>
            </div>
        </div>
    )
}

export default TestSearchBar
