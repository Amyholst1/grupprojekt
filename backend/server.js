import express from "express";
import { db } from "./database.js";
import { Timestamp } from "firebase-admin/firestore";
import cors from "cors";

const app = express();
app.use(cors())
const PORT = 3002;

app.use(cors());
app.use(express.json());

app.get("/getTodos", async (req, res) => {
  try {
    const todoCollection = db.collection("Todos");
    const snapshot = await todoCollection.get();

    if (snapshot.empty) {
      return res.status(400).json([]);
    }

    let todos = [];

    snapshot.forEach((todo) => {
      todos.push({
        id: todo.id,
        ...todo.data(),
      });
    });

    res.status(200).json(todos);
  } catch (error) {
    console.log("Fel i hämtning av Todos");
    res.status(500).json({ error: "Fel i hämtning av Todos" });
  }
});

app.delete("/deleteTodo/:id", async (req, res) => {
  try {
    const todoID = req.params.id;

    await db.collection("Todos").doc(todoID).delete();

    res.status(200).send("Borttagen");
  } catch (error) {
    console.log("Fel vid borttagning av Todo i servern", error);
    res.status(500).send("Något gick fel i servern med Delete");
  }
});

app.post("/addTodo", async (req, res) => {
  try {
    const { title, completed, date } = req.body;

    // Validation
    if (!title) {
      return res.status(400).send("Title missing");
    }

    const newTodo = {
      title: title,
      completed: completed ?? false,
      date: date,
      createdAt: Timestamp.now(),
    };

    const docRef = await db.collection("Todos").add(newTodo);

    res.status(200).json({
      id: docRef.id,
      title: title,
      completed: completed ?? false,
    });
  } catch (error) {
    console.log("Del vid skapandet av Todo.", error);
    res.status(500).send(error.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on: http://localhost:${PORT}`);
});
