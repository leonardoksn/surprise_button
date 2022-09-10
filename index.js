const express = require("express");
const app = express();
const port = 80;
app.listen(port, () => {console.log("App port " + port)});

app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
