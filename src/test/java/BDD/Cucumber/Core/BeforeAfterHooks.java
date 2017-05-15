package BDD.Cucumber.Core;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.apache.log4j.Logger;
import org.openqa.selenium.Capabilities;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.remote.RemoteWebDriver;


public class BeforeAfterHooks{

	static Logger log;

	static {
		log = Logger.getLogger(BeforeAfterHooks.class);
	}


	@Before
	public void deleteAllCookies() {
		Initialization.GetDriverObject().manage().deleteAllCookies();
		
	}


	@After
	public static void embedScreenshot(Scenario scenario) {
		
		if (scenario.isFailed()) {
			
			try {
				byte[] screenshot = ((TakesScreenshot) Initialization.driver) .getScreenshotAs(OutputType.BYTES);
				scenario.embed(screenshot, "image/png");
			} catch (WebDriverException somePlatformsDontSupportScreenshots) {
				log.error(somePlatformsDontSupportScreenshots.getMessage());
			}
		}
		
	//	DriverManager.getDriver().quit();
	}

}