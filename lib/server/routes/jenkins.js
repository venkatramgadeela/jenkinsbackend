"use strict";

var express = require("express");

var router = express.Router();
var jenkins = require("jenkins")({
  baseUrl: "http://thanush:Tango@123@localhost:8080",
  crumbIssuer: true,
  promisify: true
});

router.post("/", function (req, res, next) {
  res.json({
    message: req.body.servername
  });
  // if (req.body.servername) {
  //   jenkins.job.build(
  //     { name: "node-param", parameters: { servername: req.body.servername } },
  //     (err, data) => {
  //       if (err) {
  //         // logger.error('Error getting users. ', err);
  //         return res.status(500).send();
  //       }
  //       res.json({
  //         message: data
  //       });
  //     }
  //   );
  // }
});
router.get("/getjob", function (req, res, next) {
  jenkins.job.get("node-job", function (err, data) {
    if (err) throw err;

    // console.log('queue item number', data);
    res.json({
      message: data
    });
  });
});
router.get("/getlistjobs", function (req, res, next) {
  jenkins.job.list(function (err, data) {
    if (err) throw err;

    res.json({
      message: data
    });
  });
});
module.exports = router;