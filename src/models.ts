import { posts, Post, comments, Сomment } from "./data.js";

export function getPosts(): Post[] {
  return posts;
}
export function getPostById(id: string): Post | undefined {
  return posts.find((post) => post.id == id);
}
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
export function deletePost(id: string): boolean {
  const index = posts.findIndex((p) => p.id === id); // ищем индекс элемента масс2ива
  if (index === -1) return false;
  posts.splice(index, 1); //обрезаем массив по индексу элемента на 1 элемент
  return true;
}

export function getCommentsByPostId(postID: string): Сomment[] {
  return comments.filter((c) => c.postId === postID);
}
