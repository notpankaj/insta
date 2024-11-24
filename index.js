require("dotenv").config();
const express = require("express");

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 5000;

app.get("/", async (req, res) => {
    try {
      res.send("hey pankaj")
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
