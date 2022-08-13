const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");

const userRoutes = require("./routes/user");
const adminRoutes = require("./routes/admin");

app.use(bodyParser.urlencoded());

app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use("/", userRoutes);
app.use((req, res, next) => {
  res
    .status(404)
    .sendFile(path.join(__dirname, "views", "error", "error.html"));
});

app.listen(3000, () => {
  console.log("Server is running!");
});
