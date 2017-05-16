package BDD.Reusables;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.testng.Assert;

import BDD.Cucumber.Core.Initialization;

public class testBroken extends Initialization{

	public static void main(String[] args) throws Exception {
		 Map<String, String> mobileEmulation = new HashMap<String, String>();
	        mobileEmulation.put("deviceName", "Google Nexus 10");
	        System.setProperty("webdriver.chrome.driver", "src/test/resources/Drivers/chromedriver.exe");
	        Map<String, Object> chromeOptions = new HashMap<String, Object>();
	        chromeOptions.put("mobileEmulation", mobileEmulation);
	        DesiredCapabilities capabilities = DesiredCapabilities.chrome();
	        capabilities.setCapability(ChromeOptions.CAPABILITY, chromeOptions);
	        WebDriver driver = new ChromeDriver(capabilities);
	 
	        driver.get("http://www.google.com/ncr");
	        //Enter my search
	        driver.findElement(By.cssSelector("#lst-ib")).sendKeys("what is my browser");
	        //Click on search button
	        driver.findElement(By.cssSelector("#tsbb")).click();
	        //Click on the first found result
	        driver.findElement(By.xpath("//h3[@class='r']/a[text()='What browser am I using? Is my browser up to date? Web browser ...']")).click();
	        //Get the device name from the website
	        String deviceNameFromWebsite = driver.findElement(By.cssSelector(".string-extra-info")).getText();
	        //Check the device name from the website
	        Assert.assertEquals(deviceNameFromWebsite, "Apple iPhone", "The device name is not the expected one.");
	         
	        driver.quit();
		  
	}

}
