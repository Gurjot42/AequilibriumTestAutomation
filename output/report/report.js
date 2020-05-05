$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/login.feature");
formatter.feature({
  "name": "Verify Login Functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.scenario({
  "name": "Verify User should login successfully with valid user name and password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@one"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.LoginStepDefs.i_am_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I login with valid username \"standard_user\" and valid password \"secret_sauce\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.LoginStepDefs.i_login_with_valid_username_and_valid_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.LoginStepDefs.i_should_see_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Error \"Username is required\" should be displayed for empty user name and password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@two"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.LoginStepDefs.i_am_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I login with invalid username \"\" and invalid password \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.LoginStepDefs.i_login_with_invalid_username_and_invalid_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see \"Username is required\" error message",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.LoginStepDefs.i_should_see_error_message(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Error \"Username and password do not match any user in this service\" should display for invalid user name and password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@three"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.LoginStepDefs.i_am_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I login with invalid username \"usrname\" and invalid password \"123456\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.LoginStepDefs.i_login_with_invalid_username_and_invalid_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see \"Username and password do not match any user in this service\" error message",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.LoginStepDefs.i_should_see_error_message(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Error \"Password is required\" should display for empty password filed",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@four"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.LoginStepDefs.i_am_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I login with invalid username \"usrname\" and invalid password \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.LoginStepDefs.i_login_with_invalid_username_and_invalid_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see \"Password is required\" error message",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.LoginStepDefs.i_should_see_error_message(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Error \"Username is required\" should display for empty Username filed",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@five"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.LoginStepDefs.i_am_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I login with invalid username \"\" and invalid password \"123456\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.LoginStepDefs.i_login_with_invalid_username_and_invalid_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see \"Username is required\" error message",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.LoginStepDefs.i_should_see_error_message(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});