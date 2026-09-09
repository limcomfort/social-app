import { createServer, IncomingMessage, ServerResponse } from "node:http";
import { getPosts, getPostById, notFound } from "./controllers.js";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 3000;

const server = createServer((req: IncomingMessage, res: ServerResponse) => {
  const url = req.url || "/";
  const method = req.method || "GET";

  console.log("${method} ${url}");
  const [path, queryString] = url.split("?");

  if (method === "GET") {
    if (path === "/") {
      getPosts(req, res);
      return;
    }

    const match = path.match(/^\/posts\/([a-zA-Z0-9]+)$/);
    if (match) {
      const id = match[1];
      getPostById(req, res, { id });
    }
  }

  notFound(req, res);
});

server.listen(port, () => {
  console.log(`Сервер запущен на порту http://localhost:${port}`);
});
