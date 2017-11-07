package BDD.Reusables;

import java.awt.AWTException;
import java.awt.Robot;
import java.awt.Toolkit;
import java.awt.datatransfer.StringSelection;
import java.awt.event.InputEvent;
import java.awt.event.KeyEvent;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.math.BigInteger;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Hashtable;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;
import java.util.function.Function;

import org.apache.commons.lang3.RandomStringUtils;
import org.apache.log4j.Logger;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.Cookie;
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
import org.openqa.selenium.support.ui.FluentWait;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.Wait;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;

import com.github.genium_framework.appium.support.server.AppiumServer;
import com.github.genium_framework.server.ServerArguments;


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
	
	
	public void AB_MINICART(Boolean b)
	{
		String Cookievalue=null;
		if(b)
		{
			Cookievalue="A_SHOW_MINICART";
			
			log.info("mini cart value A_SHOW_MINICART" );
		}
		
		else
		{
			Cookievalue="B_NO_MINICART";
			log.info("mini cart value B_NO_MINICART" );
		}
		
		try{
		Cookie cookie = driver.manage().getCookieNamed("ABTest_MiniCart");
		driver.manage().deleteCookie(cookie);
		}
		catch(Exception E)
		{
			log.info(E.toString());
		}
		((JavascriptExecutor) driver).executeScript("document.cookie='ABTest_MiniCart="+Cookievalue+"'");
		/*
			if(BrowserType.equalsIgnoreCase("IE"))
			{
				((JavascriptExecutor) driver).executeScript("document.cookie='ABTest_MiniCart="+Cookievalue+"'");
			}
			
			else
			{
				//System.out.println(BrowserType);
				Cookie cookie = driver.manage().getCookieNamed("ABTest_MiniCart");
				//System.out.println(cookie.getValue());
				//log.info("mini cart value :"+cookie.getValue() );
			
				
				driver.manage().deleteCookie(cookie);
				//B_NO_MINICART
				//System.out.println(cookie.getValue());
			/*	driver.manage().addCookie(
				  new Cookie.Builder(cookie.getName(), Cookievalue)
				    .domain(cookie.getDomain())
				    .expiresOn(cookie.getExpiry())
				    .path(cookie.getPath())
				    .isSecure(cookie.isSecure())
				    .build()
				);
			
			*/
	}
		
		
	
	
	public void mysterypopup()
	{
		try{
	    	//Reusables.waitforElement(driver.findElement(By.xpath("//span[@id='popup-close-firstVisit']")));
	    	WebElement WE=WD.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//span[@id='popup-close-firstVisit']")));
	    	//WebElement WE=Reusables.waitforElement(driver.findElement(By.xpath("//span[@id='popup-close-firstVisit']")));
	  if(WE.isDisplayed())
	  {
		  Reusables.ActionClick(WE);
	  }
	   }
	    
	    catch(Exception E){
	    	//Assert.fail("User Navigation got failed", E);
	    }
	}
	
