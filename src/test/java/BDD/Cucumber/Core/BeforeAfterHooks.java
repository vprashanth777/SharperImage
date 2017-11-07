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


public class BeforeAfterHooks extends Initialization{

	static Logger log;

	static {
		log = Logger.getLogger(BeforeAfterHooks.class);
	}


	@Before
	public void deleteAllCookies() {
	
		if(driver==null)
		{
			GetDriverObject();
		}
		Initialization.GetDriverObject().manage().deleteAllCookies();
		log.info("Cookies Deleted");
		
		log.info("Execution was started on browser ::" + getBrowserType());
		
		log.info(driver.manage().window().getSize());
		
	}


	@After
	public static void embedScreenshot(Scenario scenario) {
		
		//if (scenario.isFailed()) {
		if(driver!=null)
		{
			try {
				byte[] screenshot = ((TakesScreenshot) Initialization.driver) .getScreenshotAs(OutputType.BYTES);
				scenario.embed(screenshot, "image/png");
			} catch (WebDriverException somePlatformsDontSupportScreenshots) {
				log.error(somePlatformsDontSupportScreenshots.getMessage());
			}
			
		}
	
		//}
		
	/*	if(!GlobalExecution)
	{driver.quit();
		log.info("Execution Completed and Browser was quit");
		
		
		    driver=null;
	}*/
	}

}