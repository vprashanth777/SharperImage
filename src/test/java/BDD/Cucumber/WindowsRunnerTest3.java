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
		format = { "pretty", "html:target/cucumber","json:target/JSON/RunnerTest3.json" },
		
		features ={ "."},
        plugin = {"com.cucumber.listener.ExtentCucumberFormatter:target/RunnerTestReport3.html","rerun:target/rerun3.txt"}
       
       , tags={"@Thread3","@Desktop","~@P1","~@P2","~@ignore"}
		,dryRun=false
   

)


public class WindowsRunnerTest3 extends AbstractTestNGCucumberTests {
	
	@BeforeClass
	public void start()
	{
		Initialization.GetDriverObject();
		Initialization.GlobalExecution=true;
	}
	
	@AfterClass
	public void teardown() throws Exception
	{
		
		Initialization.teardown();
		
	}
	
}


