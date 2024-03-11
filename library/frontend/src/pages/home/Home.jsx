import React from "react";
import Navbar from "./Navbar";
import Cards from "./Cards";
import Links from "./Links";
import { useEffect } from "react";
import { useGetBooks } from "../../hooks/getBooks";
import Footer from "./Footer";

const Home = () => {
  const { getBooks, loading } = useGetBooks();
  useEffect(() => {
    console.log("works");

    const fetchData = async () => {
      await getBooks();
    };
    fetchData();
  }, []);
  return (
    <>
      <Links />
      <Cards />
    </>
  );
};

export default Home;
