import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Home from "./routes/Home/Home";
import About from "./routes/About/About";
import Projects from "./routes/Projects/Projects";
import Contact from "./routes/Contact/Contact";
import Navbar from "./components/Navbar";
import "./App.css";
import "./routes/About/About.css";
import "./routes/Contact/Contact.css";
import "./routes/Projects/Projects.css";

const Applayout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
