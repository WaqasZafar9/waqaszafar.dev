import { sendContactEmail } from "../../shared/contactMailer.js";

export const handler = async (event) => {
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 204,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
      },
      body: "",
    };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "Method not allowed." }),
    };
  }

  try {
    const payload = JSON.parse(event.body || "{}");
    const { statusCode, message } = await sendContactEmail(payload);
    return {
      statusCode,
      body: JSON.stringify({ message }),
    };
  } catch (error) {
    console.error("Netlify contact function error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Failed to send message." }),
    };
  }
};
