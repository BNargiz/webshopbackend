const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 4000;
const productsRoute = require("./routers/productsRoute");

app.use(express.json());
app.use(cors());
app.use("/products", productsRoute);

app.listen(PORT, () => console.log("server is running"));
