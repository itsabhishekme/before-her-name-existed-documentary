import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: "New Documentary Story Submission",
      html: `
        <h2>Before Her Name Existed</h2>

        <h3>Participant Information</h3>

        <p><strong>Name:</strong> ${body.fullName}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Age:</strong> ${body.age}</p>
        <p><strong>Country:</strong> ${body.country}</p>

        <hr>

        <h3>Responses</h3>

        <p><strong>Q1</strong><br>${body.q1}</p>
        <p><strong>Q2</strong><br>${body.q2}</p>
        <p><strong>Q3</strong><br>${body.q3}</p>
        <p><strong>Q4</strong><br>${body.q4}</p>
        <p><strong>Q5</strong><br>${body.q5}</p>
        <p><strong>Q6</strong><br>${body.q6}</p>
        <p><strong>Q7</strong><br>${body.q7}</p>

        <hr>

        <p><strong>Consent:</strong> ${
          body.consent ? "Yes" : "No"
        }</p>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Story submitted successfully.",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to send email.",
      },
      { status: 500 }
    );
  }
}