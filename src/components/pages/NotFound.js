import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="jumbotron">
      <h1 className="display-3">
        {" "}
        <spna className="text-danger">404</spna> Page Not found
      </h1>
      <p className="lead">
        Let's Go <Link to="/"> Back </Link>
      </p>
    </div>
  );
}
