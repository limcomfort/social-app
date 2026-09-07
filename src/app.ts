import { createServer, IncomingMessage, ServerResponse } from "node:http";
import { posts, Post } from "./data/ts";
const port = 8000;

const server = createServer((req: IncomingMessage, res: ServerResponse) => {
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.end(
    JSON.stringify({
      message: "Тест АПИ! Привет!",
      timestamp: new Date().toISOString(),
    })
  );
});

server.listen(port, () => {
  console.log(`Сервер запущен на порту http://localhost:${port}`);
});
