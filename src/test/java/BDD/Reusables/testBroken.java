package BDD.Reusables;

import java.io.IOException;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;

import BDD.Cucumber.Core.Initialization;

public class testBroken extends Initialization{

	public static void main(String[] args) throws Exception {
		WebDriver driver=Initialization.GetDriverObject();
		driver.get("https://www.sharperimage.com");
		   driver.manage().window().maximize();
		   
		   Thread.sleep(2000);
		   
		   try{
				WebElement popup = Initialization.WD.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//span[@id='popup-close-firstVisit']")));
				if(popup.isDisplayed())
				   {
			       driver.findElement(By.xpath("//span[@id='popup-close-firstVisit']")).click();
				   }}
		   catch(Exception E)
			{}
		   
		   
		   Actions Action = new Actions(driver);
		   Action.moveToElement(Reusables.ReturnElementfromList(driver.findElements(By.xpath("//a[text()='Toys&Games']")))).build().perform();
		   Reusables.StanderdWait(1000);
		   Reusables.ReturnElementfromList(driver.findElements(By.xpath("//a[text()='Drone Zone']"))).click();
		   /*
		  Reusables.ReturnElementfromList(driver.findElements(By.xpath("//a[text()='Toys&Games']"))).click();
		  Reusables.StanderdWait(1000);
			WD.until(ExpectedConditions.elementToBeClickable(Reusables.ReturnElementfromList(driver.findElements(By.xpath("//a[text()='Drone Zone']")))));
			Reusables.ReturnElementfromList(driver.findElements(By.xpath("//a[text()='Drone Zone']"))).click();
		//Reusables.mouseOverAndClick(driver.findElements(By.xpath("//a[text()='Toys&Games']")),driver.findElements(By.xpath("//a[text()='Drone Zone']")));
		*/
		  
	}

}
