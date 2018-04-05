import React from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Routes from '../routes/Routes';

export default class App extends React.Component {
  render() {
    axios.get('/admin')
      .then(console.log)
      .catch(console.error)

    return (
      <div className="App">
        <Header/>
        <Routes/>
      </div>);
  }
}