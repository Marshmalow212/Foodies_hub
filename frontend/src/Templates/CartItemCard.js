import React, { Component } from 'react';
import foodmedia from "../img/upfood.jpg";
import {Modal,ModalHeader,ModalBody} from 'reactstrap';

class CartItemCard extends Component {
    constructor(props) {
        super(props);
        this.state={
            item_price:15.29,
            item_count:0,
            total_price:0,
           
        }
        this.totalPrice = 0;
        this.amountCalculatePlus = this.amountCalculatePlus.bind(this);
        this.amountCalculateMinus = this.amountCalculateMinus.bind(this);
    }

    amountCalculatePlus(){
        let count = this.state.item_count+1;
        let amount = count * this.state.item_price;
        this.setState({item_count:count,total_price:amount});
    }
    amountCalculateMinus(){
        let count = 0;
        if(this.state.item_count>0)count = this.state.item_count-1;

        let amount = count * this.state.item_price;
        this.setState({item_count:count,total_price:amount});

    }
    
    render() {
        const media = "./../img/upfood.jpg";
        
        return (
            
            <div id="cart-item-card">
                
                <div className="card card-body item-card-body flex-row">
                  <div className="col-md-4">
                      <img className="img-fluid item-card-image p-2" src={foodmedia} alt="upfood.jpg" />
                  </div>  
                  <div className="col-sm-6">
                      <div className="fs-5">Kala Bhuna</div>
                      <p className="lh-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat sint molestias voluptatum quae, magni voluptas nesciunt,temporibus.</p>
                  </div>
                  <div className="col-md-2">
                      <p className="cart-item-amount pt-2 pb-2 text-center">{this.state.item_price} $</p>
                      <div className="item-counter text-center">
                          <button onClick={(e)=>{this.amountCalculatePlus();}} className="btn btn-sm item-card-btn rounded-circle btn-success" type="button">+</button> {this.state.item_count} <button onClick={(e)=>{this.amountCalculateMinus();}} className="btn btn-sm item-card-btn rounded-circle btn-danger" type="button">-</button>
                       </div>
                       <p className="cart-item-amount pt-2 pb-2 text-center">x{this.state.item_count} : {this.state.total_price} $</p>
                  </div>

                </div>
                             
                
            </div>

        );
    }
}

export default CartItemCard;