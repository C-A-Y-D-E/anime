const nodemailer = require("nodemailer");

module.exports = class Email {
  constructor(user, url) {
    this.to = user.email;
    this.firstName = user.name.split(" ")[0];
    this.from = process.env.EMAIL_FROM;
    this.url = url;
  }

  createTransport() {
    if (process.env.NODE_ENV === "production") {
      return nodemailer.createTransport({
        service: "Mailgun",
        auth: {
          user: process.env.MAILGUN_USERNAME,
          pass: process.env.MAILGUN_PASSWORD,
        },
      });
    }
    return nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
  }

  async send(subject, message) {
    const messageOpt = {
      from: this.from,
      to: this.to,
      subject,
      text: message,
    };
    await this.createTransport().sendMail(messageOpt);
  }

  async sendWelcome() {
    await this.send(
      "Welcome To the badass anime site",
      `Now you can watch any animes and save to your bookmark visit here for your profile ${this.url}`
    );
  }

  async sendResetPassword() {
    await this.send(
      "You Password Reset Link will Expire in 30min",
      `Forgot your Password? click this link ${this.url}, if not then ignore this message`
    );
  }
};

// const sendEmail = async (options) => {
//   let transport =

//   const messageOpt = {
//     from: "Cayde <notyetfamousprk@gmail.com>",
//     to: options.email,
//     subject: options.subject,
//     text: options.message,
//   };
//   await transport.sendMail(messageOpt);
// };

// module.exports = sendEmail;
