import React, { Component } from "react";
import Header from "./components/layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import AddContact from "./components/contacts/AddContact";

class App extends Component {

  // submit = submission => {
  //   console.log(submission)
  // }

  submit = submission => {
    console.log(submission);
  };

  render() {

    return (
      <div className="App">
        <Header branding="Contact Manager" />
        <div className="container">
          <AddContact submit={this.submit}/>
        </div>
      </div>
    );
  }
}

export default App;
