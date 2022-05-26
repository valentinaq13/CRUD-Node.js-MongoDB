import express from "express";
import exphbs, { engine } from "express-handlebars";
import indexRoutes from "./routes/index.routes";
import path from "path";
import morgan from "morgan" // es un middleware, se ejecuta antes de llegar a las rutas.

const app = express();

app.set("views", path.join(__dirname + "/views"));

app.engine(".hbs", engine({
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    defaultLayout: "main",
    extname: ".hbs",
}));

app.set("view engine", ".hbs");

//middlewares
app.use(morgan("dev"))
app.use(express.urlencoded({ extended: false})); //para pasar el req.body del form a formato JSON.


//Routes
app.use(indexRoutes)


export default app