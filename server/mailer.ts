import nodemailer from "nodemailer";
import type { InsertMessage } from "@shared/schema";

const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = Number(process.env.SMTP_PORT ?? 587);
const SMTP_SECURE = (process.env.SMTP_SECURE ?? "false").toLowerCase() === "true";
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? "nhlayisekobvuma7@gmail.com";
const CONTACT_FROM_EMAIL = process.env.CONTACT_FROM_EMAIL ?? SMTP_USER;

function assertMailerConfig() {
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !CONTACT_FROM_EMAIL) {
    throw new Error(
      "Email is not configured. Set SMTP_HOST, SMTP_USER, SMTP_PASS, and CONTACT_FROM_EMAIL in .env.",
    );
  }
}

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  secure: SMTP_SECURE,
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
});

export async function sendContactNotification(message: InsertMessage): Promise<void> {
  assertMailerConfig();

  const safeSubject = (message.subject?.trim() || "New message from portfolio website").replace(/[\r\n]+/g, " ");
  const safeName = message.name.replace(/[\r\n]+/g, " ").trim();
  const safeEmail = message.email.replace(/[\r\n]+/g, " ").trim();
  const safeMessage = message.message.trim();

  await transporter.sendMail({
    from: `"Portfolio Contact Form" <${CONTACT_FROM_EMAIL}>`,
    to: CONTACT_TO_EMAIL,
    replyTo: safeEmail,
    subject: `[Portfolio Contact] ${safeSubject}`,
    text: [
      "You received a new message from your portfolio contact form.",
      "",
      `Name: ${safeName}`,
      `Email: ${safeEmail}`,
      `Subject: ${safeSubject}`,
      "",
      "Message:",
      safeMessage,
    ].join("\n"),
  });
}
