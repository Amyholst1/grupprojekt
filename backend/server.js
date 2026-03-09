import express from "express";
import { db } from "./database.js";

console.log("firestore connected")

const app = express()
const PORT = 3002

app.get('/get', (req, res) => {
    res.send("Hej grupp 2")
} )

app.delete("/todos/:id", async (req, res) => {
    try {
        const todoID = req.params.id

        await db.collection("")
    } catch {

    }
})

app.listen(PORT, () => {
    console.log(`Server is running on: http://${PORT}`)

})