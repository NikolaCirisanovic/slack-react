import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import './Components/Content.css'
import './Components/Sidebar.css'
import Sidebar from './Components/Sidebar';
import Content from './Components/Content';


class App extends Component {
  render() {
    return (
    <div id="wrap">
       <Sidebar />
       <Content />
     </div>
    );
  }
}

export default App;
