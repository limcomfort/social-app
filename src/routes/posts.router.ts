import { Router } from "express"; // Маршрутизатор express
import {
  getAllPosts,
  getPost,
  createNewPost,
  removePost,
  getPostComments,
} from "../controllers/posts.controller";

const router = Router();

router.get("/", getAllPosts); // GET /posts
router.post("/", createNewPost); // POST posts/
router.get("/:id", getPost); //GET posts/12
router.delete("/:id", removePost); //DELETE posts/11
router.get("/:id/comments", getPostComments); //get posts/1/comments

export default router;
