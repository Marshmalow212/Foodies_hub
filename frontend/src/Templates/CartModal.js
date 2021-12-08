import React from 'react';
import CartItemCard from './CartItemCard';

function CartModal(props){


        state={
            pageProperty:{
                leftBtn:props.bodydata.leftBtn,
                rightBtn:props.bodydata.rightBtn,
                mainTitle:props.bodydata.mainTitle
            },
            itemList:props.itemdata
        }

    let cartItem = (<div className="cart-item-list">
    {state.itemList?(state.itemList.map((info,key)=>{
       return (<div key={key}><CartItemCard itemProperty={info}/></div>);
    })):""}                      
</div>);
    
        
        return (
            <Modal isOpen={true}  >
                <div id="order-cart">
                    <div className="display-6 text-center p-2 text-light">{state.pageProperty.mainTitle}</div>
                    {/* cart item list */}
                    {cartItem}
                    <div className="mt-2 mb-2 d-flex justify-content-end order-cart-btn">
                        <div className=""><button type="button" className="btn">{state.pageProperty.leftBtn}</button></div>
                        <div className=""><button type="button" className="btn">{state.pageProperty.rightBtn}</button></div>
                    </div>
                </div>
                
            </Modal>
        );
}

export default CartModal;