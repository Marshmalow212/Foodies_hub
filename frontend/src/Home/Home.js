import React, { Component } from 'react';
import Header from '../Templates/Header';
import Footer from '../Templates/Footer';
import Search from '../Templates/Search';
// import TestSearchBar from '../Templates/TestSearchBar';
import TopFood from './TopFood';
import TopRestaurant from './TopRestaurant';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="bgnormal">
            <Header/>
            <Search />
            {/* <TestSearchBar/> */}
            <div className="container">
                {/* Top Section*/}
                <div className="row">
                    <div className="col-sm-6 ">
                    <div className="display-5 bg-success my-md-2 text-light ">Top Food</div>
                        {/* Top Food Section */}
                        <TopFood />
                    </div>
                    <div className="col-sm-6 ">
                    <div className="display-5 bg-success my-md-2 text-light ">Top Restaurant</div>
                        {/* Top Restaurant Section */}
                        <TopRestaurant />
                    </div>
                </div>
                
            </div>
            <div className="">
                <div className="display-4 bg-success my-md-2 mx-md-2 text-light ">Community Feeds</div>
            </div>
            <Footer/>
            </div>
           
         );
    }
}
 
export default Home;