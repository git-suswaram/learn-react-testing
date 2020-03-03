import React, { Component } from "react";
import Header from './components/layout/Header'
import 'bootstrap/dist/css/bootstrap.min.css'
class App extends Component {

  render() {
    return (
      <div className="App">
      <Header branding="Contact Manager" />
        
      </div>
    );
  }
}

export default App;
