const express = require("express");
const exphbs = require("express-handlebars");
const methodOverride = require("method-override");
const path = require("path");
const morgan = require("morgan");
const app = express();
const port = 5000;

const route = require("./routes");

const db = require("./config/db");

//Connect to DB
db.connect();

// HTTP logger
app.use(morgan("combined"));

//Template Engine
app.engine(
  ".hbs",
  exphbs({
    extname: ".hbs",
  })
);
app.set("view engine", ".hbs");
//static file
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("views", path.join(__dirname, "resources", "views"));

// override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

//route init
route(app);
app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
