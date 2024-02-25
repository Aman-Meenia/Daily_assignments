import { Router } from "express";
import {
  addData,
  deleteData,
  getData,
  updateData,
} from "../controllers/crudController.js";

const router = Router();

router.get("/getdata", getData);
router.post("/adddata", addData);
router.delete("/deletedata/:id", deleteData);
router.put("/updatedata/:id", updateData);

export default router;
