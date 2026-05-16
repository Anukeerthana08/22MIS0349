const express = require("express");

const app = express();

app.use(express.json());

let users = [
    { id: 1, name: "Anu" }
];

app.get("/", (req, res) => {

    res.json({
        message: "Backend working!"
    });

});

app.get("/users", (req, res) => {

    res.json(users);

});

app.post("/users", (req, res) => {

    const newUser = req.body;

    users.push(newUser);

    res.status(201).json({
        message: "User added",
        users
    });

});

app.put("/users/:id", (req, res) => {

    const id = parseInt(req.params.id);

    users = users.map(user =>
        user.id === id
            ? { ...user, name: req.body.name }
            : user
    );

    res.json({
        message: "User updated",
        users
    });

});

app.delete("/users/:id", (req, res) => {

    const id = parseInt(req.params.id);

    users = users.filter(user => user.id !== id);

    res.json({
        message: "User deleted",
        users
    });

});

app.listen(3000, () => {

    console.log("Server running on port 3000");

});