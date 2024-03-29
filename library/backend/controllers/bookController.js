import Book from "../models/bookModel.js";
import mongoose from "mongoose";

// <-------------------------Add Book ----------------------------------->
export const addBook = async (req, res) => {
  try {
    const { title, author, rating, genre, quantity, image } = req.body;

    if (!title || !author || !genre || !quantity || !image) {
      return res.status(400).json({
        status: false,
        message: "All fields are required",
      });
    }

    const book = await Book.findOne({ title });
    if (book) {
      return res.status(400).json({
        status: false,
        message: "Book with same title already exists",
      });
    }

    const newBook = new Book({
      title,
      author,
      rating: !rating ? 0 : rating,
      genre,
      quantity,
      image,
    });

    await newBook.save();

    return res.status(201).json({
      status: true,
      message: "Book added successfuly",
    });
  } catch (err) {
    if (err.name === "ValidationError") {
      console.log("validation error", err);
      return res.status(400).json({
        status: false,
        message: err.message,
      });
    }
    console.log("err");
    return res.status(500).json({
      status: false,
      message: err.message,
    });
  }
};

// <---------------------Update book------------------------------->

export const updateBook = async (req, res) => {
  try {
    const { title: titleis } = req.params;

    const { title, author, rating, genre, quantity } = req.body;

    const book = await Book.findOne({ title: titleis });

    if (!book) {
      return res.status(400).json({
        status: false,
        message: "Book not present ",
      });
    }

    if (!title && !author && !genre && !quantity) {
      return res.status(400).json({
        status: false,
        message: "No field is selcted to be updated ",
      });
    }

    if (title) {
      const bookPresent = await Book.findOne({ title });
      if (bookPresent) {
        return res.status(400).json({
          status: false,
          message: "Book with same title already exists",
        });
      }
      book.title = title;
    }

    if (author) {
      book.author = author;
    }
    if (rating) {
      book.rating = rating;
    }
    if (genre) {
      book.genre = genre;
    }
    if (quantity) {
      book.quantity += quantity;
    }

    console.log(book);
    console.log("Book updated successfuly");
    await book.save();

    res.status(200).json({
      status: true,
      message: "Book details updated successfuly",
    });
  } catch (err) {
    // console.log(err);
    if (err.name === "ValidationError") {
      return res.status(400).json({
        status: false,
        message: err.message,
      });
    }
    return res.status(500).json({
      status: false,
      message: err.message,
    });
  }
};

// <----------------------------------Delete book------------------------------>

export const deleteBook = async (req, res) => {
  try {
    const { title: titleis } = req.params;

    const book = await Book.findOne({ title: titleis });

    if (!book) {
      return res.status(400).json({
        status: false,
        message: "Book already not present",
      });
    }

    // if present delete book

    const id = book._id;

    await Book.findByIdAndDelete(id);
    console.log("Book delted successfuly");
    return res.status(200).json({
      status: true,
      message: "Book deleted successfuly",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      status: false,
      message: "Internal server error",
    });
  }
};

// <------------------------------------Borrow Book ------------------------------->
export const borrowBook = async (req, res) => {
  try {
    const { title: titleis } = req.params;

    const book = await Book.findOne({ title: titleis });

    if (!book) {
      return res.status(400).json({
        status: false,
        message: "Book  not present",
      });
    }

    if (book.quantity === 0) {
      return res.status(200).json({
        status: true,
        message: "Book not avaliable ",
      });
    }

    book.quantity--;

    await book.save({ validateBeforeSave: false });

    return res.status(200).json({
      status: true,
      message: "Book borrowred successfuly",
    });
  } catch (err) {
    return res.status(500).json({
      status: false,
      message: "Internal server error",
    });
  }
};

// <------------------------------------Return Book ------------------------------->

export const returnBook = async (req, res) => {
  try {
    const { title: titleis } = req.params;

    const book = await Book.findOne({ title: titleis });

    // user can only return book only when he borrowred book so no extra condition to check
    if (!book) {
      return res.status(400).json({
        status: false,
        message: "Book  not present",
      });
    }

    book.quantity++;
    await book.save({ validateBeforeSave: false });

    return res.status(200).json({
      status: true,
      message: "Book return successfuly",
    });
  } catch (err) {
    return res.status(500).json({
      status: false,
      message: "Internal server error",
    });
  }
};

// <-----------------------------------Get all books--------------------------->
export const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find(
      {},
      {
        title: 1,
        author: 1,
        rating: 1,
        genre: 1,
        quantity: 1,
        image: 1,
      },
    );
    return res.status(200).json({
      status: true,
      message: "Books fetched successfuly",
      books: books,
    });
  } catch (err) {
    return res.status(500).json({
      status: false,
      message: "Internal server error",
    });
  }
};

// <-----------------------------------Get book by title--------------------------->

export const getBookById = async (req, res) => {
  try {
    let { id } = req.params;

    id = id.trim();
    if (!id) {
      return res.status(400).json({
        status: false,
        message: "Book id is required",
      });
    }

    const validMongoId = mongoose.Types.ObjectId.isValid(id);

    if (!validMongoId) {
      return res.status(400).json({
        status: false,
        message: "Invalid book id",
      });
    }

    const book = await Book.findById(id, {
      title: 1,
      author: 1,
      rating: 1,
      genre: 1,
      quantity: 1,
      image: 1,
    });

    if (!book) {
      return res.status(400).json({
        status: false,
        message: "Book not found",
      });
    }

    return res.status(200).json({
      status: true,
      message: "Book Details fetched successfuly",
      book: book,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      status: false,
      message: "Internal sever error",
    });
  }
};
