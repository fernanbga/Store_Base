const express = require("express");
const app = express();
const path = require("path");
require('dotenv').config();

const productRoutes = require('./routes/productRoutes');
const manufacturerRoutes = require('./routes/manufacturerRoutes');

const morgan = require("morgan");
const cors = require("cors");

const port = process.env.PORT || 3000;

app.use(cors({
  origin: [
    "http://localhost:5173"
    // Add your deployed frontend URL(s) here
  ],
  credentials: true
}));

app.use(morgan("dev"));
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.use("/api/products", productRoutes);
app.use("/api/manufacturers", manufacturerRoutes);

app.use(express.static(path.join(__dirname, "client", "dist")));

app.get(/^\/(?!api).*/, (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});