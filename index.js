const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())
app.use(express.json())

const users = [
    {
        id: 1,
        username: "Octocat",
        name: "The Octocat",
        repoCount: 8,
        location: "San Francisco"
    },
    {
        id: 2,
        username: "Octocat",
        name: "The Octocat",
        repoCount: 8,
        location: "San Francisco"
    },
    {
        id: 3,
        username: "Octocat",
        name: "The Octocat",
        repoCount: 8,
        location: "San Francisco"
    },
    {
        id: 4,
        username: "Octocat",
        name: "The Octocat",
        repoCount: 8,
        location: "San Francisco"
    },
    {
        id: 5,
        username: "Octocat",
        name: "The Octocat",
        repoCount: 8,
        location: "San Francisco"
    }
]

app.get("/users", (req,res) => {
    res.json({users})
})

app.get("/user/:id", (req,res) => {
    
    let userID = parseInt(req.params.id)
    let user = users.find((user) => user.id == userID)

    if(user) {
        res.json(user)
    } else {
        res.send(404).json({ message: "User not Found"})
    }
})

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})