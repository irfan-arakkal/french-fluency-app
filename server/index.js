const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
const users = [];
app.get("/api/hello", (req, res) => {
  res.json({ message: "Bonjour from the server" });
});

app.post("/api/signup", (req, res) => {
  const { nickname, email, level } = req.body;
  if (!nickname || !email || !level) {
  return res.status(400).json({ error: "All fields are required" });
}

const user = { id: users.length + 1, nickname, email, level };
  users.push(user);

  res.status(201).json(user);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
