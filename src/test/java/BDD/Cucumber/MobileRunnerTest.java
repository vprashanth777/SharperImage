package BDD.Cucumber;






import org.junit.runner.RunWith;


import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@RunWith(Cucumber.class)

@CucumberOptions(
		format = { "pretty", "html:target/cucumber","json:target/JSON/MobileRunnerTest.json" },
		
		features ={ "."},
        plugin = {"com.cucumber.listener.ExtentCucumberFormatter:target/MobileTestReport.html","rerun:target/rerun.txt"}
       
       , tags={"@Mobile","~@ignore","@Protection"}
		,dryRun=false

)


public class MobileRunnerTest extends AbstractTestNGCucumberTests {
	

	
}


