import React, { Component } from "react";
import { Consumer } from "../../Contex";
import TextGroup from "../assets/TextGroup";
import uuid from "uuid";
import { Link } from "react-router-dom";

class AddContacts extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    error: {}
  };
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;

    //Error Checking
    if (name === "") {
      this.setState({ error: { name: "Name is required" } });
      return;
    }
    if (email === "") {
      this.setState({ error: { email: "Email is required" } });
      return;
    }
    if (phone === "") {
      this.setState({ error: { phone: "Phone no. is required" } });
      return;
    }

    const newContact = {
      id: uuid(),
      name: name,
      email: email,
      phone: phone
    };
    dispatch({ type: "ADD_CONTACT", payload: newContact });
    this.setState({
      name: "",
      email: "",
      phone: "",
      error: {}
    });

    this.props.history.push("/");
  };

  render() {
    const { name, email, phone, error } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <React.Fragment>
              <h2 className="display-4 mb-3">
                <i
                  className="fas fa-address-card"
                  style={{ color: "#0080FF", fontSize: "50px" }}
                />
                <span className="text-primary"> Add</span> New Contact
              </h2>
              <div className="card mb-3">
                <div className="card-body">
                  <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                    <TextGroup
                      label="Name"
                      name="name"
                      placeholder="Enter Name..."
                      value={name}
                      onChange={this.onChange}
                      error={error.name}
                    />
                    <TextGroup
                      label="Email"
                      name="email"
                      type="email"
                      placeholder="Enter Email ID..."
                      value={email}
                      onChange={this.onChange}
                      error={error.email}
                    />
                    <TextGroup
                      label="Phone"
                      name="phone"
                      placeholder="Enter Phone no...."
                      value={phone}
                      onChange={this.onChange}
                      error={error.phone}
                    />
                    <button
                      type="submit"
                      value="Add Contact"
                      className="btn btn-primary float-right"
                    >
                      <i className="fas fa-address-book" /> Add Contact
                    </button>
                    <Link to="/">
                      <button className="btn btn-danger float-left">
                        <i className="fas fa-backspace" /> Back
                      </button>
                    </Link>
                  </form>
                </div>
              </div>
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}
export default AddContacts;
