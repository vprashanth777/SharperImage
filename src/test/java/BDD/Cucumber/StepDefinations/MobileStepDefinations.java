package BDD.Cucumber.StepDefinations;

import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;


import BDD.Cucumber.Core.Initialization;
import cucumber.api.java.en.When;

public class MobileStepDefinations extends Initialization {
	Logger log = Logger.getLogger(this.getClass());
	

	  @When("^User Click the button \"([^\"]*)\" by \"([^\"]*)\"$")
	    public void muser_click_the_button_something_by_something(String strArg1, String strArg2) throws Throwable {
	       Thread.sleep(1000);
		  
		  if(strArg2.equalsIgnoreCase("ID"))
	        {
	        	driver.findElement(By.id(strArg1)).click();
	        	log.info("User Click the button by "+strArg2);
	        }
	        if(strArg2.equalsIgnoreCase("NAME"))
	        {
	        	Reusables.ActionClick(driver.findElement(By.name(strArg1)));
	        }
	        if(strArg2.equalsIgnoreCase("TEXT"))
	        {
	        	 String xpath="//button[contains(text(),'"+strArg1+"')]";
	        	Reusables.ActionClick(driver.findElement(By.xpath(xpath)));
	        }
	        if(strArg2.equalsIgnoreCase("XPATH"))
	        {
	        	driver.findElement(By.xpath(strArg1)).click();
	        }
	       
	        
	       
	        
	    }
	  
	  
	  @When("^User Click the \"([^\"]*)\" by \"([^\"]*)\"$")
	    public void user_click_the_something_by_something(String strArg1, String strArg2) throws Throwable {
	        
 Thread.sleep(1000);
		  
		  if(strArg2.equalsIgnoreCase("ID"))
	        {
	        	Reusables.ActionClick(driver.findElement(By.id(strArg1)));
	        	log.info("User Click the button by "+strArg2);
	        }
	        if(strArg2.equalsIgnoreCase("NAME"))
	        {
	        	Reusables.ActionClick(driver.findElement(By.name(strArg1)));
	        }
	        if(strArg2.equalsIgnoreCase("TEXT"))
	        {
	        	 String xpath="//.[contains(text(),'"+strArg1+"')]";
	        	Reusables.ActionClick(driver.findElement(By.xpath(xpath)));
	        }
	        
	        if(strArg2.equalsIgnoreCase("DROPDOWN"))
	        {
	        	 String xpath="//h4[contains(text(),'"+strArg1+"')]";
	        	Reusables.ActionClick(driver.findElement(By.xpath(xpath)));
	        }
	        if(strArg2.equalsIgnoreCase("XPATH"))
	        {
	        	driver.findElement(By.xpath(strArg1)).click();
	        }
	    }
	 
}
