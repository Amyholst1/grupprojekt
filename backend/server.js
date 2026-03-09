import express from "express";
import { db } from "./database.js";

console.log("firestore connected")

const app = express()
const PORT = 3002

app.get('/get', (req, res) => {
    res.send("Hej grupp 2")
} )

app.delete("/deletetodos/:id", async (req, res) => {
    try {
        const todoID = req.params.id

        await db.collection("todos").doc(todoID).delete()

        res.status(200).send("Borttagen")
    } catch (error) {
        console.log("Fel vid borttagning av Todo i servern", error)
        res.status(500).send("Något gick fel i servern med Delete")
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on: http://${PORT}`)

})