import React, { Component } from 'react';
import CartModal from '../Templates/CartModal';


class CheckOut extends Component {
    constructor(props) {
        super(props);
        this.state={
            pageProperty:{
                leftBtn:"Pay",
                rightBtn:"Cancel",
                mainTitle:"Check Out"
            }
        }
    }
    
    render() {
        return (
            <div>
                <CartModal bodydata={this.state.pageProperty} />
            </div>
        );
    }
}

export default CheckOut;