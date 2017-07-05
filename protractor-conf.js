var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

exports.config = {
  seleniumAddress: "http://localhost:4444/wd/hub",
  baseUrl: "http://simplycheer.uat01.nbos.io/",
  capabilities: {
    browserName: process.env.TEST_BROWSER_NAME || "chrome"//chrome,firefox
  },
  //resultJsonOutputFile: "./reports/json/protractor_report.json",
  framework: "custom",
  frameworkPath: require.resolve("protractor-cucumber-framework"),
  specs: ["features/createSurvey.feature"],
  ignoreUncaughtExceptions : true,
  onPrepare: function() {
      browser.manage().window().maximize();
      global.expect = chai.expect;
  },
  cucumberOpts: {
    strict: true,
    format: ["pretty"],
    require: ['stepDefintions/createSurveyStep.js','common/env.js','common/hooks1.js']
    //tags: "(@AllureScenario or @CucumberScenario or @ProtractorScenario) and (not @DatabaseTest)" // @DatabaseTest scenario can be included when the username & password of DB have been configured in Support/database.js
  }
};
