import { sendContactEmail } from "../shared/contactMailer.js";

// Vercel Serverless Function: POST /api/contact
// Mirrors netlify/functions/contact.js and server.js, both of which
// delegate to the shared mailer in shared/contactMailer.js.
export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { statusCode, message } = await sendContactEmail(req.body);
  return res.status(statusCode).json({ message });
}
