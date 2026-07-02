import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const escapeHtml = (text: string = "") =>
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

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Validate required fields
    if (!body.fullName || !body.email) {
      return NextResponse.json(
        {
          success: false,
          message: "Name and email are required.",
        },
        { status: 400 }
      );
    }

    // Validate environment variables
    if (
      !process.env.EMAIL_USER ||
      !process.env.EMAIL_PASS ||
      !process.env.EMAIL_TO
    ) {
      console.error("Missing email environment variables.");

      return NextResponse.json(
        {
          success: false,
          message: "Email server is not configured.",
        },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Verify SMTP connection
    await transporter.verify();

    const responses = questions
      .map((question, index) => {
        const answer = body[`q${index + 1}`] || "Not answered";

        return `
          <div style="margin-bottom:24px;padding:16px;border:1px solid #ddd;border-radius:8px;">
            <h4 style="margin:0 0 10px;color:#b45309;">
              Question ${index + 1}
            </h4>

            <p style="font-weight:bold;margin-bottom:8px;">
              ${escapeHtml(question)}
            </p>

            <p style="margin:0;">
              ${escapeHtml(answer)}
            </p>
          </div>
        `;
      })
      .join("");

    await transporter.sendMail({
      from: `"Before Her Name Existed" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      replyTo: body.email,
      subject: `New Documentary Story - ${body.fullName}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:800px;margin:auto;">
          <h1 style="color:#b45309;">
            Before Her Name Existed
          </h1>

          <p>A new participant has submitted a story.</p>

          <hr>

          <h2>Participant Information</h2>

          <table cellpadding="8" cellspacing="0" style="border-collapse:collapse;width:100%;">
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

          <br>
          <hr>

          <h2>Questionnaire Responses</h2>

          ${responses}

          <hr>

          <h3>Consent</h3>

          <p>
            ${
              body.consent
                ? "✅ Participant has provided consent."
                : "❌ Participant did not provide consent."
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
    console.error("========== EMAIL ERROR ==========");
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: error?.message || "Failed to send email.",
      },
      { status: 500 }
    );
  }
}