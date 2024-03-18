import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import App from "./App.jsx";
// import "./index.css";

import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Outlet,
  Route,
} from "react-router-dom";
import "./index.css";
import Home from "./components/Home.jsx";
import Template from "./components/Template.jsx";
import Posts from "./components/Posts.jsx";
import Users from "./components/Users.jsx";
import Todos from "./components/Todos.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Template />}>
        <Route path="" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/users" element={<Users />} />
        <Route path="/todos" element={<Todos />} />
      </Route>
      <Route path="*" element={<h1>Not Found</h1>} />
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
