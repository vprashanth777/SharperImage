package BDD.Cucumber;






import org.junit.runner.RunWith;


import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@RunWith(Cucumber.class)

@CucumberOptions(
		format = { "pretty", "html:target/cucumber","json:target/JSON/FirefoxRunnerTest.json" },
		
		features ={ "."},
        plugin = {"com.cucumber.listener.ExtentCucumberFormatter:target/FirefoxRunnerTestReport.html","rerun:target/rerun1.txt"}
       
       , tags={"@PlaceOrder"}
   

)


public class FirefoxRunnerTest extends AbstractTestNGCucumberTests {
	

	
}


