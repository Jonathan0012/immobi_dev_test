const express = require("express");
const app = express();
const cors = require("cors");
const index = require("./routes/index");
const port = process.env.PORT || 4000;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(index);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
