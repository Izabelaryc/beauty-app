import React from "react";
import HomePage from "./components/HomePage";
import Test from "./components/Test";
import Season from "./components/Season";
import data from "./data";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
