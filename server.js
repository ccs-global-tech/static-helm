/* Helm360 Static Server */

const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const cors = require('cors');

app.use(cors());
app.use("/public", express.static("public"));

app.use("/review", (req, res) => {
    res.send("No review file mounted.");
});

app.listen(port, ()=>{
    console.log(`Server running at http://localhost:${port}/`);
});