// app/api/sendEmail/route.ts
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true", // true for SSL, false for TLS
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${process.env.SMTP_USER}>`, // Sender's name and email
      to: process.env.SMTP_USER, // Your Hostinger email
      subject,
      text: message,
      html: `<p><strong>From:</strong> ${name} (${email})</p>
             <p><strong>Subject:</strong> ${subject}</p>
             <p>${message}</p>`,
    });

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 }
    );
  }
}

//import { NextApiRequest, NextApiResponse } from "next";
// import nodemailer from "nodemailer";

// const sendEmail = async (req: NextApiRequest, res: NextApiResponse) => {
//   if (req.method !== "POST") {
//     return res.status(405).json({ message: "Method Not Allowed" });
//   }

//   const { name, email, subject, message } = req.body;

//   if (!name || !email || !subject || !message) {
//     return res.status(400).json({ message: "All fields are required" });
//   }

//   const transporter = nodemailer.createTransport({
//     host: process.env.SMTP_HOST,
//     port: Number(process.env.SMTP_PORT),
//     secure: process.env.SMTP_SECURE === "true", // true for SSL, false for TLS
//     auth: {
//       user: process.env.SMTP_USER,
//       pass: process.env.SMTP_PASS,
//     },
//   });

//   try {
//     await transporter.sendMail({
//       from: `"${name}" <${email}>`, // Sender's name and email
//       to: process.env.SMTP_USER, // Your Hostinger email
//       subject,
//       text: message,
//       html: `<p><strong>From:</strong> ${name} (${email})</p>
//              <p><strong>Subject:</strong> ${subject}</p>
//              <p>${message}</p>`,
//     });

//     res.status(200).json({ message: "Email sent successfully" });
//   } catch (error) {
//     console.error("Error sending email:", error);
//     res.status(500).json({ message: "Failed to send email" });
//   }
// };

// export default sendEmail;
