const connectToMongo = require("./db");
const express = require("express");
const cors = require("cors");

const port = 4000;
const app = express();

connectToMongo();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.use("/api/auth", require("./routes/auth"));
app.use("/api/policy", require("./routes/policyRoutes"));

app.listen(port, () => {
    console.log(`app listening on https://localhost/${port}`);
});
