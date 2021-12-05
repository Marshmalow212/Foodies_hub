import React from 'react'
import "./RestaurateurDashboard.css"
import {BrowserRouter as RRouter,Switch,Route,Link} from 'react-router-dom';
import RestaurantInfo from './Restaurateur/RestaurantInfo';
import RestaurantMenu from './Restaurateur/RestaurantMenu';

export default function RestaurateurDashboard() {
    return (
        <div>
            <div className="profile-section">
            <RRouter>
                <div className="left-side">
                    <h4>Foodies Hub</h4>
                    <div className="DashboardNav">
                        <div><Link to="/restaurateur/rinfo">Information</Link></div>
                        <div><Link to="/restaurateur/rmenu">Menu</Link></div>
                    </div>
                </div>

                <div className="right-side">

                    <Switch>
                        <Route path={"/restaurateur/rinfo"}>
                            <RestaurantInfo/>
                        </Route>
                        <Route path={"/restaurateur/rmenu"}>
                            <RestaurantMenu/>
                        </Route>
                    </Switch>
                
                </div>
              </RRouter>
            </div>
        </div>
    )
}
