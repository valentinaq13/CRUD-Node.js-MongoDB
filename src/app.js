import express from "express";
import exphbs from "express-handlebars";
import indexRoutes from "./routes/index.routes";
import path from "path"

const app = express();

app.set("views", path.join(__direname + "/views"));

app.engine(".hbs", exphbs({
    layoutsDir: path.join(app.get("views"), "layouts"),
    defaultLayout: "main",
    extname: ".hbs",
}))

app.use(indexRoutes)

export default app