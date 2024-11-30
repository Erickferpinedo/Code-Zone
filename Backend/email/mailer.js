import nodemailer from "nodemailer";
import { google } from "googleapis";

// Get credentials from environment variables
const clientId = process.env.GMAIL_CLIENT_ID;
const clientSecret = process.env.GMAIL_CLIENT_SECRET;
const redirectUri = process.env.GMAIL_REDIRECT_URI || "https://developers.google.com/oauthplayground";
const refreshToken = process.env.GMAIL_REFRESH_TOKEN;
const senderEmail = "codezoneemail@gmail.com"; 

// Initialize OAuth2 client
const oAuth2Client = new google.auth.OAuth2(clientId, clientSecret, redirectUri);

// Set the refresh token
oAuth2Client.setCredentials({ refresh_token: refreshToken });

// Function to send email
async function sendMail({ to, subject, text, html }) {
  try {

    const accessToken = await oAuth2Client.getAccessToken();

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: senderEmail, 
        clientId: clientId,
        clientSecret: clientSecret,
        refreshToken: refreshToken,
        accessToken: accessToken.token,
      },
    });

    // Email options
    const mailOptions = {
      from: `Code Zone <${senderEmail}>`, 
      to: to, 
      subject: subject || "No Subject", 
      text: text || "", 
      html: html || "", 
    };

    // Send email
    const result = await transporter.sendMail(mailOptions);
    return result;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
}

export default sendMail;
