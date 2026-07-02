import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const escapeHtml = (text: unknown = "") =>
  String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
    .replace(/\n/g, "<br>");

const questions = [
  "Have you ever felt deeply connected to someone before meeting them?",
  "Tell us about that experience.",
  "Have recurring dreams ever introduced someone you've never met?",
  "Do you believe destiny influences human relationships?",
  "Have you experienced an instant feeling of familiarity with someone?",
  "Describe the most meaningful coincidence in your life.",
  "Has intuition ever proven to be more accurate than logic?",
  "Have you ever experienced synchronicities repeatedly over a short period?",
  "What event completely changed the direction of your life?",
  "Did you understand its meaning immediately, or only later?",
  "Have you ever felt guided by signs that others couldn't explain?",
  "Describe the strongest emotional connection you've ever experienced.",
  "Have you ever felt that time stood still during a significant moment?",
  "Is there a person whose presence permanently changed who you are?",
  "Have you ever loved someone you couldn't explain?",
  "What role do you believe fate plays in your personal story?",
  "If you could relive one moment in your life, which would it be?",
  "What truth about your journey has taken the longest to accept?",
  "Why do you believe your story deserves to be documented?",
  'If your story became part of "Before Her Name Existed," what message would you want audiences around the world to remember?',
];

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (!body.fullName?.trim()) {
      return NextResponse.json(
        { success: false, message: "Full name is required." },
        { status: 400 }
      );
    }

    if (!body.email?.trim()) {
      return NextResponse.json(
        { success: false, message: "Email is required." },
        { status: 400 }
      );
    }

    const EMAIL_USER = process.env.EMAIL_USER;
    const EMAIL_PASS = process.env.EMAIL_PASS;
    const EMAIL_TO = process.env.EMAIL_TO;

    if (!EMAIL_USER || !EMAIL_PASS || !EMAIL_TO) {
      console.error("Missing EMAIL_USER / EMAIL_PASS / EMAIL_TO");

      return NextResponse.json(
        {
          success: false,
          message: "Server email configuration missing.",
        },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    });

    const responses = questions
      .map((question, index) => {
        const answer = body[`q${index + 1}`] || "Not answered";

        return `
          <div style="margin-bottom:20px;padding:15px;border:1px solid #ddd;border-radius:8px;">
            <h3 style="margin:0;color:#b45309;">
              Question ${index + 1}
            </h3>

            <p><strong>${escapeHtml(question)}</strong></p>

            <p>${escapeHtml(answer)}</p>
          </div>
        `;
      })
      .join("");

    await transporter.sendMail({
      from: `"Before Her Name Existed" <${EMAIL_USER}>`,
      to: EMAIL_TO,
      replyTo: body.email,
      subject: `New Documentary Story - ${body.fullName}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:800px;margin:auto;">
          <h1 style="color:#b45309;">
            Before Her Name Existed
          </h1>

          <p>A new documentary submission has been received.</p>

          <hr>

          <table style="width:100%;border-collapse:collapse;">
            <tr>
              <td><strong>Name</strong></td>
              <td>${escapeHtml(body.fullName)}</td>
            </tr>

            <tr>
              <td><strong>Email</strong></td>
              <td>${escapeHtml(body.email)}</td>
            </tr>

            <tr>
              <td><strong>Age</strong></td>
              <td>${escapeHtml(body.age)}</td>
            </tr>

            <tr>
              <td><strong>Country</strong></td>
              <td>${escapeHtml(body.country)}</td>
            </tr>
          </table>

          <hr>

          <h2>Responses</h2>

          ${responses}

          <hr>

          <p>
            <strong>Consent:</strong>
            ${
              body.consent
                ? "✅ Participant consented."
                : "❌ No consent."
            }
          </p>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Story submitted successfully.",
    });
  } catch (error: any) {
    console.error("POST /api/contact");
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: error?.code,
        message: error?.message,
        stack:
          process.env.NODE_ENV === "development"
            ? error?.stack
            : undefined,
      },
      { status: 500 }
    );
  }
}