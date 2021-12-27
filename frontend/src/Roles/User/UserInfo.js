import React from 'react'

function UserInfo() {
    return (
        <div className='u-info'>
            <div className="r-profile-info" style={{display:"flex"}}>
                <div className="r-photo">.jpg</div>
                <div className='r-info-actual'>
                    <h3>Uname</h3>
                    <div className='r-info-specific'>
                        <label className='r-info-specific-label1'>Name </label>
                        <label>:</label>
                        <label></label>
                    </div>
                    <div className="r-info-specific">
                        <label className='r-info-specific-label1'>Email</label>
                        <label>:</label>
                        <label></label>
                    </div>
                    <div className="r-info-specific">
                        <label className='r-info-specific-label1'>Phone </label>
                        <label>:</label>
                        <label></label>
                    </div>
                    <div className="r-info-specific">
                        <label className='r-info-specific-label1'>Location </label>
                        <label>:</label>
                        <label></label>
                    </div>
                    <div className="r-info-specific">
                        <label className='r-info-specific-label1'>Address </label>
                        <label>:</label>
                        <label></label>
                    </div>
                    <button style={{background:"var(--beta-color)",color:"white"}}>Update</button>
                </div>
            </div>
        </div>
    )
}

export default UserInfo
