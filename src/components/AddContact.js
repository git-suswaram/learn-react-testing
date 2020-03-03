import React, { Component } from "react";

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

  checkFields =() => {
    if(this.state.name && this.state.email && this.state.phone){
      this.setState({submitActive: true});
    } else {
      this.setState({submitActive: false});
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    //console.log(this.state);

    if(!this.state.submitActive){
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
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                className="form-control form-control-lg"
                name="name"
                value={name}
                type="text"
                placeholder="Enter Name..."
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                className="form-control form-control-lg"
                name="email"
                value={email}
                type="email"
                placeholder="Enter Email..."
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                className="form-control form-control-lg"
                name="phone"
                value={phone}
                type="text"
                placeholder="Enter Phone..."
                onChange={this.handleChange}
              />
            </div>
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
