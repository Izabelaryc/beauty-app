import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createHashRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/HomePage";
import Test from "./components/Test";
import Season from "./components/Season";
const router = createHashRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "",
          element: <HomePage />,
        },
        {
          path: "/test",
          element: <Test />,
        },
        {
          path: "/season/:id",
          element: <Season />,
        },
      ],
    },
  ],
  {
    basename:
      process.env.NODE_ENV === "production"
        ? process.env.PUBLIC_URL
        : undefined,
  }
);

console.log(process.env.PUBLIC_URL);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
