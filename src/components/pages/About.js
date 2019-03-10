import React from "react";

export default function About() {
  return (
    <div className="container">
      <h2 className="display-4 mb-3">
        About <span className="text-primary">React </span> Contact Manager
        (Context API version)
      </h2>
      <p className="lead">
        Contact Manager Build with REACTJS , Context API/Redux (there's actually
        two seperate versions of this project). We have also added react router
        to browse through the app.{" "}
        <span className="text-danger">
          THIS VESION IS BUILD WITH Context API.
        </span>
      </p>
      <p className="lead text-danger">
        In this project we have not used any database. Here, we used JSON place
        holder as mock API
      </p>
      <p className="lead">
        {" "}
        The Dependencies that are added to this version are{" "}
      </p>
      <ul>
        <li>bootstrap (for styling)</li>
        <li>
          classnames (for adding multiple classnames and conditional classnames
          in TextGroup.js file)
        </li>
        <li>uuid (for random id genarator)</li>
        <li>react-router-dom (for router) </li>
      </ul>
      <p className="text-secondary"> Version 1.0.1</p>
    </div>
  );
}
