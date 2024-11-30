import Agenda from "agenda";
import sendMail from "./mailer.js";

const agenda = new Agenda({
  db: { address: process.env.DB_CONNECTION_STRING },
});

agenda.define("send-email", async (job) => {
  const { email, subject, message } = job.attrs.data;
  await sendMail({
    to: email,
    subject: subject,
    text: message,
    html: `<h1>Code Zone Reminder</h1>
           <h3>${message}</h3>
           <a href="#">To Problem</a>
        `,
  });
  console.log(`Email sent to ${email}`);
});

agenda.on("complete", async (job) => {
  await job.remove();
  console.log(`Job ${job.attrs._id} removed from the database.`);
});
agenda.start();
export default agenda;
