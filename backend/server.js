import express from 'express'

console.log("server.js körs ✅");

const app = express()
const PORT = 3000

app.get('/get', (req, res) => {
    res.send("Hej grupp 2")
} )

app.listen(PORT, () => {
    console.log(`Server is running on: http://${PORT}`)

})