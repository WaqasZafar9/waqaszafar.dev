import nodemailer from "nodemailer";

/**
 * Validates the contact-form payload and, if configured, sends it via SMTP.
 * Shared between the local Express server (server.js) and the Netlify
 * function (netlify/functions/contact.js) so both stay in sync.
 *
 * @param {{ name?: string, email?: string, message?: string }} payload
 * @returns {Promise<{ statusCode: number, message: string }>}
 */
export async function sendContactEmail({ name, email, message } = {}) {
  if (!name || !email || !message) {
    return { statusCode: 400, message: "All fields are required." };
  }

  const hasPlaceholderPass =
    typeof process.env.SMTP_PASS === "string" &&
    process.env.SMTP_PASS.toLowerCase().includes("app-password");

  if (
    !process.env.SMTP_USER ||
    !process.env.SMTP_PASS ||
    !process.env.CONTACT_RECEIVER_EMAIL ||
    hasPlaceholderPass
  ) {
    return { statusCode: 500, message: "Email server is not configured yet." };
  }

  try {
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

    return { statusCode: 200, message: "Message sent successfully." };
  } catch (error) {
    console.error("Contact mailer error:", error);
    return { statusCode: 500, message: "Failed to send message." };
  }
}
