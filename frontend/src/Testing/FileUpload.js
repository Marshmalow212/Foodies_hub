import React, { Component } from 'react';
import axios from 'axios';

class FileUpload extends Component {
    constructor(props) {
        super(props);
        this.state={
            inputData:{},
            formData:new FormData()
        }
        this.getData = this.getData.bind(this);
        this.getFile = this.getFile.bind(this);
        this.sendData = this.sendData.bind(this);
    }

    getData(e){
        e.preventDefault()
        this.setState({inputData:{[e.target.name]:e.target.value}});
    }
    getFile(e){
        this.state.formData.append(e.target.name,e.target.files[0]);
    }
    sendData(e){
        e.preventDefault();
        console.log(this.state.formData.keys());
        axios.post('http://localhost:5002/adduser',this.state.formData)
        .then(
            (res)=>{
                console.log(res)
            }
        )
    }
    
    render() {
        return (
            <div className="container ">
                <div className="display-3 text-center">File Upload</div>
                <form className="row d-flex justify-content-center " encType="multipart/form-data" >
                    <div >
                        <label>Name </label>
                        <input type="text" name="name" className="form-control"  onChange={this.getData}/>                        
                        <img className="img-fluid" alt="D:/Project/springtestproject/src/main/resources/uploads/nekro-ash-40.jpg" src="D:/Project/springtestproject/src/main/resources/uploads/nekro-ash-40.jpg"/>
                    </div>
                    
                    <div>
                        <div>
                            <span>Picture</span><input type="file" name="picture" className="form-control" onChange={this.getFile}/>
                        </div>                                                
                    </div>

                    <div className="mt-2 mb-2">
                        <button type="submit" className="btn btn-dark" onClick={this.sendData}>Send</button>
                    </div>


                    
                </form>
            </div>
        );
    }
}

export default FileUpload;