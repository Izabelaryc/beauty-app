import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <h1>Four Beauty Seasons</h1>
      <h2>What is your color season?</h2>
      <Link to="/test">Start the test!</Link>
    </div>
  );
}
