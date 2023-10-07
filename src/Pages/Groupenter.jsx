import axios from 'axios';
import React, { Component } from 'react';
import Todolist from '../Components/Todolist';


class Groupenter extends Component {
  state = {
    selectedFile: null
  };


  onFileChange = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
  };


  onFileUpload = () => {
    const formData = new FormData();
    formData.append("myFile", this.state.selectedFile, this.state.selectedFile.name);
    axios.post("api/uploadfile", formData);
  };


  handleRefresh = () => {
    window.location.reload();
  };


  fileData = () => {
    if (this.state.selectedFile) {
      return (
        <div>
          <h2 id='clr'>File Details:</h2>
          <p id='clr'>File Name: {this.state.selectedFile.name}</p>
          <p id='clr'>File Type: {this.state.selectedFile.type}</p>
          <p id='clr'>
            Last Modified: {this.state.selectedFile.lastModifiedDate.toDateString()}
          </p>
        </div>
      );
    } else {
      return (
        <div>
          <br />
        </div>
      );
    }
  };


  render() {
    return (
      <div className="row justify-content-evenly" style={{marginTop:"150px"}}>
        <div className="col-md-4">
        <div className="card1">
          <h3>Upload your file</h3>
          <div>
            <label className="custom-file-upload">
              <input type="file" id='inp1' onChange={this.onFileChange} />
              Upload File
            </label>
            
            <button onClick={this.handleRefresh} style={{ marginLeft: '10px' }} id="buton">Refresh</button>
          </div>
          {this.fileData()}
        </div>
        <div className="ms-2 col-md-10 mt-4 rounded-3 p-3 bg-white">
            <center><h3>Want to Test your Knowledge?</h3></center>
            <center><a href="https://haamidraza03.github.io/quizmaths/"><button className='bg-primary rounded-3 text-white btn mt-3 px-4'>Take Quiz</button></a></center>
        </div>
        </div>

        <div className="col-md-5">
            <Todolist/>
        </div>
        
      </div>
    );
  }
}


export default Groupenter;
