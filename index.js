require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require("cors");

app.use(bodyParser.json());

const corsOptions = {
  origin: "https://www.sunnychildcare.com",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
//route
app.get("/", (req, res) => {
  res.send("Hello, this is my server!");
});

//
app.post("/send-email", (req, res) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.EMAIL_USER,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken: process.env.REFRESH_TOKEN,
    },
  });

  let mailOptions = {
    from: process.env.EMAIL_USER,
    to: "darecallad00@gmail.com",
    subject: `Message from ${req.body.name}`,
    text: `Name: ${req.body.name}\nEmail: ${req.body.email}\nPhone: ${req.body.phoneNumber}\nMethod: ${req.body.contactMethod}\nStart Date: ${req.body.startDate}\nMessage: ${req.body.message}`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.status(500).send(`Error while sending email: ${error.message}`);
    } else {
      res.send("Email sent.");
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
