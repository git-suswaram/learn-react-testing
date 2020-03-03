import React, { Component } from "react";
import TextInputGroup from "./layout/TextInputGroup";

//Controlled Component
class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",

    submitActive: false
  };

  handleChange = event => {
    this.setState(
      {
        [event.target.name]: event.target.value
      },
      this.checkFields
    );
  };

  checkFields = () => {
    if (this.state.name && this.state.email && this.state.phone) {
      this.setState({ submitActive: true });
    } else {
      this.setState({ submitActive: false });
    }
  };

  handleSubmit = event => {
    event.preventDefault();
    //console.log(this.state);

    if (!this.state.submitActive) {
      return;
    }

    this.props.submit(this.state);
  };

  render() {
    const { name, email, phone } = this.state;
    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form onSubmit={this.handleSubmit}>
            <TextInputGroup
              label="Name"
              name="name"
              value={name}
              placeholder="Enter Name..."
              onChange={this.handleChange}
            />

            <TextInputGroup
              label="Email"
              name="email"
              value={email}
              type="email"
              placeholder="Enter Email..."
              onChange={this.handleChange}
            />

            <TextInputGroup
              label="Phone"
              name="phone"
              value={phone}
              placeholder="Enter Phone..."
              onChange={this.handleChange}
            />

            <input
              type="submit"
              value="Add Contact"
              className="btn btn-dark btn-block"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default AddContact;
