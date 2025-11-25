import express from "express";
import dotenv from "dotenv";
import { webhookRouter } from "./controllers/webhook.controller";

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("GitHub App webhook listener is running!");
});

app.use("/api/github", webhookRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});