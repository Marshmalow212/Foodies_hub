import React from 'react';

function PaymentVendors () {
    
        return (
            <div id="paymentvendors">
                <div className="d-flex flex-row justify-content-evenly paymentvendorsbody">
                    <button className="d-flex p-2" type="button" >Cash on Delivery</button>
                        <button className="d-flex p-2" type="button" >Bkash</button>
                    <button className="d-flex p-2" type="button" >Card</button>
                    <button className="d-flex p-2" type="button" >Nogod</button>
                </div>
            </div>
        );
    
}

export default PaymentVendors;