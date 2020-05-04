const express = require('express');
const app = express();
const userpage = require('./routes/users');



//homepage route
app.get("/", (req, res) => {
    res.send("<div><h1>Welcome Aayush</h1></div>");
});

//using middleware to goto users page
app.use("/users", userpage);

//listening on port 3k
app.listen(3000, () => {
    console.log("The server has started on port 3000 .....")
});