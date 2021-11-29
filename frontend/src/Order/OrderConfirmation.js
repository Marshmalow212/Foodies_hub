import React, { Component } from 'react';
import CartModal from '../Templates/CartModal';

class OrderConfirmation extends Component {
    constructor(props) {
        super(props);
        this.state={
            pageProperty: {
                leftBtn: "Check Out",
                rightBtn: "Return",
                mainTitle: "Order Confirmation"
            }
        };
    }
    
    render() {
        return (
            <CartModal bodydata={this.state.pageProperty} />
        );
    }
}

export default OrderConfirmation;