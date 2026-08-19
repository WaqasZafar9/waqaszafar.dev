import "dotenv/config";
import express from "express";
import cors from "cors";
import { sendContactEmail } from "./shared/contactMailer.js";

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post("/api/contact", async (req, res) => {
  const { statusCode, message } = await sendContactEmail(req.body);
  return res.status(statusCode).json({ message });
});

app.get("/api/health", (_req, res) => {
  res.status(200).json({ status: "ok" });
});

app.listen(port, () => {
  console.log(`Contact API is running on port ${port}`);
});
