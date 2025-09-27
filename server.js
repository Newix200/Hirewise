const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

let interviewTemplates = [
  {
    id: 1,
    title: "Frontend Developer",
    questions: [
      "What is React?",
      "Explain virtual DOM.",
      "What are React hooks?",
    ],
  },
  {
    id: 2,
    title: "Backend Developer",
    questions: [
      "What is REST API?",
      "Difference between SQL and NoSQL?",
      "Explain middleware in Express.",
    ],
  },
];
app.get("/", (req, res) => {
  res.send("API is running...");
});

app.get("/api/templates", (req, res) => {
  res.json(interviewTemplates);
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
