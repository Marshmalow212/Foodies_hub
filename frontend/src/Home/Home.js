import React, { Component } from 'react';
import Header from '../Templates/Header';
import Footer from '../Templates/Footer';
import Search from '../Templates/Search';
import TestSearchBar from '../Templates/TestSearchBar';
import TopFood from './TopFood';
import TopRestaurant from './TopRestaurant';
import HomeFeeds from './HomeFeeds';
import RightNavigation from './RightNavigation';
import Cart from '../Templates/Cart';
import "./Home.css"

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="bgnormal" style={{position: "relative"}}>
                <Header/>
                
                <div className="sec-1">
                    <div className="HomeIntro">
                        <h1>Foodies Hub</h1>
                        <h4>Food Searching, Ordering and Community System</h4>
                    </div>
                    <TestSearchBar/>
                    {/* <Search /> */}
                    <Cart/>
                </div>
                
            <div className="container" style={{height:"100vh"}}>
                {/* Top Section*/}
                <div className="row">
                    <div className="col-sm-6 ">
                    <div className="display-5 my-md-2 text-dark ">Top Food</div>
                        {/* Top Food Section */}
                        <TopFood />
                    </div>
                    <div className="col-sm-6 ">
                    <div className="display-5 my-md-2 text-dark ">Top Restaurant</div>
                        {/* Top Restaurant Section */}
                        <TopRestaurant />
                    </div>
                </div>
                
            </div>

            <div className="FeedText">
                <div className="display-4 my-md-2 mx-md-2 text-dark">Foodies <span style={{color:"#ffff",background:"#285954"}}>Feeds</span></div>
            </div>

            <div className="sec-3" style={{display:"flex"}}>
                <div className="RightFeeds" style={{width:"55%"}} >
                    <HomeFeeds/>
                    <HomeFeeds/>
                    <HomeFeeds/>
                    <HomeFeeds/>
                </div>
                <div className="LeftSticky" style={{width:"45%"}}><RightNavigation/></div>
            </div>

            <Footer/>

            </div>
           
         );
    }
}
 
export default Home;