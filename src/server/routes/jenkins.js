const express = require("express");

const router = express.Router();

const Nodejenkins = require("node-jenkins");
const nodemailer = require("nodemailer");
const fs = require("fs");
const handlebars = require("handlebars");

const njenkins = new Nodejenkins(
  process.env.JENKINS_USER_NAME,
  process.env.JENKINS_PASSWORD,
  process.env.JENKINS_URL
);

const jenkins = require("jenkins")({
  baseUrl: `http://${process.env.JENKINS_USER_NAME}:${
    process.env.JENKINS_PASSWORD
  }@${process.env.JENKINS_URL}`,
  crumbIssuer: true,
  promisify: true
});

router.post("/mysql-create-user", async (req, res, next) => {
  const info = await njenkins.info(`job/${process.env.MYSQL_CREATE_USER}`);
  const build = await njenkins.buildWithParams(
    `job/${process.env.MYSQL_CREATE_USER}`,
    {
      UserName: req.body.username,
      UserType: req.body.usertype,
      AccessType: req.body.accesstype,
      ServerName: req.body.servername,
      DatabaseNames: req.body.databasenames
    }
  );

  const nextbuildnumber = info.nextBuildNumber;
  const progress = await njenkins.progressiveText(
    `job/${process.env.MYSQL_CREATE_USER}`,
    nextbuildnumber,
    [true, 100]
  );

  const successstring = progress.indexOf("SUCCESS") !== -1;
  res.json({
    message: successstring
  });
});

router.get("/", async (req, res, next) => {
  const info = await njenkins.info(`job/${process.env.JENKINS_JOB_MEBNAME}`);
  const build = await njenkins.buildWithParams(
    `job/${process.env.JENKINS_JOB_MEBNAME}`,
    { ServerName: req.query.servername }
  );
  const nextbuildnumber = info.nextBuildNumber;
  const progress = await njenkins.progressiveText(
    `job/${process.env.JENKINS_JOB_MEBNAME}`,
    nextbuildnumber,
    [false, 100]
  );
  const successstring = progress.indexOf("SUCCESS") !== -1;
  res.redirect(`http://localhost:3000/backup-run?jenkinbool=${successstring}`);
  // res.json({
  //   message: successstring
  // });
});

router.get("/getjob", (req, res, next) => {
  jenkins.job.get(process.env.MYSQL_CREATE_USER, (err, data) => {
    if (err) throw err;
    res.json({
      message: data
    });
  });
});

router.get("/getlistjobs", (req, res, next) => {
  jenkins.job.list((err, data) => {
    if (err) throw err;

    res.json({
      message: data
    });
  });
});

router.get("/getbuild", (req, res, next) => {
  jenkins.build.get("node-param", 24, (err, data) => {
    if (err) throw err;

    // console.log('queue item number', data);
    res.json({
      message: data
    });
  });
});

router.get("/getqueue", (req, res, next) => {
  jenkins.queue.item(66, (err, data) => {
    if (err) throw err;

    // console.log('queue item number', data);
    res.json({
      message: data
    });
  });
});
router.post("/sendmail", (req, res, next) => {
  const readHTMLFile = (path, callback) => {
    fs.readFile(path, { encoding: "utf-8" }, (err, html) => {
      if (err) {
        console.log(err);
      } else {
        callback(null, html);
      }
    });
  };

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD
    }
  });
  readHTMLFile("src/mail/mail.html", (err, html) => {
    const template = handlebars.compile(html);
    const replacements = {
      username: "Nagender",
      servername: req.body.servername,
      triggeruser: "anonymus",
      accepturl: `http://localhost:${
        process.env.NODE_PORT
      }/jenkins?servername=${req.body.servername}`
    };
    const htmlToSend = template(replacements);
    const mailOptions = {
      from: process.env.MAIL_USERNAME,
      to: "nagender@aiinit.com",
      subject: "Hello ✔",
      html: htmlToSend
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      res.json({
        message: true
      });
      console.log("Message sent: %s", info.messageId);
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    });
  });
});
module.exports = router;
