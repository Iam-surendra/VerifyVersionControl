var HtmlReporter = require('protractor-beautiful-reporter');
import { ProtractorBrowser, Config } from 'protractor';

export let config: Config = {
    directConnect: true,
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./specs/login-spec.js', './specs/onenote-home-spec.js', './specs/cnb-ribbon-spec.js', './specs/canvas-spec.js'],
    multiCapabilities: [
        //{browserName: 'firefox'}],
        { browserName: 'chrome' }],
    onPrepare: function () {
        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: 'reports/screenshots',
            screenshotsSubfolder: 'images'
          , jsonsSubfolder: 'jsons'
          , preserveDirectory: false
        }).getJasmine2Reporter());
        let globals = require('protractor');
   let browser = globals.browser;
   browser.manage().window().maximize();
   browser.manage().timeouts().implicitlyWait(5000);
    },
    jasmineNodeOpts: {
        defaultTimeoutInterval: 900000,
        showColors: true
    }
};