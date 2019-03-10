//Genaral Import
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

//Components
import ContactList from "./components/contacts/ContactList";
import AddContact from "./components/contacts/AddContacts";
import Navbar from "./components/assets/Navbar";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import EditContact from "./components/contacts/EditContact";

//Context Provider
import { Provider } from "./Contex";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Navbar titleName="React Contact Manager" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={ContactList} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact/add" component={AddContact} />
                <Route exact path="/contact/edit/:id" component={EditContact} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
