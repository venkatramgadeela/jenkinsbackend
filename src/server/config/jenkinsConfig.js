const jenkinsConfig = require("jenkins")({
  baseUrl: `http://${process.env.JENKINS_USER_NAME}:${
    process.env.JENKINS_PASSWORD
  }@${process.env.JENKINS_URL}`,
  crumbIssuer: true,
  promisify: true
});

module.exports = jenkinsConfig;
