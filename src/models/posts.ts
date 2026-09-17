import { posts, Post, comments, Comment } from "../data.js";

/* Получаем массив всех постов */
export function getPosts(): Post[] {
  return posts;
}
/* Получаеам 1 пост по id */
export function getPostById(id: string): Post | undefined {
  return posts.find((p) => p.id === id);
}
/* Создаем пост и отдаем при создании */
export function createPost(content: string, author: string): Post {
  const newPost: Post = {
    id: Date.now().toString(),
    content,
    author,
    createdAt: new Date().toISOString(),
  };
  posts.push(newPost);
  return newPost;
}
/* Удаляем пост по id и проверяем получилось или нет */
export function deletePost(id: string): boolean {
  const index = posts.findIndex((p) => p.id === id); // ищем индекс элемента массива
  if (index === -1) return false; // если нету, то индекс равен -1
  posts.splice(index, 1); // обрезаем массив по индексу элемента на 1 элемент
  return true;
}

/* =========== Комментарии ========== */
export function getCommentsByPostId(postID: string): Comment[] | null {
  return comments.filter((c) => c.postId === postID);
}
