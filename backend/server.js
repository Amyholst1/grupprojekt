import express from "express";
import { db } from "./database.js";

const app = express();
const PORT = 3002;


app.use(express.json());


app.get("/getTodos", async (req, res) => {
    try {
        const todoCollection = db.collection("Todos")
        const snapshot = await todoCollection.get()

        if(snapshot.empty) {
            return res.status(400).json([])
        }

        let todos = []

        snapshot.forEach(todo => {
            todos.push({
                id: todo.id,
                ...todo.data(),
            })
        })

        res.status(200).json(todos)

    } catch (error) {
        console.log("Fel i hämtning av Todos")
        res.status(500).json({ error: "Fel i hämtning av Todos" })
    }
})


app.listen(PORT, () => {
  console.log(`Server is running on: http://localhost:${PORT}`);
});