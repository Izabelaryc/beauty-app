import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="homepage">
      <h1 className="title">Four Beauty Seasons</h1>
      <h2 className="homepage-text">What is your color season?</h2>
      <Link className="homepage-link" to="/test">
        Start the test!
      </Link>
      <img
        className="homepage-img02"
        src={`${process.env.PUBLIC_URL}/public/images/butterfly02.jpg`}
      />
    </div>
  );
}
