import express from "express";
import dotenv from "dotenv";

const app = express();

// Middlewares

app.use(express.json());
dotenv.config();

// ROUTES
import crudRoutes from "./routes/crudRoute.js";

app.use("/api/users/", crudRoutes);

// app.get("/api/users/data", (req, res) => {
//   res.send("Hello");
// });
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
