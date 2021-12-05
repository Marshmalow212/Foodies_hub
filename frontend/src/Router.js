import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import Test from './Templates/Test';
import App from './App';
import Home from './Home/Home';
import Restaurant from './Restaurant/Restaurant';
import RestaurantInfoModal from './Restaurant/RestaurantInfoModal';
import Food from './Food/Food';
import RestaurateurSign from'./Roles/RestaurateurSign';
import CartItemCard from './Templates/CartItemCard';
import Cart from './Order/Cart';
import OrderConfirmation from './Order/OrderConfirmation';

const Router = ()=> {
        return ( 
            <Switch>
            <Route exact path={'/test'} component={Test}></Route>
            {/* <Route exact path={'/'} component={App}></Route> */}
            <Route exact path={'/'} component={Home}></Route>
            <Route exact path={'/restaurant'} component={Restaurant}></Route>
            <Route exact path={'/food'} component={Food}></Route>
            <Route exact path={'/modalrestaurant'} component={RestaurantInfoModal}></Route>
            <Route exact path={'/restaurateur'} component={RestaurateurSign}></Route>
            <Route exact path={'/item-card'} component={CartItemCard}></Route>
            <Route exact path={'/cart'} component={Cart}></Route>
            <Route exact path={'/order-confirmation'} component={OrderConfirmation}></Route>
            </Switch>
            
            
         );
    }

 
export default Router;