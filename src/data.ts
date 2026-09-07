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
