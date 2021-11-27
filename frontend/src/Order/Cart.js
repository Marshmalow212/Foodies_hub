import React, { Component } from 'react';
import {Modal,ModalBody,ModalHeader} from 'reactstrap';
import CartItemCard from '../Templates/CartItemCard';

class Cart extends Component {
    constructor(props) {
        super(props);

        this.state={
            pageProperty:{
                leftBtn:"Confirm",
                rightBtn:"Return",
                mainTitle:"Order Cart"
            }
        }
        
    }

    render() {
        
        return (
            <Modal isOpen={true}  >
                <div id="order-cart">
                    <div className="display-6 text-center p-2 text-light">{this.state.pageProperty.mainTitle}</div>
                    <div className="cart-item-list">
                    <CartItemCard />
                    <CartItemCard />
                    <CartItemCard />
                    <CartItemCard />   
                    {this.state.listthem}                     
                    </div>
                    <div className="mt-2 mb-2 d-flex justify-content-end order-cart-btn">
                        <div className=""><button type="button" className="btn">{this.state.pageProperty.leftBtn}</button></div>
                        <div className=""><button type="button" className="btn">{this.state.pageProperty.rightBtn}</button></div>
                    </div>
                </div>
                
            </Modal>
        );
    }
}

export default Cart;