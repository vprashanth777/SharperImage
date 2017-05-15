package BDD.Cucumber;






import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;

import BDD.Cucumber.Core.Initialization;
import BDD.Cucumber.Core.Sendmail;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@RunWith(Cucumber.class)

@CucumberOptions(
		format = { "pretty", "html:target/cucumber","json:target/JSON/RunnerTest.json" },
		
		features ={ "."},
        plugin = {"com.cucumber.listener.ExtentCucumberFormatter:target/RunnerTestReport.html","rerun:target/rerun2.txt"}
       
       , tags={"@PlaceOrder"}
   

)


public class RunnerTest extends AbstractTestNGCucumberTests {
	
	@BeforeClass
	public void start()
	{
		Initialization.GetDriverObject();
	}
	
	
	
	
}


