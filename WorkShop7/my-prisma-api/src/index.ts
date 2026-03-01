import express from "express";
import { prisma } from "./lib/prisma";

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

app.get("/users/email/:email", async (req, res) => {
  const { email } = req.params;
  try {
    const user = await prisma.user.findUnique({
      where: { email: email }
    });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch user" });
  }
});

app.delete("/users/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await prisma.user.delete({
      where: { userid: id }
    });
    res.json(user);
  } catch (error) {
    res.status(404).json({ error: "User not found" });
  }
});

app.post("/posts", async (req, res) => {
  const { title, content, authorId } = req.body;
  try {
    const post = await prisma.post.create({
      data: {
        title,
        content,
        authorId
      }
    });
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ error: "Failed to create post" });
  }
});

app.get("/posts", async (req, res) => {
  try {
    const posts = await prisma.post.findMany({
      include: { author: true }
    });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch posts" });
  }
});

app.get("/posts/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const post = await prisma.post.findUnique({
      where: { postid: id }
    });
    res.json(post);
  } catch (error) {
    res.status(404).json({ error: "Post not found" });
  }
});

app.put("/posts/:id", async (req, res) => {
  const { id } = req.params;
  const { title, content, published } = req.body;
  try {
    const post = await prisma.post.update({
      where: { postid: id },
      data: { title, content, published }
    });
    res.json(post);
  } catch (error) {
    res.status(404).json({ error: "Post not found" });
  }
});

app.delete("/posts/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const post = await prisma.post.delete({
      where: { postid: id }
    });
    res.json(post);
  } catch (error) {
    res.status(404).json({ error: "Post not found" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});