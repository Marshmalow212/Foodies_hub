import React from 'react'
import "./RightNavigation.css"
import { BsArrowRight } from "react-icons/bs";

function RightNavigation() {
    return (
        <div>
            <div className="RightNav">
                <div className="FoodNav">
                    <div className="RightNavBtn">Burger <BsArrowRight/></div>
                    <div className="RightNavBtn">Pizza <BsArrowRight/></div>
                    <div className="RightNavBtn">Biriyani <BsArrowRight/></div>
                </div>
                <div className="RestaurantNav">
                    <div className="RightNavBtn">Serial Griller <BsArrowRight/></div>
                    <div className="RightNavBtn">Chillox <BsArrowRight/></div>
                    <div className="RightNavBtn">Kacchi Dine <BsArrowRight/></div>
                </div>
            </div>
        </div>
    )
}

export default RightNavigation
