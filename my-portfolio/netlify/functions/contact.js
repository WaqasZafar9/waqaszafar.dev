import nodemailer from "nodemailer";

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
    const { name, email, message } = JSON.parse(event.body || "{}");

    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "All fields are required." }),
      };
    }

    const hasPlaceholderPass =
      typeof process.env.SMTP_PASS === "string" &&
      process.env.SMTP_PASS.toLowerCase().includes("app-password");

    if (!process.env.SMTP_USER || !process.env.SMTP_PASS || !process.env.CONTACT_RECEIVER_EMAIL || hasPlaceholderPass) {
      return {
        statusCode: 500,
        body: JSON.stringify({ message: "Email server is not configured yet." }),
      };
    }

    const transporter = nodemailer.createTransport({
      service: process.env.SMTP_SERVICE || "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact Form" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECEIVER_EMAIL,
      replyTo: email,
      subject: `New portfolio message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br/>")}</p>
      `,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Message sent successfully." }),
    };
  } catch (error) {
    console.error("Netlify contact function error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Failed to send message." }),
    };
  }
};
