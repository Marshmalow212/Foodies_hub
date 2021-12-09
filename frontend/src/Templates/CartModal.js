import React, { useState } from 'react';
import CartItemCard from './CartItemCard';
import { Modal,Alert } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import OrderSummary from '../Order/OrderSummary';
import DeliveryVendors from '../Delivery/DeliveryVendors';
import DeliverySummary from '../Delivery/DeliverySummary';
import PaymentVendors from '../Delivery/PaymentVendors';

function CartModal(props) {


    let state = {
        pageProperty: {
            leftBtn: props.bodydata.leftBtn,
            rightBtn: props.bodydata.rightBtn,
            mainTitle: props.bodydata.mainTitle
        },
        itemList: props.itemdata,
        orderList: props.orderdata,
        confirmList: props.confirmdata
    }
    console.log(state);
    let history = useHistory();
    const [payDone,setPayDone] = useState(false);

    let cartItem = (<div className="cart-item-list">
        {state.itemList ? (state.itemList.map((info, key) => {
            return (<div key={key}><CartItemCard itemProperty={info} /></div>);
        })) : ""}
    </div>);

    let orderSummary = (
                    state.orderList?(<div className="order-confirmation-info"><OrderSummary orderdata={state.orderList} />
                    <DeliveryVendors /></div>):""
                    );
    
    let checkOut = (state.confirmList?(<div id="checkoutinfo"><DeliverySummary/> <PaymentVendors/></div>):"")

    let payAlert = (payDone?<div className="float-top"><Alert color="success">Payment Successful!</Alert></div>:'');

    
    const routeForward = () => {
        if (state.itemList) {
            history.push('/order-confirmation');
        }
        else if(state.orderList){
            history.push('/checkout');
        }
        else if(state.confirmList){
            setPayDone(true);
            setTimeout(() => {
                setPayDone(false);                
            }, 2000);
        }
        
    }

    const routeBackward = () => {
        if(state.orderList){
            history.push('/cart');
        }
        else if(state.confirmList){
            history.push('/order-confirmation');
        }
        else if(state.itemList){
            let lastPath = sessionStorage.getItem('lastpath');
            // console.log(lastPath);
            history.push(lastPath);
            sessionStorage.removeItem('lastpath');
        }
    }


    return (
        <div>
            <Modal isOpen={payDone}>
            {payAlert}
            </Modal>
            
            <Modal isOpen={true}  >
            
            <div id="order-cart">
                <div className="display-6 text-center p-2 text-light">{state.pageProperty.mainTitle}</div>
                {/* cart item list for order place */}
                {cartItem}
                
                {/* order summary for order confirmation */}
                {orderSummary}

                {/* checkout for delivery*/}
                {checkOut}



                <div className="mt-2 mb-2 d-flex justify-content-end order-cart-btn">
                    <div className=""><button type="button" className="btn" onClick={() => routeForward()}>{state.pageProperty.leftBtn}</button></div>
                    <div className=""><button type="button" className="btn" onClick={() => routeBackward()}>{state.pageProperty.rightBtn}</button></div>
                </div>
            </div>

        </Modal>
        
        </div>
        
    );
}

export default CartModal;