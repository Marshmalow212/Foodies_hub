import React from 'react'

function RestaurantMenu() {
    return (
        <div>
            <div className="r-profile-menu">
                    <h3>Menu</h3>
                    <div className="type-card">
                        <h4>Type 1</h4>
                        <div style={{display:"flex"}}>
                        <div className="item-card">1</div>
                        <div className="item-card">2</div>
                        <div className="item-card">3</div>
                        </div>
                    </div>
                    <div className="type-card">
                        <h4>Type 2</h4>
                        <div style={{display:"flex"}}>
                        <div className="item-card">1</div>
                        <div className="item-card">2</div>
                        <div className="item-card">3</div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default RestaurantMenu
