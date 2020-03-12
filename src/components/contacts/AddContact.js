import React, { Component } from "react";
import TextInputGroup from "../layout/TextInputGroup";

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

    const submission = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
    };

    this.props.submit(submission);

    this.setState({
      name: "",
      email: "",
      phone: "",

      submitActive: false
    });
  };

  render() {
    const { name, email, phone } = this.state;
    return (
      <div className="card mb-3" data-test="addC-root-div">
        <div className="card-header" data-test="addC-header">Add Contact</div>
        <div className="card-body" data-test="addC-body">
          <form onSubmit={this.handleSubmit} data-test="addC-form">
            <TextInputGroup
              label="Name"
              name="name"
              value={name}
              placeholder="Enter Name..."
              onChange={this.handleChange}
              data-test="tig-name"
            />

            <TextInputGroup
              label="Email"
              name="email"
              value={email}
              type="email"
              placeholder="Enter Email..."
              onChange={this.handleChange}
              data-test="tig-email"
            />

            <TextInputGroup
              label="Phone"
              name="phone"
              value={phone}
              placeholder="Enter Phone..."
              onChange={this.handleChange}
              data-test="tig-phone"
            />

            <input
              type="submit"
              value="Add Contact"
              className="btn btn-dark btn-block"
              data-test="addC-submit"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default AddContact;
