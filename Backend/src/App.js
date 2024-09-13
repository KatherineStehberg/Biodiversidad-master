const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path"); 
const authRouter = require("./routes/auth");
const pageRouter = require("./routes/pages"); 
const projectRouter = require("./routes/projects");
const userRouter = require("./routes/users"); 
const serviceRouter = require("./routes/services");
const { constants } = require("buffer");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.user(bodyParser.json());
app.use(bodyParser.urlenconded({ extended: true }));

app.user("/api/auto", authRouter);
app.user("/api/pages", pageRouter);
app.user("/api/products", producto)