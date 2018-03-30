import React from 'react';
import axios from 'axios';

export default class App extends React.Component {
  render() {
    axios.get('/admin')
      .then(console.log)
      .catch(console.error)

    return (
     <div style={{textAlign: 'center'}}>
        <h1>Hello world</h1>
      </div>);
  }
}