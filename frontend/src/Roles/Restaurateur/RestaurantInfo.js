import React from 'react'
import './Restaurateur.css'

export default function RestaurantInfo() {
    return (
        <div className="r-info">
            <div className="r-profile-info" style={{display:"flex"}}>
                <div className="r-photo">.jpg</div>
                <div className='r-info-actual'>
                    <h3>Restaurant Information</h3>
                    <div className='r-info-specific'>
                        <label className='r-info-specific-label1'>Name </label>
                        <label>:</label>
                        <label></label>
                    </div>
                    <div className="r-info-specific">
                        <label className='r-info-specific-label1'>Description </label>
                        <label>:</label>
                        <label></label>
                    </div>
                    <div className="r-info-specific">
                        <label className='r-info-specific-label1'>Email </label>
                        <label>:</label>
                        <label></label>
                    </div>
                    <div className="r-info-specific">
                        <label className='r-info-specific-label1'>Phone </label>
                        <label>:</label>
                        <label></label>
                    </div>
                    <div className="r-info-specific">
                        <label className='r-info-specific-label1'>Address </label>
                        <label>:</label>
                        <label></label>
                    </div>
                    <div className="r-info-specific">
                        <label className='r-info-specific-label1'>Coordinates </label>
                        <label>:</label>
                        <label></label>
                    </div>
                    <button style={{background:"var(--beta-color)",color:"white"}}>Update</button>
                </div>
            </div>

            <div className='r-row-second'>
                <div className='r-row-s'>Ratings</div>
                <div className='r-row-s'>Total Orders</div>
                <div className='r-row-s'>Revenue</div>
            </div>
            <div className='r-row-third'>Statistics</div>
        </div>
    )
}
