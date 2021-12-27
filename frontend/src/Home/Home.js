import React, { Component } from 'react';
import Header from '../Templates/Header';
import Footer from '../Templates/Footer';
import Search from '../Templates/Search';
import TestSearchBar from '../Templates/TestSearchBar';
import TopFood from './TopFood';
import TopRestaurant from './TopRestaurant';
import HomeFeeds from './HomeFeeds';
import RightNavigation from './RightNavigation';
import "./Home.css"
import CartButton from '../Templates/CartButton';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    

    render() {

        // home feeds generating
        let homeFeed = [];
        for (var i = 0; i < 4; i++) {
            homeFeed.push(<HomeFeeds />);
        }
        return (
            <div className="bgnormal" style={{ position: "relative" }}>
                <Header />
                {/* {console.log(this.props.recv)} */}
                {/* {this.props.recv===true?<UserSign/>:""} */}

                <div className="sec-1">
                    <div className="HomeIntro">
                        <h1>Foodies <span style={{ color: "#285954" }}>Hub</span></h1>
                        <h5 style={{ color: "#212121" }}>Find your favourite Food or Restaurant &</h5>
                        <h5 style={{ color: "#212121" }}>Order your desired food item.</h5>
                        <h5 style={{ color: "#212121" }}>Share your experience and connect with people</h5>
                    </div>
                    <div className="search-container-">
                        <TestSearchBar />
                    </div>
                    {/* <TestSearchBar /> */}
                    {/* <Search /> */}

                    {/* cart floating button */}
                    <CartButton />
                </div>

                <div className="container" style={{ height: "100vh" }}>
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
                    <div className="display-4 my-md-2 mx-md-2 text-dark">Foodies <span style={{ color: "#ffff", background: "#285954" }}>Feeds</span></div>
                </div>

                <div className="sec-3" style={{ display: "flex" }}>
                    <div className="RightFeeds" style={{ width: "55%" }} >
                        {homeFeed}
                    </div>
                    <div className="LeftSticky" style={{ width: "45%" }}><RightNavigation /></div>
                </div>

                <Footer />

            </div>

        );
    }
}

export default Home;