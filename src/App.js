import './App.css';
import React, { Component } from 'react';

const axios = require('axios');

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null
    }
  }

  onChangeHandler = event => {
    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0
    });
  }

  onClickHandler = () => {
    console.log(this.state.selectedFile);
    const data = new FormData();
    data.append('file', this.state.selectedFile);

    axios.post('http://localhost:8000/upload', data, {
      // receive two parameter endpoint url, form data
    })
    .then( res => {
      console.log(res.statusText);
    })
    .catch( err => {
      console.log(err);
    })
  }

  render(){
    return (
        <div className="container">
          <div className="row">
            <div className="col-md-6">
                <form method="post" action="#" id="#">
                  <div className="form-group files">
                    <label>Upload Your File </label>
                    <input type="file" name="file" onChange={this.onChangeHandler} className="form-control" multiple="" />
                    <button type="button" className="btn btn-success btn-block" onClick={this.onClickHandler}>Upload</button>
                  </div>
                </form>
            </div>
          </div>
        </div>
      );
    }
}

export default App;
