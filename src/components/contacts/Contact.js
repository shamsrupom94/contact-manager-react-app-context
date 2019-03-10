import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { Link } from "react-router-dom";
import { Consumer } from "../../Contex";

class Contact extends Component {
  state = {
    toggleButton: false
  };
  expandDetails = e => {
    this.setState({ toggleButton: !this.state.toggleButton });
  };

  deleteClick = (id, dispatch) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => dispatch({ type: "DELETE_CONTACT", payload: id }));
  };

  render() {
    const { name, email, phone, id } = this.props.contact;
    const { toggleButton } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h5>
                {name}
                {"  "}
                <i
                  onClick={this.expandDetails}
                  className="fas fa-chevron-circle-down"
                  style={{
                    cursor: "pointer",
                    color: "#0080FF",
                    fontSize: "25px"
                  }}
                />

                <i
                  onClick={this.deleteClick.bind(this, id, dispatch)}
                  className="fas fa-trash-alt"
                  style={{
                    cursor: "pointer",
                    color: "red",
                    float: "right",
                    fontSize: "25px"
                  }}
                />
                <Link to={`contact/edit/${id}`}>
                  <i
                    className="fas fa-edit"
                    style={{
                      cursor: "pointer",
                      color: "#0080FF",
                      float: "right",
                      fontSize: "25px",
                      marginRight: "1rem"
                    }}
                  />
                </Link>
              </h5>

              {toggleButton ? (
                <ul className="list-group">
                  <li className="list-group-item">
                    <b>Email:</b> {email}
                  </li>
                  <li className="list-group-item">
                    <b>Phone:</b> {phone}
                  </li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};
export default Contact;
