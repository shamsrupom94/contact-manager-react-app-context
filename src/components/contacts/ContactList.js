import React, { Component } from "react";
import Contact from "./Contact";

import { Consumer } from "../../Contex";

class ContactList extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          return (
            <React.Fragment>
              <h2 className="display-4 mb-4">
                <span className="text-primary">React </span>Contact Manager
              </h2>
              <div className="card card-body">
                <h3 className="display-5 mb-4">
                  <span className="text-primary">Contact </span>List
                </h3>
                {contacts.map(contact => (
                  <Contact key={contact.id} contact={contact} />
                ))}
              </div>
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}
export default ContactList;
