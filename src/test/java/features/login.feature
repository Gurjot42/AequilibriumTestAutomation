@login
Feature: Verify Login Functionality

  @one
  Scenario: Verify User should login successfully with valid user name and password
    Given I am on the login page
    When I login with valid username "standard_user" and valid password "secret_sauce"
    Then I should see homepage


  @two
  Scenario: Verify Error "Username is required" should be displayed for empty user name and password
    Given I am on the login page
    When I login with invalid username "" and invalid password ""
    Then I should see "Username is required" error message


  @three
  Scenario: Verify Error "Username and password do not match any user in this service" should display for invalid user name and password
    Given I am on the login page
    When I login with invalid username "usrname" and invalid password "123456"
    Then I should see "Username and password do not match any user in this service" error message



  @four
  Scenario: Verify Error "Password is required" should display for empty password filed
    Given I am on the login page
    When I login with invalid username "usrname" and invalid password ""
    Then I should see "Password is required" error message


  @five
  Scenario: Verify Error "Username is required" should display for empty Username filed
    Given I am on the login page
    When I login with invalid username "" and invalid password "123456"
    Then I should see "Username is required" error message