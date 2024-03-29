import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import SendEmail from "./pages/SendEmailForgetPassword.jsx";
import ResetPassword from "./pages/ResetPassword.jsx";
import { Toaster } from "react-hot-toast";
import Home from "./pages/home/Home.jsx";
import BooksContextProvider from "./store/books.jsx";
import Book from "./pages/book/Book.jsx";
import Layout from "./pages/Layout.jsx";
import Cart from "./pages/cart/Cart.jsx";
import WishList from "./pages/wishList/WishList.jsx";
import Checkout from "./pages/checkout/Checkout.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/sendmail" element={<SendEmail />} />
      <Route path="/forgetpassword/:id" element={<ResetPassword />} />
      <Route path="/*" element={<Signup />} />
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />}></Route>
        <Route path="/book/:id" element={<Book />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <BooksContextProvider>
    <Toaster />
    <RouterProvider router={router} />
  </BooksContextProvider>,
);
