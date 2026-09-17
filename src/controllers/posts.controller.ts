import { Request, Response } from "express";
import {
  getPosts,
  getPostById,
  createPost,
  deletePost,
  getCommentsByPostId,
} from "../models/posts";

export const getAllPosts = (req: Request, res: Response) => {
  const posts = getPosts();
  res.json({ success: true, data: { posts } });
};

export const getPost = (req: Request, res: Response) => {
  const { id } = req.params as { id: string };
  const post = getPostById(id);

  if (!post) {
    res.status(404).json({ success: false, message: "Пост не найден" });
    return;
  }

  res.json({ success: true, data: post });
};

export const createNewPost = (req: Request, res: Response) => {
  const { content, author } = req.body; // Получаем автора и контент из тела запроса

  if (!content) {
    // Если нет контента
    res.status(400).json({
      success: false,
      error: "Не передан контент",
    });
    return;
  }

  const newPost = createPost(content, author); // Создаем новый пост
  res.status(201).json({ success: true, data: newPost }); // Отправляем статус создания нового поста
};

export const removePost = (req: Request, res: Response) => {
  const { id } = req.params as { id: string };
  const isDeleted = deletePost(id);

  if (!isDeleted) {
    res.status(404).json({ success: false, message: "Пост не найден" });
    return;
  }

  res.status(204).send(); // 204 No Content - Успешно удалено`
};

/* ============ Комментарии ============= */
export const getPostComments = (req: Request, res: Response) => {
  const { id } = req.params as { id: string };

  const post = getPostById(id);
  if (!post) {
    res.status(404).json({ success: false, error: "Пост не найден" });
    return;
  }

  const comments = getCommentsByPostId(id);
  res.json({ success: true, data: comments });
};
