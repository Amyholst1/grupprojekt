import express from "express";
import admin from "firebase-admin";
import cors from "cors";
import serviceAccount from "./serviceAccountKey.json" with { type: "json" };

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

const app = express();
app.use(cors());
app.use(express.json());
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.post("/addTodo", async (req, res) => {
  try {
    const { title, completed } = req.body;

    // Validation
    if (!title) {
      return res.status(400).send("Title missing");
    }

    const newTodo = {
      title: title,
      completed: completed ?? false,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    };

    const docRef = await db.collection("Todos").add(newTodo);

    res.status(200).json({
      id: docRef.id,
      title: title,
      completed: completed ?? false,
    });
  } catch (error) {
    console.log("Error creating Todo:", error);
    res.status(500).send("Server error creating Todo");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on: http://localhost:${PORT}`);
});
