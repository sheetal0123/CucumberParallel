$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Homepage.feature");
formatter.feature({
  "line": 1,
  "name": "Homepage verification",
  "description": "",
  "id": "homepage-verification",
  "keyword": "Feature"
});
formatter.before({
  "duration": 739414,
  "status": "passed"
});
formatter.before({
  "duration": 13485923335,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Verify the homepage",
  "description": "",
  "id": "homepage-verification;verify-the-homepage",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user is on HomePage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user should see the search product box",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user should see the deals of the day section",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user should see the flipkart assured section",
  "keyword": "And "
});
formatter.match({
  "location": "Homepage.user_is_on_HomePage()"
});
formatter.result({
  "duration": 333390639,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.user_should_see_the_search_product_box()"
});
formatter.result({
  "duration": 264183364,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.user_should_see_the_deals_of_the_day_section()"
});
formatter.result({
  "duration": 164862394,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.user_should_see_the_flipkart_assured_section()"
});
formatter.result({
  "duration": 169270653,
  "status": "passed"
});
formatter.after({
  "duration": 166358,
  "status": "passed"
});
formatter.after({
  "duration": 1960722958,
  "status": "passed"
});
formatter.after({
  "duration": 195438,
  "status": "passed"
});
formatter.before({
  "duration": 10033107275,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Verify the login",
  "description": "",
  "id": "homepage-verification;verify-the-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "user click on login",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "login popup should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Homepage.user_click_on_login()"
});
formatter.result({
  "duration": 213334856,
  "status": "passed"
});
formatter.match({
  "location": "Homepage.login_popup_should_be_displayed()"
});
formatter.result({
  "duration": 526225037,
  "status": "passed"
});
formatter.after({
  "duration": 1642689807,
  "status": "passed"
});
formatter.after({
  "duration": 48324,
  "status": "passed"
});
formatter.uri("SOParameterization.feature");
formatter.feature({
  "line": 1,
  "name": "Check parameterization",
  "description": "",
  "id": "check-parameterization",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Check navigation with multiple URL\u0027s",
  "description": "",
  "id": "check-parameterization;check-navigation-with-multiple-url\u0027s",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user navigates to \"\u003curl\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "page should open with title \"\u003cexpectedtitle\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 6,
  "name": "",
  "description": "",
  "id": "check-parameterization;check-navigation-with-multiple-url\u0027s;",
  "rows": [
    {
      "cells": [
        "url",
        "expectedtitle"
      ],
      "line": 7,
      "id": "check-parameterization;check-navigation-with-multiple-url\u0027s;;1"
    },
    {
      "cells": [
        "https://www.google.com",
        "Google"
      ],
      "line": 8,
      "id": "check-parameterization;check-navigation-with-multiple-url\u0027s;;2"
    },
    {
      "cells": [
        "https://www.yahoo.com",
        "Yahoo"
      ],
      "line": 9,
      "id": "check-parameterization;check-navigation-with-multiple-url\u0027s;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 11897325365,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Check navigation with multiple URL\u0027s",
  "description": "",
  "id": "check-parameterization;check-navigation-with-multiple-url\u0027s;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user navigates to \"https://www.google.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "page should open with title \"Google\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.google.com",
      "offset": 19
    }
  ],
  "location": "SOParameterization.user_navigates_to(String)"
});
formatter.result({
  "duration": 3237746639,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Google",
      "offset": 29
    }
  ],
  "location": "SOParameterization.page_should_open_with_title(String)"
});
formatter.result({
  "duration": 21458403,
  "status": "passed"
});
formatter.after({
  "duration": 1736541510,
  "status": "passed"
});
formatter.after({
  "duration": 76122,
  "status": "passed"
});
formatter.before({
  "duration": 2466923516,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: updateWindow is not defined\nJavaScript stack:\nReferenceError: updateWindow is not defined\n    at eval (eval at executeAsyncScript (unknown source), \u003canonymous\u003e:2:9)\n    at executeAsyncScript (\u003canonymous\u003e:314:26)\n    at apply.state (\u003canonymous\u003e:330:29)\n    at callFunction (\u003canonymous\u003e:222:33)\n    at apply.state (\u003canonymous\u003e:232:23)\n    at \u003canonymous\u003e:233:3\n  (Session info: chrome\u003d52.0.2743.116)\n  (Driver info: chromedriver\u003d2.9.248315,platform\u003dWindows NT 6.3 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 1.12 seconds\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027XE-T-NITINGO\u0027, ip: \u0027192.168.162.2\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_91\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, chrome\u003d{userDataDir\u003dC:\\Users\\ngoyal\\AppData\\Local\\Temp\\scoped_dir4088_4269}, takesHeapSnapshot\u003dtrue, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d52.0.2743.116, platform\u003dWIN8_1, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 9fb051eb147fb5ae070bdbb9dcab7b2f\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:945)\r\n\tat Utility.DriverFactory.createdriver(DriverFactory.java:18)\r\n\tat StepDefinitions.Hooks.openbrowser(Hooks.java:14)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:59)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:222)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:210)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:200)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:50)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:467)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:683)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:390)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:197)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 9,
  "name": "Check navigation with multiple URL\u0027s",
  "description": "",
  "id": "check-parameterization;check-navigation-with-multiple-url\u0027s;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user navigates to \"https://www.yahoo.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "page should open with title \"Yahoo\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.yahoo.com",
      "offset": 19
    }
  ],
  "location": "SOParameterization.user_navigates_to(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Yahoo",
      "offset": 29
    }
  ],
  "location": "SOParameterization.page_should_open_with_title(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1128049068,
  "status": "passed"
});
formatter.after({
  "duration": 52174,
  "status": "passed"
});
});