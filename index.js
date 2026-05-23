const express = require("express")
const app = express()
const port = 8080

app.get("/", (req, res) => {
    res.render("index.ejs")
});

app.get("/show", (req, res) => {
    let chats = [req.query];
    res.render("show.ejs", {chats});
});
app.listen(port, () => {
    console.log("app is listening your port", port);
});