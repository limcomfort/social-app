import express, { Express } from "express";
import dotenv from "dotenv";
import {
  getAllPosts,
  getPost,
  createNewPost,
  removePost,
  notFound,
} from "./controllers.js";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/posts", getAllPosts);

app.get(".posts/:id", getPost);

app.post("/posts", createNewPost);

app.delete("/posts/:id", removePost);

app.use(notFound);

app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});
