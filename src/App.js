import React, { Component } from 'react';
import './App.css';
import Sidebar from './Components/Sidebar';
import Content from './Components/Content';
import './Components/Content.css'
import './Components/Layout.css'

class App extends Component {
  render() {
    return (
     <div>
       <Sidebar />
       <Content />
     </div>
    );
  }
}

export default App;
