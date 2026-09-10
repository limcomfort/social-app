import express, { Express } from "express";
import dotenv from "dotenv";
import postsRouter from "./routes/posts.js";
import { notFound } from "./controllers.js"

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/posts", postsRouter);

app.use(notFound);

app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});
