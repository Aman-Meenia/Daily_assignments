import React, { useState } from "react";
export const BooksContext = React.createContext();

const BooksContextProvider = ({ children }) => {
  const [books, setBooks] = useState([]);

  return (
    <BooksContext.Provider value={{ books, setBooks }}>
      {children}
    </BooksContext.Provider>
  );
};

export default BooksContextProvider;
