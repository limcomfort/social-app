import express, { Express } from "express";
import dotenv from "dotenv";
import postsRouter from "./routes/posts.router.js";
import usersRouter from "./routes/users.router.js";
import { notFound } from "./controllers.js";
const cors = require("cors");

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;
// Middleware (посредник) для прасинга JSON
app.use(express.json());
app.use(cors());
app.use("/posts", postsRouter);
app.use("/users", usersRouter);

app.use(notFound);

app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});
