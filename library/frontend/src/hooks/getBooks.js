import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { BooksContext } from "../store/books";
import { useContext } from "react";

export const useGetBooks = () => {
  const [loading, setLoading] = useState(false);
  const { books, setBooks } = useContext(BooksContext);

  const getBooks = async () => {
    setLoading(true);
    await axios
      .get("/api/v1/book/getbooks")
      .then((response) => {
        console.log(response.data);
        if (books.length === 0) {
          console.log("works ");
          setBooks(response.data.books);
        } else {
          setBooks(response.data.books);
        }

        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        // toast.error(err.response.data.message);
        // setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { loading, getBooks };
};
