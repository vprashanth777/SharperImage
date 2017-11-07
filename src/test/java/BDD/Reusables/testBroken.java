package BDD.Reusables;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang3.RandomStringUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;

import BDD.Cucumber.Core.Initialization;

public class testBroken extends Initialization{

	public static void main(String[] args) throws Exception {
		System.setProperty("webdriver.chrome.driver", "src/test/resources/Drivers/chromedriver1.exe");
		 ChromeOptions chromeOptions = new ChromeOptions();
		 String windowSize = "1920,1200";
	     // chromeOptions.setBinary("C:\\Users\\prashanth.veldandi\\AppData\\Local\\Google\\Chrome SxS\\Application\\chrome.exe");
		 chromeOptions.addArguments("--headless",
                 "--disable-gpu",
                 "--incognito",
                 "--whitelisted-ips=''",
                "window-size=" + windowSize);
		  DesiredCapabilities capabilities = DesiredCapabilities.chrome();
	        capabilities.setCapability(ChromeOptions.CAPABILITY, chromeOptions);

	      WebDriver Driver = new ChromeDriver(capabilities);
	      Driver.navigate().to("https://the-internet.herokuapp.com/login");

	      WebDriverWait waitForUsername = new WebDriverWait(Driver, 5000);
	      waitForUsername.until(ExpectedConditions.visibilityOfElementLocated(By.id("username")));

	      Driver.findElement(By.id("username")).sendKeys("tomsmith");
	      Driver.findElement(By.cssSelector("button.radius")).click();

	      WebDriverWait waitForError = new WebDriverWait(Driver, 5000);
	      waitForError.until(ExpectedConditions.visibilityOfElementLocated(By.id("flash")));

	      Assert.assertTrue(Driver.findElement(By.id("flash")).getText().contains("Your password is invalid!"));
		  
	}

}
