package util;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.apache.commons.io.FileUtils;

import java.io.File;

public class Browser {

    public static WebDriver driver;

    public static void launch(String browserType){
        if(browserType.equals("chrome")) {
            System.setProperty("webdriver.chrome.driver", "chromedriver");
            driver = new ChromeDriver();
        }else if(browserType.equals("firefox")){
            System.setProperty("webdriver.gecko.driver", "geckodriver");
            driver = new FirefoxDriver();
        }else if(browserType.equals("ie")){
            driver = new InternetExplorerDriver();
        }else{
            throw new RuntimeException("Invalid Browser Type: "+browserType);
        }

        driver.manage().window().maximize();
        driver.get(ReadProperties.getProperty("url"));

    }

    public static WebDriver getDriver(){
        return driver;
    }

    public static String getTitle(){
        return driver.getTitle();
    }

    public static String getCurrentURL(){
        return  driver.getCurrentUrl();
    }

    public static void close(){
        driver.close();
    }


}
