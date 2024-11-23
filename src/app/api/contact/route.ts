import connectToDatabase from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";
import ContactUsModel from "@/app/model/contactUs";
import mailSender from "@/app/lib/mailSender";

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    // Validate input fields
    if (!name || !email || !message || !subject) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // Connect to database and save contact request
    await connectToDatabase();
    const newRequest = await ContactUsModel.create({ name, email, subject, message });
    console.log("New request saved: ", newRequest);

    // Send emails
    const mailSentToUser = await mailSender({
      email,
      title: "Message sent to Piyush",
      body: `Hi ${name},\n\nThank you for reaching out! Your message has been received. Piyush will get back to you soon.\n\nBest regards,\nPiyush`,
    });

    const mailSentToSupportTeam = await mailSender({
      email: "piyushkhare671@gmail.com",
      title: `Contact request from ${name} via Portfolio`,
      body: `You received a request from ${name}. Email: ${email}. Subject: ${subject}. Message: ${message}`,
    });

    // Check if both emails were sent
    if (mailSentToUser && mailSentToSupportTeam) {
      return NextResponse.json(
        {
          success: true,
          message: "Request has been sent successfully.",
        },
        { status: 200 } // Use the correct status for success
      );
    }

    // If emails failed
    return NextResponse.json(
      {
        success: false,
        message: "Failed to send emails.",
      },
      { status: 500 }
    );

  } catch (error) {
    console.error("Error: ", error);
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong.",
      },
      { status: 500 }
    );
  }
}
