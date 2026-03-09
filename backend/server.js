import express from "express";
import { db } from "./database.js";

const app = express();
const PORT = 3002;


app.use(express.json());


  app.get("/getTodos", async (req, res) => {
  try {
    const querySnapshot = await getDocs(collection(db, "todos"));

    const todos = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    res.status(200).json(todos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Kunde inte hämta todos" });
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on: http://localhost:${PORT}`);
});