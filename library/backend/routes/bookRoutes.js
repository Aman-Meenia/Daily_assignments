import { Router } from "express";
import {
  addBook,
  borrowBook,
  deleteBook,
  returnBook,
  updateBook,
} from "../controllers/bookController.js";
import { verifyJWT } from "../middleware/verifyJWT.js";
import { adminAndUserAuth } from "../middleware/authorization.js";

const router = Router();

// protected routes

router.post("/addbook", verifyJWT, adminAndUserAuth, addBook);
router.post("/updatebook/:title", verifyJWT, adminAndUserAuth, updateBook);
router.post("/deletebook/:title", verifyJWT, adminAndUserAuth, deleteBook);
// non-protected routes

router.post("/borrowbook/:title", verifyJWT, borrowBook);
router.post("/returnbook/:title", verifyJWT, returnBook);

export default router;
