package BDD.Cucumber;





import java.io.File;
import java.io.IOException;

import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;
import org.testng.annotations.AfterClass;
import org.testng.annotations.AfterSuite;
import org.testng.annotations.BeforeClass;


import BDD.Cucumber.Core.Initialization;
import BDD.Cucumber.Core.Sendmail;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.AbstractTestNGCucumberTests;


@RunWith(Cucumber.class)

@CucumberOptions(
		format = { "pretty", "html:target/cucumber","json:target/JSON/OutputRerun.json" },
        features ={ "@target/P2.txt"},
		
        plugin = {"com.cucumber.listener.ExtentCucumberFormatter:target/CucumberReport_ReRun.html","rerun:target/WindowsFailedTest.txt"}
		

)


public class WindowsFailedTest extends AbstractTestNGCucumberTests {
	
	@BeforeClass
	public void start()
	{
		
		
		Initialization.GetDriverObject();
	}
	
	@AfterClass
	public void teardown() throws Exception
	{
		Initialization.driver.close();
		
		Initialization.driver.quit();
		
		Sendmail s=new Sendmail();
		s.mail();
	}

}


