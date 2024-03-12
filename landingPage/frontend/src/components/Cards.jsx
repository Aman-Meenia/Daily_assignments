import React from "react";
import Card from "./Card";

const Cards = () => {
  return (
    <>
      <div className="font-[sans-serif] bg-gray-100">
        <div className="p-4 mx-auto lg:max-w-7xl sm:max-w-full">
          {/* <h2 className="text-4xl font-extrabold text-gray-800 mb-12"> */}
          {/*   Premium Books */}
          {/* </h2> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {
              <>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
              </>
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;

// import React, { useContext } from "react";
// import Card from "./Card";
// import { BooksContext } from "../../store/books";
//
// const Cards = () => {
//   const booksArr = [
//     { id: 1, title: "Book 1", author: "Author 1", price: "$10" },
//     { id: 2, title: "Book 2", author: "Author 2", price: "$15" },
//     { id: 3, title: "Book 3", author: "Author 3", price: "$20" },
//     { id: 4, title: "Book 4", author: "Author 4", price: "$25" },
//     { id: 5, title: "Book 5", author: "Author 5", price: "$30" },
//     { id: 6, title: "Book 6", author: "Author 6", price: "$35" },
//     { id: 7, title: "Book 7", author: "Author 7", price: "$40" },
//     { id: 8, title: "Book 8", author: "Author 8", price: "$45" },
//     { id: 9, title: "Book 9", author: "Author 9", price: "$50" },
//     { id: 10, title: "Book 10", author: "Author 10", price: "$55" },
//     { id: 11, title: "Book 11", author: "Author 11", price: "$60" },
//     { id: 12, title: "Book 12", author: "Author 12", price: "$65" },
//     { id: 13, title: "Book 13", author: "Author 13", price: "$70" },
//     { id: 14, title: "Book 14", author: "Author 14", price: "$75" },
//     { id: 15, title: "Book 15", author: "Author 15", price: "$80" },
//     { id: 16, title: "Book 16", author: "Author 16", price: "$85" },
//     { id: 17, title: "Book 17", author: "Author 17", price: "$90" },
//     { id: 18, title: "Book 18", author: "Author 18", price: "$95" },
//     { id: 19, title: "Book 19", author: "Author 19", price: "$100" },
//     { id: 20, title: "Book 20", author: "Author 20", price: "$105" },
//   ];
//
//   const { books } = useContext(BooksContext);
//
//   return (
//     <div classNameName="container mx-auto py-8">
//       <h1 classNameName="text-3xl font-semibold mb-4">Books for Sale</h1>
//       <div classNameName="grid grid-cols-2  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
//         {books.map((book) => (
//           <Card key={book._id} book={book} />
//         ))}
//       </div>
//     </div>
//   );
// };
//
// export default Cards;
