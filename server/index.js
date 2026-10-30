const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());

app.get("/api/hello", (req, res) => {
  setTimeout(()=>{
  res.json({ message: "Bonjour from the server" });
  },2000);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
