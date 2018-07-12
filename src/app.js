import React, { Component } from 'react';
import Header from '../src/header';
import Repository from '../src/Repository';
import Policy_details from '../src/Policy_details';
import Insurance from '../src/Insurance';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        
       <Header />
       <Repository/>
       <Policy_details />
       <Insurance />
   </div>   
    );
  }
}

export default App;