public boolean isProductionEnvironment()
{
	if(driver.getCurrentUrl().contains("www.sharperimage.com"))
		return true;
				
		else
		return	false;
}
	public void SelectFromList(WebElement WE, String Value,String BY) {
		Select S = new Select(WE);

	if(BY.equalsIgnoreCase("value"))
	{
		S.selectByValue(Value);
	}
	if(BY.equalsIgnoreCase("index"))
	{
		S.selectByIndex(Integer.parseInt(Value));
	}
	
	if(BY.equalsIgnoreCase("visibletext"))
	{
		S.selectByVisibleText(Value);
	}
	
		WE.sendKeys(Keys.TAB);
		WaitforPageLoad();
	}

	public void WaitforPageLoad() {
		
		StanderdWait(2000);
		ExpectedCondition<Boolean> pageLoadCondition = new
                ExpectedCondition<Boolean>() {
                    public Boolean apply(WebDriver driver) {
                        return ((JavascriptExecutor)driver).executeScript("return document.readyState").equals("complete");
                    }
                };
        //WebDriverWait wait = new WebDriverWait(driver, 30);
        WD.until(pageLoadCondition);
        
       

	
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
		try{
		//Action.moveToElement(WE).build().perform();
	//	StanderdWait(1000);
		//Action.click(WE).build().perform();
			JS.executeScript("arguments[0].click();", WE);
		}
		catch(Exception e)
		{
			System.out.println(e.toString());
		}
				
				
				
				
	}

	
	 public void ActionClick(List<WebElement> WB)
	   {
	   

		    	//System.out.println(Reusables.ReturnElementfromList(WB).getText());
		    	ActionClick(Reusables.ReturnElementfromList(WB));
		
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
		
		
		driver.switchTo().window(Initialization.winHandleBefore);
		
		
	closechildwindow(driver);
		//driver.switchTo().window(Initialization.winHandleBefore);
		/*for (String S : driver.getWindowHandles()) {
			if (S.equals(Initialization.winHandleBefore)) {
				
				driver.switchTo().window(Initialization.winHandleBefore);
				WaitforPageLoad();
			}
			
			else
			{
				driver.switchTo().window(S).close();

				WaitforPageLoad();

			}
		}*/
		
		
		
		//System.out.println(driver.getCurrentUrl());
		
	}
	
	void closechildwindow(WebDriver D)
	{
		for (String S : D.getWindowHandles()) {
			if (!S.equals(Initialization.winHandleBefore)) {

			//System.out.println(S);
				D.switchTo().window(S).close();

				//WaitforPageLoad();

			}
			
			
		}
		
		D.switchTo().window(Initialization.winHandleBefore);
	}
	
	public WebElement ReturnElementfromList(List<WebElement> W)
	{
		//System.out.println(W.size());
		if(W.size()>0)
		{
		for (int i = W.size() - 1; i >= 0; i--) {
		    if(W.get(i).isDisplayed())
		    {	
		    	return W.get(i);
		    }
		 }
		}
		else if(W.size()==0)
		{
			Assert.fail("There is no element");
			return null;
		}
		return W.get(0);
	}
	
	public void mouseOverAndClick(List<WebElement> W,List<WebElement> WB)
	{
		//Action.moveToElement(Reusables.ReturnElementfromList(W)).build().perform();
		mouseHoverJScript(Reusables.ReturnElementfromList(W));
		//ActionClick(Reusables.ReturnElementfromList(W));
		   Reusables.StanderdWait(1000);
		   ActionClick(Reusables.ReturnElementfromList(WB));
	}

	public void mouseHoverJScript(WebElement HoverElement) {
		try {
			
				
				String mouseOverScript = "if(document.createEvent){var evObj = document.createEvent('MouseEvents');evObj.initEvent('mouseover', true, false); arguments[0].dispatchEvent(evObj);} else if(document.createEventObject) { arguments[0].fireEvent('onmouseover');}";
				((JavascriptExecutor) driver).executeScript(mouseOverScript,
						HoverElement);

			
		} catch (StaleElementReferenceException e) {
			System.out.println("Element with " + HoverElement
					+ "is not attached to the page document"
					+ e.getStackTrace());
		} catch (NoSuchElementException e) {
			System.out.println("Element " + HoverElement + " was not found in DOM"
					+ e.getStackTrace());
		} catch (Exception e) {
			e.printStackTrace();
			System.out.println("Error occurred while hovering"
					+ e.getStackTrace());
		}
	}

	public void mouseOver(List<WebElement> W)
	{
		Action.moveToElement(Reusables.ReturnElementfromList(W)).build().perform();
		   Reusables.StanderdWait(1000);
		  
	}
	
	public WebElement waitforElement(WebElement element)
	{
		
		FluentWait<WebDriver> wait = new FluentWait<WebDriver>(driver);
		  wait.withTimeout(60, TimeUnit.SECONDS);
		  wait.pollingEvery(500, TimeUnit.MILLISECONDS);
		  wait.ignoring(NoSuchElementException.class);
		  
		  return wait.until(ExpectedConditions.visibilityOf(element));
		  
		  
	}
	
	public Boolean IsWebElementPresent(List<WebElement> element)
	{
		
		if(element.size()>0)
			return true;
		else
			return false;
	}
	
	public String GetTestProparty(String s)
	{
		
		Properties  properties = new Properties();
			 FileInputStream fis;
			try {
				fis = new FileInputStream("src/test/resources/Data/TestProperties.xml");
				 properties.loadFromXML(fis);
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			
			return properties.getProperty(s);
		
	}
	
	public void WriteReport(String s,boolean condition )
	{
		if(condition)
		{
			Assert.assertTrue(true, s);
	    	  log.info(s );
		}
		
		else
		{
			Assert.fail(s);
			log.fatal(s);
		}
	}
	
	public void ClickonElement(WebElement WE)
	{
		try{
			WD.until(ExpectedConditions.elementToBeClickable(WE));
		
		WE.click();}
		
		catch(Exception E)
		{
			Assert.fail("Element Is not clickable" );
		}
	}
	
	public void Mousescroll(String s)
	{
		JavascriptExecutor Scrool = (JavascriptExecutor) driver;
		if(s.equalsIgnoreCase("UP"))
		{
			Scrool.executeScript("window.scrollBy(0,-300)", "");

		}
		
		if(s.equalsIgnoreCase("DOWN"))
		{
			Scrool.executeScript("window.scrollBy(0,300)", "");

		}
		
		StanderdWait(2000);
		
	}
	
	public WebElement GetNthElement(List<WebElement> WB,int n)
	{
		int i=1;
		if(WB.size()>1)
		{
		for(WebElement W:WB)
		{
			if(i==n)
				return W;
			
			i++;
		}
		}
		
		return WB.get(0);
	}
	
	
	public String RandomString()
	{
		
		 int length = 10;
		    boolean useLetters = true;
		    boolean useNumbers = false;
		    String generatedString = RandomStringUtils.random(length, useLetters, useNumbers);
		 
		    //System.out.println(generatedString);
		return generatedString;
		
	}
	
	public String Get_TimeStamp()
	{
		Date date = new Date();
		SimpleDateFormat sdf =new SimpleDateFormat("MM/dd/yyyy h:mm:ss a");
		String timeStamp = sdf.format(date);
		
	return timeStamp.replaceAll("[^\\w]", "_");
	}
	
	public void navigatetomailbox(String email)
	{
		String userid=email.replace("@mailinator.com", "").trim();
    	System.out.println(userid);
    	//String URL="https://www.mailinator.com/inbox2.jsp?to="+userid+"#/#public_maildirdiv";
    	String URL="https://www.mailinator.com/v2/inbox.jsp?zone=public&query="+userid;
    	driver.get(URL);
	}
}
