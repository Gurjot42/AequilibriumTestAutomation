package stepdefs;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.Scenario;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import util.Browser;
import util.ReadProperties;

public class Hooks {


    @Before
    public void beforeScenario(){
        Browser.launch(ReadProperties.getProperty("browser"));
    }

    @After
    public void afterScenario(Scenario scenario){
        if(scenario.isFailed()){
            System.out.println("Failed Scenario: "+scenario.getName());

            final byte[] screenshot = ((TakesScreenshot) Browser.getDriver()).getScreenshotAs(OutputType.BYTES);
            scenario.embed(screenshot, "image/png");
        }
        Browser.close();
    }



}
