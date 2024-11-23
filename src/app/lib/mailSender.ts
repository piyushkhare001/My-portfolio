import nodemailer from "nodemailer";

interface MailOptions {
  email: string;
  title: string;
  body: string;
}

const mailSender = async ({ email, title, body }: MailOptions): Promise<unknown> => {
  try {
    const transporter = nodemailer.createTransport({
      host: `smtp.gmail.com`,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
      secure: false,
    });

    const info = await transporter.sendMail({
      from: `<${process.env.GMAIL_USER}>`, // sender address
      to: email, // list of receivers
      subject: title, // Subject line
      html: body, // html body
    });

    return {info,sent:true};
  } catch (e) {
   console.log("getting error")
  }
};

export default mailSender;
