import { posts, Post } from "./data.js";

export function getPosts(): Post[] {
    return posts;
}

export function getPostById(id: string): Post | undefined {
    return posts.find(p => p.id === id);
}

export function createPost(content: string, author: string): Post {
    const newPost: Post = {
        id : Date.now().toString(),
        content, author,
        createdAt: new Date().toISOString()
    };
    posts.push(newPost);
    return newPost;
}

export function deletePost(id: string): boolean {
    const index = posts.findIndex(p => p.id === id);
    if (index === -1) return false;
    posts.splice(index, 1);
    return true;
}