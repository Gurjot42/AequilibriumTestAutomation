package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class SwagLabsLoginPage extends Base {


    @FindBy(id="user-name")
    WebElement userName;


    @FindBy(id="password")
    WebElement password;


    @FindBy(xpath="//input[@value='LOGIN']")
    WebElement loginButton;


    @FindBy(xpath="//h3[@data-test='error']")
    WebElement errorMessage;


    public void login(String userNameValue, String passwordValue){
        userName.sendKeys(userNameValue);
        password.sendKeys(passwordValue);
        loginButton.click();
    }


    public String getErrorMessage(){
        return errorMessage.getText();
    }


}
