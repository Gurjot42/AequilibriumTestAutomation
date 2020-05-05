package pages;

import org.openqa.selenium.support.PageFactory;
import util.Browser;

public class Base {

    public Base(){
        PageFactory.initElements(Browser.getDriver(),this);
    }

}
