const express = require("express");
const cors = require("cors");
const app = express();
require("./db/connection");
const port = process.env.PORT || 5000;
const { userRouter } = require("./models/user.routes");

app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
