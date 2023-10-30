const express = require("express");
const connectToMongo = require("./db");

const cors = require("cors");
const app = express();
const port = 4000;

connectToMongo();

app.listen(port, () => {
    console.log(`app listening on https://localhost/${port}`);
});

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.use("/api/auth", require("./auth"));
app.use("/api/policy", require("./routes/policyRoutes"));
app.use("/api/orders", require("./routes/ordersRoutes"));