const express = require("express");
const cors = require("cors");
const { getRecommendations } = require("./adaptiveEngine");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/recommend", (req, res) => {
  const { level, interest } = req.body;
  const recommendations = getRecommendations(level, interest);
  res.json({ recommendations });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
