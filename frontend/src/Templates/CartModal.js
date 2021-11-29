import React, { Component } from 'react';
import {Modal} from 'reactstrap';
import { isNonNullExpression } from 'typescript';
import CartItemCard from './CartItemCard';

class CartModal extends Component {
    constructor(props) {
        super(props);

        this.state={
            pageProperty:{
                leftBtn:props.bodydata.leftBtn,
                rightBtn:props.bodydata.rightBtn,
                mainTitle:props.bodydata.mainTitle
            },
            itemList:props.itemdata
        }
    }

    render() {
        
        return (
            <Modal isOpen={true}  >
                <div id="order-cart">
                    <div className="display-6 text-center p-2 text-light">{this.state.pageProperty.mainTitle}</div>
                    <div className="cart-item-list">
                        {this.state.itemList?(this.state.itemList.map((info,key)=>{
                           return (<div key={key}><CartItemCard itemProperty={info}/></div>);
                        })):""}                      
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

export default CartModal;