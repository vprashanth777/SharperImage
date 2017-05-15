package BDD.Cucumber;






import org.junit.runner.RunWith;


import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@RunWith(Cucumber.class)

@CucumberOptions(
format = { "pretty", "html:target/cucumber", "json:target/JSON/ChromeRunnerTest.json" }, 
features = {"." }, 
plugin = { "com.cucumber.listener.ExtentCucumberFormatter:target/ChromeRunnerTestReport.html","rerun:target/rerun.txt" }
, tags = {"@PlaceOrder"})


public class ChromeRunnerTest extends AbstractTestNGCucumberTests {
	

	
}


