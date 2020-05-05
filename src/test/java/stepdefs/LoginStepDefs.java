package stepdefs;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import pages.SwagLabsHomePage;
import pages.SwagLabsLoginPage;

public class LoginStepDefs {

    @Given("I am on the login page")
    public void i_am_on_the_login_page() {

    }

    @When("I login with valid username {string} and valid password {string}")
    public void i_login_with_valid_username_and_valid_password(String userName, String password) {
        SwagLabsLoginPage swagLabsLoginPage = new SwagLabsLoginPage();
        swagLabsLoginPage.login(userName,password);
    }

    @Then("I should see homepage")
    public void i_should_see_homepage() {
        SwagLabsHomePage swagLabsHomePage = new SwagLabsHomePage();
        Assert.assertTrue("Home page is not displayed",swagLabsHomePage.verifyHomePage());
    }

    @When("I login with invalid username {string} and invalid password {string}")
    public void i_login_with_invalid_username_and_invalid_password(String userName, String password) {
        SwagLabsLoginPage swagLabsLoginPage = new SwagLabsLoginPage();
        swagLabsLoginPage.login(userName,password);
    }

    @Then("I should see {string} error message")
    public void i_should_see_error_message(String expectedErrorMessage) {
        SwagLabsLoginPage swagLabsLoginPage = new SwagLabsLoginPage();
        String actualErrorMessage = swagLabsLoginPage.getErrorMessage();
        Assert.assertTrue(actualErrorMessage.contains(expectedErrorMessage));
    }

}
