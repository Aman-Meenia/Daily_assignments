import { Router } from "express";
import {
  addData,
  deleteData,
  getData,
  getDataWithId,
  updateCompletedStatus,
  updateData,
} from "../controllers/crudController.js";

const router = Router();
router.patch("/updatetasksstatus/:id", updateCompletedStatus);
router.get("/gettasks", getData);
router.get("/gettasks/:id", getDataWithId);
router.post("/addtasks", addData);
router.delete("/deletetasks/:id", deleteData);
router.put("/updatetasks/:id", updateData);

export default router;

// postman link

// GET ->  http://localhost:3001/api/users/gettasks
// GET -> http://localhost:3001/api/users/gettasks/12
// POST -> http://localhost:3001/api/users/addtasks
// {
// {id,title, description,completed}
//     "id":1233,
//     "title":"It Starts With Us",
//        "description":"Description: In this compelling narrative, author [Author Name] delves into the intricacies of human relationships, exploring the profound impact that our actions and choices have on ourselves and those around us. Set against the backdrop of [Setting], the story follows [Main Character] as they navigate the complexities of love, friendship, and forgiveness. As secrets unravel and truths are revealed, the characters confront their pasts and strive to forge a brighter future. Through moments of joy, heartache, and redemption, 'It Starts With Us' reminds us that change begins from within, and that the power to create a better world lies in our hands",
//        "completed":false
// }
// DELETE -> http://localhost:3001/api/users/deletetasks/13
// UPDATE ->http://localhost:3001/api/users/updatetasks/7
// PATCH - >http://localhost:3001/api/users/updatetasksstatus/12
