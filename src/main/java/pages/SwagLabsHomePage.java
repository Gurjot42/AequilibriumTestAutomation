package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class SwagLabsHomePage extends Base {

    @FindBy(xpath="//div[@class='app_logo']")
    WebElement homePageLogo;


    public boolean verifyHomePage(){

        try {
           if(homePageLogo.isDisplayed()){
               return true;
           }else{
               return false;
           }
        }catch (Exception e){
            e.printStackTrace();
            return false;
        }
    }

}
