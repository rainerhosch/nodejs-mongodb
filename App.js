const express = require("express");
const expressLayouts = require("express-ejs-layouts");

const app = express();
const port = 3000;

// setup view engine (EJS)
app.set("view engine", "ejs");
app.use(expressLayouts);
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// Homepage
app.get();

app.listen(port, () => {
  console.log(`Mongo List Contact App | lisrening at http://localhost:${port}`);
});
