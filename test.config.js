exports.config = {
  // test script
  specs: ["./src/waitForDisplayed.js"],
  capabilities: [
    {
      browserName: "chrome",
    },
  ],
  runner: "local",
  // khai báo server
  hostname: "localhost",
  port: 9515,
  path: "/",
  // khai báo test framework
  framework: "mocha",
  mochaOpts: {
    ui: "bdd",
    timeout: 600000,
  },
  // allure report
  reporters: [
    [
      "allure",
      {
        outputDir: "./allure-results",
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true,
      },
    ],
  ],
};
