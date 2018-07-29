import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
constructor(props)
{
  super(props);
  this.state = {dataSource:[]}
}
  componentDidMount()
  {
    axios.get('https://k4v8i7cb2f.execute-api.ap-south-1.amazonaws.com/dev/get-bill-data')
    .then((data)=>
{
    this.setState({dataSource:data.data.Items});
    console.log(data)
})
  }
  render() {
    console.log(this.state.dataSource)
    return (
     <div>
      {this.state.dataSource.map((ds,index)=>
      {
      return( <div key={index}><span>{ds.customerName}</span>
      <br/>
      </div>)
        }
      )}
      </div>
    );
  }
}

export default App;
