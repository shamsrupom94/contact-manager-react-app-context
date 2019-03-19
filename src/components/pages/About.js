import React from "react";

export default function About() {
  return (
    <div className="container">
      <h2 className="display-4 mb-3">
        About <span className="text-primary">React </span> Contact Manager
      </h2>
      <p className="lead">
        Contact Manager Build with REACTJS , Context API/Redux (there's actually
        two seperate versions of this project).
        <br />
        <a
          href="https://github.com/shamsrupom94/contact-manager-react-app-context"
          target="_blank"
          className="text-danger"
          style={{ cursor: "pointer" }}
        >
          Github page for context API Version
        </a>
        <br />
        <a
          href="https://github.com/shamsrupom94/contact-manager-react-app-redux"
          target="_blank"
          className="text-danger"
          style={{ cursor: "pointer" }}
        >
          Github page for Redux Version
        </a>
      </p>
      <p className="lead text-danger">
        In this project we have not used any database. Here, we used JSON place
        holder as mock API
      </p>

      <p className="text-secondary"> Version 1.0.2</p>
    </div>
  );
}
