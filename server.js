const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const fs = require("fs")

app.listen(3000, () => {
  console.log("El servidor está inicializado en el puerto 3000");
});

app.set("view engine", "handlebars");

app.use("/assets", express.static(__dirname + "/assets"));
app.use("/css", express.static(__dirname + "/node_modules/bootstrap/dist/css"));
app.use(
  "/bootstrapJs",
  express.static(__dirname + "/node_modules/bootstrap/dist/js")
);
app.use("/jquery", express.static(__dirname + "/node_modules/jquery/dist"));
app.use(
  "/fontacss",
  express.static(__dirname + "/node_modules/font-awesome/css")
);

app.engine(
  "handlebars",
  exphbs.engine({
    layoutsDir: __dirname + "/views",
    partialsDir: __dirname + "/views/components/",
  })
);


app.get("/", (req, res) => {
  const productos = JSON.parse(fs.readFileSync(__dirname + "/assets/productos.json", "utf-8")).productos
  res.render("index", {layout: "index", productos: productos})
})
/*app.get("/", (req, res) => {
  res.render("Dashboard", {
    layout: "Dashboard",
    productos: [
        "banana",
        "cebollas",
        "lechuga",
        "papas",
        "pimenton",
        "tomate",
      ],
  });
});*/
