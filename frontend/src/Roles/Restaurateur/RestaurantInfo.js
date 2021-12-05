import React from 'react'

export default function RestaurantInfo() {
    return (
        <div>
            <div className="r-profile-info" style={{display:"flex"}}>
                <div className="r-photo">.jpg</div>
                <form>
                    <h3>Restaurant Information</h3>
                    <div className="r-name">
                        <label>Name : </label>
                        <input/>
                    </div>
                    <div className="r-desc">
                        <label>Description : </label>
                        <input/>
                    </div>
                    <div className="r-email">
                        <label>Email : </label>
                        <input/>
                    </div>
                    <div className="r-phone">
                        <label>Phone : </label>
                        <input/>
                    </div>
                    <div className="r-address">
                        <label>Address : </label>
                        <input/>
                    </div>
                    <div className="r-coordinates">
                        <label>Coordinates : </label>
                        <input/>
                    </div>
                    <button>Update</button>
                    </form>
                </div>
        </div>
    )
}
