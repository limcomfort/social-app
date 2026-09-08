import {IncomingMessage, ServerResponse } from "node:http";
import { posts, Post } from "./data.js";

type RequestHandler = (
  req: IncomingMessage,
  res: ServerResponse,
  params?: Record<string, string>
) => void;

export const getPosts: RequestHandler = (req, res) => {
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.end(
    JSON.stringify({
      success: true,
      data: posts,
    })
  );
};

export const getPostById: RequestHandler = (req, res, params) => {
  const id = params?.id;

  if (!id) {
    res.statusCode = 400;
    res.end(
      JSON.stringify({
        success: false,
        error: "ID поста не указан",
      })
    );
    return;
  }

  const post = posts.find((p) => p.id === id);

  if (!post) {
    res.statusCode = 404;
    res.end(
      JSON.stringify({
        success: false,
        error: `Het nota é ID=${id}`,
      })
    );
    return;
  }
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.end(
    JSON.stringify({
      success: true,
      data: post,
    })
  );
};

export const notFound: RequestHandler = (req, res) => {
  res.statusCode = 404;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.end(
    JSON.stringify({
      success: false,
      error: `Маршрут ${req.url} не найден`,
    })
  );
};
