import { Resend } from "resend";

// Initialize Resend with the API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const { from, subject, message } = await req.json();

  // Log incoming request data for debugging
  console.log("Received email data:", { from, subject, message });

  try {
    // Sending the email through Resend
    const emailResponse = await resend.emails.send({
      from, // Sender's email from the form
      to: process.env.CONTACT_RECEIVER_EMAIL, // Receiver's email
      subject,
      html: `<p>${message}</p>`, // Email body
    });

    // Log the response from Resend
    console.log("Email sent response:", emailResponse);

    // Return success response
    return new Response(JSON.stringify({ message: "Email sent successfully!" }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error sending email:", error);

    // Handle validation error (e.g., domain not verified)
    if (error.name === "validation_error") {
      return new Response(
        JSON.stringify({ error: "The email domain is not verified. Please verify it in Resend." }),
        { status: 403 }
      );
    }

    // Send failure response
    return new Response(
      JSON.stringify({ error: "Failed to send email. Please try again later." }),
      { status: 500 }
    );
  }
}

export async function OPTIONS(req) {
  return new Response(null, {
    headers: { Allow: "POST" },
    status: 405,
  });
}
