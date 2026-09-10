export interface Post {
  id: string;
  content?: string;
  author: string;
  createdAt: string;
}

export const posts: Post[] = [
  {
    id: "1",
    content: "Успех — это сумма маленьких усилий, повторяемых изо дня в день.",
    author: "Р. Коллинз",
    createdAt: new Date().toISOString(),
  },
  {
    id: "2",
    content: "Делай, что можешь, с тем, что имеешь, там, где ты есть.",
    author: "Т. Рузвельт",
    createdAt: new Date().toISOString(),
  },
  {
    id: "3",
    content: "Не бойся делать медленно, бойся стоять на месте.",
    author: "Китайская пословица",
    createdAt: new Date().toISOString(),
  },
];

export interface Сomment {
  id: string;
  postId: string;
  content: string;
  author: string;
  createdAt: string;
}

export const comments: Сomment[] = [
  {
    id: "1",
    postId: "1",
    content: "Танцуй пантера!",
    author: "K. Ronaldo",
    createdAt: new Date().toISOString(),
  },
  {
    id: "2",
    postId: "1",
    content: "Коч братан!",
    author: "L. Messi",
    createdAt: new Date().toISOString(),
  },
  {
    id: "3",
    postId: "1",
    content: "Да ты че базара нет!",
    author: "L. Yamal",
    createdAt: new Date().toISOString(),
  },
];

export interface User {
  id: string;
  username: string;
  fullName: string;
  biography: string;
  avatarUrl?: URL | null;
  bannerUrl?: URL | null;
  passwordHash: string;
  createdAt: string;
}

export const users: User[] = [
  {
    id: "1",
    username: "limcomf",
    fullName: " Ребров Кирилл",
    biography: "Студен в техникуме",
    passwordHash: "qwerty",
    createdAt: new Date().toISOString(),
  },
  {
    id: "1",
    username: "ronaldo",
    fullName: "Криштиано Роналдо",
    biography: "Знаменитый на весь мир футболист",
    passwordHash: "qwerty123",
    createdAt: new Date().toISOString(),
  },
  {
    id: "1",
    username: "messi",
    fullName: "Лионель Месси",
    biography: "Второй по золотым мячам футболист",
    passwordHash: "qwerty456",
    createdAt: new Date().toISOString(),
  },
];
