package BDD.Reusables;

import java.awt.AWTException;
import java.awt.Robot;
import java.awt.Toolkit;
import java.awt.datatransfer.StringSelection;
import java.awt.event.InputEvent;
import java.awt.event.KeyEvent;
import java.io.File;
import java.io.IOException;
import java.math.BigInteger;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.concurrent.TimeUnit;

import org.apache.log4j.Logger;
import org.junit.Assert;
import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.StaleElementReferenceException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Action;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.github.genium_framework.appium.support.server.AppiumServer;
import com.github.genium_framework.server.ServerArguments;
import com.google.common.base.Predicate;

import BDD.Cucumber.Core.Initialization;

public class ReUsablesKeywords extends Initialization {

	Robot robot;
	Logger log;
	Actions Action = new Actions(driver);
	WebDriverWait WD;
	AppiumServer appiumServer=null;
	public ReUsablesKeywords() {
		
		WD = new WebDriverWait(driver, 60);
		log = Logger.getLogger(ReUsablesKeywords.class);

	}

	public void SelectFromList(WebElement WE, String Value) {
		Select S = new Select(WE);

		try {
			S.selectByValue(Value);
		} catch (Exception e) {
			log.warn("SelectFromList selectByValue exception ::" + e.toString());
		}

		try {
			S.selectByVisibleText(Value);
		} catch (Exception e) {
			log.warn("SelectFromList selectByVisibleText exception ::" + e.toString());
		}

		try {
			S.selectByIndex(Integer.parseInt(Value));
		} catch (Exception e) {
			log.warn("SelectFromList selectByIndex exception ::" + e.toString());
		}

		WE.sendKeys(Keys.TAB);
		WaitforPageLoad();
	}

	public void WaitforPageLoad() {

		Predicate<WebDriver> pageLoaded = new Predicate<WebDriver>() {

	
			public boolean apply(WebDriver input) {
				return ((JavascriptExecutor) input).executeScript("return document.readyState").equals("complete");
			}

		};
		try {
			WD.until(pageLoaded);
		} catch (Exception e) {

			log.error("WaitforPageLoad exception occured " + e.toString());
		}
	}

	public void UploadfilefromLocal(String Path) {

		try {
			robot = new Robot();

			robot.delay(5000);
			// enterChars ("oupbeta2");

			StringSelection ss = new StringSelection(Path);
			Toolkit.getDefaultToolkit().getSystemClipboard().setContents(ss, null);
			robot.keyPress(KeyEvent.VK_ENTER);
			robot.keyRelease(KeyEvent.VK_ENTER);

			robot.keyPress(KeyEvent.VK_CONTROL);
			robot.keyPress(KeyEvent.VK_V);
			robot.keyRelease(KeyEvent.VK_V);
			robot.keyRelease(KeyEvent.VK_CONTROL);
			robot.delay(2000);
			robot.keyPress(KeyEvent.VK_ENTER);
			robot.keyRelease(KeyEvent.VK_ENTER);

		} catch (AWTException e) {
			// TODO Auto-generated catch block
			log.error("UploadfilefromLocal exception occured " + e.toString());
			e.printStackTrace();
		}
	}

	public void HandleAlert() {
		try {

			if (driver.getCurrentUrl().contains("rto-partnering-enhance-your-rto")) {
				WD.until(ExpectedConditions.alertIsPresent()).accept();
			}

			WD.until(ExpectedConditions.alertIsPresent()).dismiss();
			log.info("Alert was dismissed");
		}

		catch (Exception e) {
			// Assert.fail("No Alert Present");
			System.out.println("No Alert Present");
			log.warn("No Alert Present ,Exception occured " + e.toString());
		}

	}

	public String XpathBuilder(String str) {
		String xpathbuilder = "//a[translate(., 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz')='"
				+ str.toLowerCase() + "']";
		return xpathbuilder;

	}


	public void ActionClick(WebElement WE) {
		
		Action.moveToElement(WE).build().perform();
		StanderdWait(1000);
		Action.click(WE).build().perform();
	}

	
	 public void ActionClick(List<WebElement> WB)
	   {
	   

		    	
		    	Reusables.ActionClick(ReturnElementfromList(WB));
		
	   }
	 
	 
	public void dragAndDrop(WebElement sourceElement,WebElement destinationElement) {



		ActionClick(destinationElement);
		StanderdWait(3000);
		try {
			if (sourceElement.isDisplayed() && destinationElement.isDisplayed()) {
				Actions builder = new Actions(driver);

				// Click and hold fromElem
				builder = builder.clickAndHold(sourceElement);

				builder.moveToElement(destinationElement).release().build().perform();

				StanderdWait(2000);
				WaitforPageLoad();
				StanderdWait(2000);

			} else {
				System.out.println("Element was not displayed to drag");
			}
		} catch (StaleElementReferenceException e) {
			System.out.println("Element with " + sourceElement + "or" + destinationElement
					+ "is not attached to the page document " + e.getStackTrace());
		} catch (NoSuchElementException e) {
			System.out.println("Element " + sourceElement + "or" + destinationElement + " was not found in DOM "
					+ e.getStackTrace());
		} catch (Exception e) {
			System.out.println("Error occurred while performing drag and drop operation " + e.getStackTrace());
		}

	}

	
	 public void StanderdWait(long I)
	 {
		 try {
				Thread.sleep(I);
			} catch (Exception e) {
				
	 }
	 }
	 
	public void switchwindow() {

		for (String S : driver.getWindowHandles()) {
			if (!S.equalsIgnoreCase(Initialization.winHandleBefore)) {
				driver.switchTo().window(S);
				log.info("Switch to Child Window");

			}
		}

	}

	public void switchtoparentwindow() {
		for (String S : driver.getWindowHandles()) {
			if (!S.equalsIgnoreCase(Initialization.winHandleBefore)) {
				driver.switchTo().window(S).close();

				WaitforPageLoad();

			}
		}

		driver.switchTo().window(Initialization.winHandleBefore);
	}
	
	public WebElement ReturnElementfromList(List<WebElement> W)
	{
		for (int i = W.size() - 1; i >= 0; i--) {
		    if(W.get(i).isDisplayed())
		    {	
		    	return W.get(i);
		    }
		 }
		
		return W.get(W.size()-1);
	}
	
	public void mouseOverAndClick(List<WebElement> W,List<WebElement> WB)
	{
		Action.moveToElement(Reusables.ReturnElementfromList(W)).build().perform();
		   Reusables.StanderdWait(1000);
		   Reusables.ReturnElementfromList(WB).click();
	}

	
	
}
