import express from "express";
import cors from "cors";
import product_route from "./routes/product_route.js";

const app = express()

app.use(cors());
app.use(express.json());
app.use(product_route);

app.listen(4000,() => console.log("Server running on port 4000"))