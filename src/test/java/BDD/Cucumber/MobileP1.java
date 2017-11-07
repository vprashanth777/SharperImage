package BDD.Cucumber;






import org.junit.runner.RunWith;


import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@RunWith(Cucumber.class)

@CucumberOptions(
		format = { "pretty", "html:target/cucumber","json:target/JSON/MP1.json" },
		
		features ={ "."},
        plugin = {"com.cucumber.listener.ExtentCucumberFormatter:target/MobileP1.html","rerun:target/MP1.txt"}
       
       , tags={"@Mobile","@P1"}
		,dryRun=false

)


public class MobileP1 extends AbstractTestNGCucumberTests {
	
	
}


