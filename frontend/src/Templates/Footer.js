import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Footer extends Component {
    constructor(props){
        super(props);
        this.d = new Date();
        this.curYear = this.d.getFullYear();
    //    console.log(this.curYear);
    }
    
    render() { 
        return(
            <>
        <div className="text-center bg-warning m-sm-0 border-top border-dark my-md-2 ">
            <code className="bg-warning">Copyright @ {this.curYear}</code>
        </div>
        </>
        )
    }
}
 
export default Footer;
