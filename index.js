const express = require("express");
const bodyParser = require("body-parser");

const userRoutes = require("./routes/user.routes");

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use("/", userRoutes);

app.listen(port, () => {
  console.log(`Server started at port http://localhost:${port}`);
});
