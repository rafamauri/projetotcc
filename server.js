require("dotenv").config();
const express = require("express");
const route = require("./src/routes/routes");
const path = require("path");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const database = require("./src/database/database");
const exp = require("constants");
const dashboardRoute = require("./src/routes/dashboardRoute");
const adminRoute = require("./src/routes/adminRoute");
const eventosRoute = require("./src/routes/eventosRoute");
const contatoRoute = require("./src/routes/contatoRoute");
const { log } = require("console");
const logoutAdminRoute = require("./src/routes/logoutAdminRoute");
const pagesRoute = require("./src/routes/pagesRoute");

const app = express();
const port = process.env.PORTSERVER || 3000;

app.set("view engine", "ejs");
app.set("views", "./src/views");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "./public")));

app.use(cookieParser());
app.use(
  session({
    name: "session",
    secret: process.env.SECRET,
    resave: true,
    cookie: {
      maxAge: 60 * 60 * 1000,
    },
    saveUninitialized: true,
  })
);

app.use("/", route);
app.use("/admin", adminRoute);
app.use("/dashboard", dashboardRoute);
app.use("/eventos", eventosRoute);
app.use("/contato", contatoRoute);
app.use("/logoutAdmin", logoutAdminRoute);

app.use("/pages", pagesRoute);

app.listen(port, async () => {
  const [result] = await database.query("SELECT 1");
  if (result) {
    console.log(`http://localhost:${port}`);
  }
});

// database.connect((error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Conectado no banco de dados!");
//     app.listen(port, () => {
//       console.log(`http://localhost:${port}`);
//     });
//   }
// });

// const express = require("express");
// const route = require("./src/routes/route");
// const port = 5000;

// const app = express();

// app.set("view engine", "ejs");
// app.set("views", "./src/views");

// app.use(route);

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// app.listen(port, () => {
//   console.log(`http://localhost:${port}`);
// });
