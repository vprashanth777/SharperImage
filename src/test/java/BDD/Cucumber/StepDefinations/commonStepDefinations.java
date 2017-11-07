package BDD.Cucumber.StepDefinations;


import static org.testng.Assert.assertTrue;

import java.text.DecimalFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Random;
import java.util.Set;
import java.util.concurrent.ThreadLocalRandom;
import java.util.concurrent.TimeUnit;

import org.apache.commons.lang3.RandomUtils;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.Cookie;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.seleniumhq.jetty7.util.log.Log;
import org.testng.Assert;

import com.relevantcodes.extentreports.ExtentReports;
import com.relevantcodes.extentreports.ExtentTest;
import com.relevantcodes.extentreports.LogStatus;

import BDD.Cucumber.Core.Initialization;
import BDD.Reusables.BrokenImages;
import BDD.Reusables.BrokenLinks;
import BDD.Reusables.ReUsablesKeywords;
import cucumber.api.Scenario;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class commonStepDefinations extends Initialization {
	Logger log = Logger.getLogger(this.getClass());

	 
	 
	String price,Order,category;
	
	
	 @Then("^User handle mystery popup$")
	    public void user_handle_mystery_popup() throws Throwable {
		 
		 if(!isProd)
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
		 Thread.sleep(3000);
		 }
		 
		 
	    }
	 
	 
	 @Given("^User set the \"([^\"]*)\" cookie value \"([^\"]*)\"$")
	    public void user_set_the_something_cookie_value_something(String strArg1, String strArg2) throws Throwable {
	
		     
		
				Cookie cookie = driver.manage().getCookieNamed(strArg1);
				//System.out.println(driver.manage().getCookieNamed("ABTest_MiniCart").getValue());
				try{
				driver.manage().deleteCookie(cookie);}
				catch(Exception e)
				{
					
				}
				
				 ((JavascriptExecutor) driver).executeScript("document.cookie='"+strArg1+"="+strArg2+"'");
		 
				 log.info(driver.manage().getCookieNamed(strArg1).getValue()); 
	    }
	 
	 
	    @Given("^set cookie value to \"([^\"]*)\" mini cart$")
	    public void set_cookie_value_to_something_mini_cart(String strArg1) throws Throwable {
	     // Write code here that turns the phrase above into concrete actions
		 Cookie cookie = driver.manage().getCookieNamed("ABTest_MiniCart");
		 
	    String value=driver.manage().getCookieNamed("ABTest_MiniCart").getValue();
			
			if(value.equalsIgnoreCase("B_NO_MINICART") &strArg1.equalsIgnoreCase("YES"))
			{
			driver.manage().deleteCookie(cookie);
			//B_NO_MINICART
			System.out.println(cookie.getValue());
			
			driver.manage().addCookie(
			  new Cookie.Builder(cookie.getName(), "A_SHOW_MINICART")
			    .domain(cookie.getDomain())
			    .expiresOn(cookie.getExpiry())
			    .path(cookie.getPath())
			    .isSecure(cookie.isSecure())
			    .build()
			);
			
			}
			
			if(value.equalsIgnoreCase("A_SHOW_MINICART") &strArg1.equalsIgnoreCase("NO"))
			{
			driver.manage().deleteCookie(cookie);
			//B_NO_MINICART
			System.out.println(cookie.getValue());
			
			driver.manage().addCookie(
			  new Cookie.Builder(cookie.getName(), "B_NO_MINICART")
			    .domain(cookie.getDomain())
			    .expiresOn(cookie.getExpiry())
			    .path(cookie.getPath())
			    .isSecure(cookie.isSecure())
			    .build()
			);
			
			}
			
	 }

	    
	    @Given("^User Deleted all cookies$")
	    public void user_deleted_all_cookies() throws Throwable {
	    	driver.manage().deleteAllCookies();
	    	Thread.sleep(5000);
	    	
	    	Set<Cookie> totalCookies1 = driver.manage().getCookies();
	    	  System.out.println("Total Number Of cookies : " +totalCookies1.size());
	    	  
	    	  for (Cookie currentCookie : totalCookies1) {
	    	      System.out.println(String.format("%s -> %s -> %s", "Domain Name : "+currentCookie.getDomain(), "Cookie Name : "+currentCookie.getName(), "Cookie Value : "+currentCookie.getValue()));
	    	  }
	    	  
	    	  driver.close();
	    	  driver.quit();
	    	  driver=null;
	    	  
	    }

	    
	    @Given("^User renavigate to sharperimage website$")
	    public void user_renavigate_to_sharperimage_website() throws Throwable {
		driver.get(Reusables.GetTestProparty("URL"));
		driver.manage().window().maximize();
		Thread.sleep(2000);
		
		/*WebDriverWait WD=new WebDriverWait(driver,120);
		
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
		*/
		
	    }
	 
	@Given("^User navigate to sharperimage website$")
	public void user_navigate_to_sharperimage_website() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		
		if(Reusables.GetTestProparty("URL").contains("sharperimage.com"))
		{
			isProd=true;
		}
	   driver.get(Reusables.GetTestProparty("URL"));
	   driver.manage().window().maximize();
	    Thread.sleep(2000);
	    
	 //   log.info(driver.manage().window().getSize());
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
	    
	  
	    log.info("User navigate to sharperimage website");
	  
	    try{
		    
		    if(Reusables.GetTestProparty("AB_MINICART").equalsIgnoreCase("YES"))
		    {
		    	Reusables.AB_MINICART(true);
		    }
		    else
		    {
		    	Reusables.AB_MINICART(false);
		    }
		   }
		    catch(Exception E)
		    {
		    	System.out.println(E.toString());
		    }
	   
	 log.info(driver.manage().getCookieNamed("ABTest_MiniCart").getValue());   
	}
	
	
	 @Given("^User navigate to sharperimage stage website$")
	    public void user_navigate_to_sharperimage_stage_website() throws Throwable {
		 driver.get("https://sio-stg-store.sparkred.com/si/");
		   driver.manage().window().maximize();
		    Thread.sleep(2000);
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
		    
		  
		    log.info("User navigate to sharperimage staging website");
	    }
	 
	
	  @Then("^User able to \"([^\"]*)\" mystery banner$")
	    public void user_able_to_something_mystery_banner(String strArg1) throws Throwable {
		  
		  if(strArg1.equalsIgnoreCase("see"))
		  {
			if (driver.findElement(By.name("firstVisitEmail")).isDisplayed()) {
				log.info("User able to see the mystery banner");
				Assert.assertTrue(true, "User able to see the mystery banner");
				driver.findElement(By.id("firstVisitEmail")).sendKeys(Reusables.RandomString()+"@gmail.com");
				
				WD.until(ExpectedConditions.elementToBeClickable(driver.findElement(By.name("/razor360/si/droplet/firstVisitCoupon/FirstVisitCouponFormHandler.firstVisitCouponSubmit"))));
			       Reusables.ActionClick(driver.findElement(By.name("/razor360/si/droplet/firstVisitCoupon/FirstVisitCouponFormHandler.firstVisitCouponSubmit")));
				  WD.until(ExpectedConditions.elementToBeClickable(By.id("firstVisitCode")));

			} else {
				log.fatal("User not able to see the mystery banner");
				Assert.fail("User not able to see the mystery banner");

			}

			}
		  
		  else{
			  
			  if (driver.findElement(By.xpath("//a[@class='mysteryCoupon mystery-coupon-trigger']")).isDisplayed()) {
					log.info("User able to see the mystery Coupon");
					Assert.assertTrue(true, "User able to see the mystery Coupon");
					
					Reusables.ActionClick(driver.findElement(By.xpath("//a[@class='mysteryCoupon mystery-coupon-trigger']")));
				    driver.findElement(By.id("firstVisitEmail")).sendKeys(Reusables.RandomString()+"@gmail.com");

				} else {
					log.fatal("User not able to see the mystery Coupon");
					Assert.fail("User not able to see the mystery Coupon");

				}
			  
		  }
		  
		  
		  
	       String code=driver.findElement(By.id("firstVisitCode")).getText();
	     log.info("User enter"+code+" promo code");
	     
		  }	  
	       
	  
	  
	  
	  
	 
	@Then("^User able to see the Homepage with Categories$")
	public void user_able_to_see_the_Homepage_with_Categories() throws Throwable {
		if(Reusables.IsWebElementPresent(driver.findElements(By.xpath("//a[text()='Shop All Categories']"))))
		{
			Assert.assertTrue(true, "User able to see the Homepage with Categorie");
			log.info("User able to see the Homepage with Categorie");
		}
		else{
			Assert.fail("User able to see the Homepage with Categorie");
			log.fatal("User able to see the Homepage with Categorie");}
	}
	
	 @When("^User click the  \"([^\"]*)\" and \"([^\"]*)\"$")
	    public void user_click(String strArg1, String strArg2) throws Throwable {
	     String xpath1="//a[text()='"+strArg1+"']";
	     String xpath2="//a[text()='"+strArg2+"']";
	     
		 List<WebElement> WB1=driver.findElements(By.xpath(xpath1));
		 List<WebElement> WB2=driver.findElements(By.xpath(xpath2));
		 Reusables.mouseOverAndClick(WB1, WB2);
	    }
	 
	  @When("^User able to see all subcategory of \"([^\"]*)\"$")
	    public void user_able_to_see_all_subcategory_of_something(String strArg1,List<String> L) throws Throwable {
	       
		 
		  
		  for(String S:L)
		  {
			  List<WebElement> WEL=driver.findElements(By.xpath("//div[@id='navbar']//a[contains(text(),'"+strArg1+"') and @class='dropdown-toggle']/../ul/li/a[contains(text(),'"+S+"')]"));
			  Reusables.mouseOverAndClick(driver.findElements(By.xpath("//div[@id='navbar']//a[contains(text(),'"+strArg1+"') and @class='dropdown-toggle']")),WEL);
			  //user_check_that_the_browser_title_contains_something(strArg1);
			  if(driver.findElement(By.xpath("//div[@class='category-header']//h1")).getText().contains(S.trim()))
			{
				  log.info("User able to see "+S+" subcategory of "+strArg1 );
				  Assert.assertTrue(true, "User able to see "+S+" subcategory of "+strArg1);
			}
			  else
			  {
				  System.out.println(driver.findElement(By.xpath("//div[@class='category-header']//h1")).getText());
				  System.out.println(S);
				  log.error("User not able to see "+S+" subcategory of "+strArg1 );
				  Assert.fail("User able to see "+S+" subcategory of "+strArg1);
			  }
			  
			  
		  }
		  
	
		 
	
	    }
	  
	  
	  @When("^User able to see all subcategory of \"([^\"]*)\",(.+)$")
	    public void user_able_to_see_all_subcategory_of_something(String strArg1, String S) throws Throwable {
		 
		 
		  List<WebElement> WEL=driver.findElements(By.xpath("//div[@id='navbar']//a[contains(text(),'"+strArg1+"') and @class='dropdown-toggle']/../ul/li/a[contains(text(),'"+S+"')]"));
		  Reusables.mouseOverAndClick(driver.findElements(By.xpath("//div[@id='navbar']//a[contains(text(),'"+strArg1+"') and @class='dropdown-toggle']")),WEL);
		 
		  user_check_that_the_browser_title_contains_something(strArg1);
		  if(driver.findElement(By.xpath("//div[@class='category-header']//h1")).getText().contains(S.trim()))
		{
			  log.info("User able to see "+S+" subcategory of "+strArg1 );
			  Assert.assertTrue(true, "User able to see "+S+" subcategory of "+strArg1);
		}
		  else
		  {
			  System.out.println(driver.findElement(By.xpath("//div[@class='category-header']//h1")).getText());
			  System.out.println(S);
			  log.error("User not able to see "+S+" subcategory of "+strArg1 );
			  Assert.fail("User able to see "+S+" subcategory of "+strArg1);
		  }
		  
		 // Reusables.mysterypopup();
		  
	    }


	 
	 @When("^User click the  \"([^\"]*)\"$")
	    public void user_click1(String str) throws Throwable {
		 category=str;
		 String strArg1;
		 log.info("User click the :" +str);
		 if(isProd)
		 {
		 switch(str)
		 {
		 case "For Her":  strArg1="Gifts For Her"; break;
		 case "For Him":  strArg1="Gifts For Him"; break;
		 case "For Kids":  strArg1="Gifts For Kids"; break;
		 default:strArg1=str;
		 
		 }
		 }
		 
		 else{
			 strArg1=str;
		 }
		 
		 
		 
		 WebDriverWait WD=new WebDriverWait(driver,60);
	    try{	     
	    WD.until(ExpectedConditions.numberOfElementsToBeMoreThan(By.linkText(strArg1), 0));
	  	     
		// List<WebElement> WB1=driver.findElements(By.xpath(xpath1));
		System.out.println(driver.findElements(By.linkText(strArg1)).size());
	    if(driver.findElements(By.linkText(strArg1)).size()==1)
	    {
	    	JS.executeScript("arguments[0].click();", driver.findElement(By.linkText(strArg1)));
	    }
	    else
	    {
		 Reusables.ActionClick(driver.findElements(By.linkText(strArg1)));
	    }
	    
	    }
	    
	    catch(Exception e)
	    {
	    	//System.out.println(e.toString());
	    	List<WebElement> WB= driver.findElements(By.xpath("//div[@class='item-list-table']//a[@class='item-list-a']"));
	    	
	    	for(WebElement W:WB)
	    	{
	    		String s=W.getText().replaceAll("\\s","");
	    		if(s.equalsIgnoreCase(strArg1.replaceAll("\\s","")))
	    		{
	    			Reusables.ActionClick(W);
	    			break;
	    		}
	    	}
	    }
	    
	    if(ismobile && (str.contains("For Her") || str.contains("Gadgets")))
	    {
	    	Reusables.ActionClick(driver.findElements(By.linkText("View All")));
	    	user_should_able_to_see_all_the_items();
	    }
	    
	    }
	 
	 @When("^User selected the item from list$")
	    public void user_selected_the_item_from_list() throws Throwable {
		 
		List<WebElement> WB= driver.findElements(By.xpath("//div[@class='item-list-table']//a[@class='item-list-a']"));
		 
		 Random rand = new Random();
		 System.out.println("category:" +category);
		int n= rand.nextInt(WB.size())+1;
		
		WebElement W;
		try
		{
		if(category.equalsIgnoreCase("For Her"))
		{
			 W=Reusables.GetNthElement(WB, 3);
		}
		else if(category.equalsIgnoreCase("Gadgets"))
		{
			 W=Reusables.GetNthElement(WB, 3);  
		}
		
		else if(category.equalsIgnoreCase("Corporate Gifts"))
		{
			 W=Reusables.GetNthElement(WB, 3);  
		}
		else
		{
		 W=Reusables.GetNthElement(WB, 1);
		}
		}
		
		catch(Exception e)
		{
			W=Reusables.GetNthElement(WB, 1);
		}
		 String title=W.getText();
		 
		 System.out.println(title +"::"+n);
	     Reusables.ActionClick(W);
	        user_check_that_the_browser_title_contains_something(title);
	    }
	 
	 @When("^User click the link contains \"([^\"]*)\"$")
	    public void user_click_the_link_contains_something(String strArg1) throws Throwable {
	    	     
	    WD.until(ExpectedConditions.numberOfElementsToBeMoreThan(By.partialLinkText(strArg1), 0));
	  	     
		// List<WebElement> WB1=driver.findElements(By.xpath(xpath1));
		
	   // System.out.println(driver.findElements(By.linkText(strArg1)).size());
		 Reusables.ActionClick(driver.findElements(By.linkText(strArg1)));
	    }
	 
	 @When("^User click the  My Gift Certificate$")
	    public void user_click_the_my_gift_certificate() throws Throwable {
		 Reusables.ActionClick(driver.findElement(By.xpath("//div[@class='account-buttons']//div[contains(text(),'My Gift Certificate')]")));
	    }
	 
	 @Then("^User check that the browser title contains \"([^\"]*)\"$")
	    public void user_check_that_the_browser_title_contains_something(String strArg1) throws Throwable {
		 
		 WebDriverWait W=new WebDriverWait(driver,5);
		 try{
	     boolean b=W.until(ExpectedConditions.titleContains(strArg1));
	     if(b)
		 {
	    	  Assert.assertTrue(true, "User check that the browser title contains " +strArg1 );
	    	  log.info("User check that the browser title contains " +strArg1 );
	      }
	      else
	      {
	    	  //Assert.("Failed:User check that the browser title contains " +strArg1);
	    	  s_assert.fail("Failed:User check that the browser title contains " +strArg1);
				log.fatal("User check that the browser title contains " +strArg1);
	      }
	     
		 }
		 catch(Exception e){
			 boolean b = false;
			 try{
			  b=W.until(ExpectedConditions.titleContains("Sharper Image"));
			 }
			 catch(Exception e1){}
			 if(b)
			 {
		    	  Assert.assertTrue(true, "User check that the browser title contains " +driver.getTitle() );
		    	  log.info("User check that the browser title contains " +driver.getTitle()  );
		      }
		      else
		      {
		    	  //Assert.("Failed:User check that the browser title contains " +strArg1);
		    	  Assert.fail("Failed:User check that the browser title contains " +driver.getTitle() );
					log.fatal("User check that the browser title contains " +driver.getTitle() );
		      }
		 }
		 
	       
	    }
	 
	   @Then("^User should be taken to the product details page for that item \"([^\"]*)\"$")
	    public void user_should_be_taken_to_the_product_details_page_for_that_item_something(String strArg1) throws Throwable {
		   String s;
		   if(driver.findElement(By.xpath("//strong[contains(text(),'Item')]")).isDisplayed())
		   {
			    s=driver.findElement(By.xpath("//strong[contains(text(),'Item')]")).getText();
			   Assert.assertTrue(true, "user able to see the item with Item id:" + s );
		    	  log.info("user able to see the item with Item id:" + s);
		   }
		   
		   else
		   {
			   Assert.assertTrue(true, "user not able to see the item  ");
		    	  log.info( "user not able to see the item  ");
		   }
		   

		   if(driver.findElement(By.id("catalog_price")).isDisplayed())
		   {
			    s=driver.findElement(By.id("catalog_price")).getText();
			   Assert.assertTrue(true, "user able to see the item with Item Price:" + s );
		    	  log.info("user able to see the item with Item Price:" + s);
		   }
		   
		   else
		   {
			   Assert.assertTrue(true, "user not able to see the price  ");
		    	  log.info( "user not able to see the price  ");
		   }
		   
		   for(WebElement W:driver.findElements(By.xpath("//div[@id='product_image_carousel_thumbs']//img[@title='TV Wireless Headphones']")))
		   {
			   Reusables.ActionClick(W);
			   Thread.sleep(1000);
		   }

		   //WebElement W:driver.findElements(By.xpath("//ul[@class='nav nav-tabs hidden-xs']//a"))
		
		   List<WebElement> WL;
		if(ismobile && !(getBrowserType().equalsIgnoreCase("CHROMEIPAD")))
			 WL= driver.findElements(By.xpath("//div[@role='tabpanel']//a[@role='button']"));
		else
			WL= driver.findElements(By.xpath("//ul[@class='nav nav-tabs hidden-xs']//a"));
		
		   for(WebElement W:WL)
		   {
			  //System.out.println("1");
			   Reusables.ActionClick(W);
			   Thread.sleep(4000);
		   }
		   
		   Reusables.Mousescroll("UP");
		  
		   
		   
		   
		 
	    }

	   
	   @When("^User select the \"([^\"]*)\" with filter \"([^\"]*)\"$")
	    public void user_select_the_something_with_filter_something(String strArg1, String strArg2) throws Throwable {
	        String xpath;
	       
	        if(strArg2.contains("-"))
	       {
	        String[] str_array=strArg2.split("-");
	         Float litersOfPetrol=Float.parseFloat(str_array[0]);
	        DecimalFormat df = new DecimalFormat("0.00");
	        df.setMaximumFractionDigits(2);
	        String StartRange = df.format(litersOfPetrol);
	       
	         litersOfPetrol=Float.parseFloat(str_array[1]);
	         df.setMaximumFractionDigits(2);
	        String EndRange = df.format(litersOfPetrol);
	         xpath="//li[contains(text(),'"+strArg1+"')]//input[contains(@onclick,'"+StartRange+"') and contains(@onclick,'"+EndRange+"') ]";
	      // System.out.println(xpath);
	       }
	        
	        else{
	        	xpath="//li[contains(text(),'"+strArg1+"')]//input[contains(@onclick,'"+strArg2+"')]";
	        }
	       
	       // System.out.println(xpath);
	        
	      //driver.findElement(By.xpath(xpath)).click();
	      Reusables.ActionClick(driver.findElement(By.xpath(xpath)));
	        
	        Thread.sleep(2000);
	    
	   }
	   
	 
	   
	   @When("^User Click the button \"([^\"]*)\"$")
	    public void user_click_the_button_something(String strArg1) throws Throwable {
		   
		   Boolean b=true;
		   
		 if(strArg1.equalsIgnoreCase("Add To Cart"))
		 {
			 
			
				    		
				   		
			  
			 driver.manage().timeouts().implicitlyWait(500, TimeUnit.MILLISECONDS);
		   if(driver.findElements(By.id("colorPicker")).size()>0)
		   {
	    	int optioncount=driver.findElement(By.id("colorPicker")).findElement(By.id("product-size-picker")).findElements(By.tagName("option")).size();
			
	    	for(WebElement WE:driver.findElements(By.id("product-size-picker")))
	    	{
	    		int j=1;
	    	Select s=new Select(Reusables.GetNthElement(driver.findElements(By.id("product-size-picker")), j));
			
			for(int i=1;i<=optioncount;i++)
			{
				//System.out.println(i);
				s.selectByIndex(i);
				
				Thread.sleep(3000);
				String xpath="//input[@type='submit' and @value='Add To Cart']";
				if(driver.findElements(By.xpath(xpath)).size()>0)
				{
				//	System.out.println(i);
					break;
				}
			}
			j++;
	    	}
			Reusables.WaitforPageLoad();
		   }
		   
		   if(driver.findElements(By.id("ceritPicker")).size()>0)
		   {
			   int optioncount=driver.findElement(By.id("ceritPicker")).findElement(By.id("product-certificate-picker")).findElements(By.tagName("option")).size();
				Select s=new Select(driver.findElement(By.id("product-certificate-picker")));
				//int randomNum = ThreadLocalRandom.current().nextInt(0,optioncount);
				s.selectByVisibleText("$100-Happy Birthday");
				Reusables.WaitforPageLoad();
		   }
		   
		  
			if(driver.findElements(By.id("personlizationSelect")).size()>0)
			{
				Select SL=new Select(driver.findElement(By.id("personlizationSelect")));
				retryingFindClick(SL,"personalize");
				
				Thread.sleep(1000);
				if(driver.findElements(By.xpath("//div[@id='popup-personalize']//input")).size()>0)
				{
					driver.findElements(By.xpath("//div[@id='popup-personalize']//input")).get(0).sendKeys("TST");
					 String xpath="//input[@type='submit' and @value='Personalize item']";
				   					        
				        Reusables.ActionClick(driver.findElements(By.xpath(xpath)));
				        b=false;
					
				}
			}
		
			
		   
		 }
		 
		 if(b)
		 {
			driver.manage().timeouts().implicitlyWait(40, TimeUnit.SECONDS);
	        String xpath="//input[@type='submit' and @value='"+strArg1+"']";
	       // Reusables.waitforElement(driver.findElement(By.xpath(xpath)));
	       // System.out.println(driver.findElements(By.xpath(xpath)).size());
	        WD.until(ExpectedConditions.numberOfElementsToBeMoreThan(By.xpath(xpath), 0));
	        
	        Reusables.ActionClick(driver.findElements(By.xpath(xpath)));
		 }
	        
	        if(strArg1.equalsIgnoreCase("Add To Cart") & Reusables.GetTestProparty("AB_MINICART").equalsIgnoreCase("YES") )
			 {
	        WebDriverWait WD=new WebDriverWait(driver,10);
		      
	        try{
		    if(WD.until(ExpectedConditions.presenceOfAllElementsLocatedBy(By.linkText("VIEW CART"))).size()>0)
		    {
		    	//System.out.println(WD.until(ExpectedConditions.numberOfElementsToBeMoreThan(By.xpath("//div[@id='header_minicart']"), 0)));
		 		Thread.sleep(3000); 
		    	Reusables.ActionClick(driver.findElements(By.linkText("VIEW CART")));
		 	    
		    }
		    
		  
	        }
	        
	        catch(Exception E ){}
	        }
	        
	        driver.manage().timeouts().implicitlyWait(40, TimeUnit.SECONDS);
	    }
	  
	    
	   @Then("^User should  able to see the Error \"([^\"]*)\"$")
	    public void user_should_able_to_see_the_error_something(String strArg1) throws Throwable {
	        if(driver.findElement(By.xpath("//p[contains(text(),'There are no items to purchase in the order.')]")).isDisplayed())
	        {
	        	Assert.assertTrue(true,"User should  able to see the Error "+strArg1);
				log.info("User should  able to see the Error "+strArg1);
	        }
	        else
	        {
	        	Assert.fail("User not   able to see the Error "+strArg1);
	        	log.error("User not   able to see the Error "+strArg1);
	        }
	    }
	   
	   @Then("^User should able to see below buttons$")
	    public void user_should_able_to_see_below_buttons(List<String> StringList) throws Throwable {
		   
		   for(String s:StringList)
	       {
			   String xpath="//button[contains(text(),'"+s+"')]";
			   
			if (driver.findElements(By.xpath(xpath)).size() > 0) {
				Assert.assertTrue(true, "User able to see " + s + " Button on page");
				log.info("User able to see " + s + " Button on page");
			}

			else {
				Assert.fail("User not able to see " + s + " button on page");
				log.error("User not able to see " + s + " button on page");
			}
	       }
		   
	    }
	   
	   
	   @Then("^User able to see below text on page$")
	    public void user_able_to_see_below_text_on_page(List<String> StringList) throws Throwable {
		   //Reusables.WaitforPageLoad();
		
		   //System.out.println(bodyText);
		   
		   driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		   
		   
	       for(String s:StringList)
	       {
	    	   if((s.contains("Thank You For Your Order!") || s.contains("Your Order Number is")) && isProd) 
	    	   {
	    		   log.info("User not able to see below text on page");
	    		   
	    		   break ; 
	    		   
	    	   }
	    		   
	       List<WebElement> list = driver.findElements(By.xpath("//*[contains(text(),'"+s+"')]"));
	       String bodyText = driver.findElement(By.tagName("html")).getText();
	       //System.out.println(list.size());
	    	   if(bodyText.contains(s) || list.size()>0)
	    	   {
	    		   Assert.assertTrue(true, "User able to see "+s+" text on page");
	    		   log.info("User able to see "+s+" text on page");
	    	   }
	    	   else
	    	   {
	    		   log.error("User not able to see "+s+" text on page");
	    		   Assert.fail("User not able to see "+s+" text on page");
	    		  
	    	   }
	       }
	       driver.manage().timeouts().implicitlyWait(40, TimeUnit.SECONDS);
	    }
	   
	   
	   
	   @When("^User enter \"([^\"]*)\" in text field with \"([^\"]*)\" \"([^\"]*)\"$")
	    public void user_enter_something_in_text_field_with_something_something(String strArg1, String strArg2, String strArg3) throws Throwable {
		   if(strArg2.equalsIgnoreCase("ID"))
	        {
	        	driver.findElement(By.id(strArg3)).sendKeys(strArg1);
	        }
	        if(strArg2.equalsIgnoreCase("NAME"))
	        {
	        	driver.findElement(By.name(strArg3)).sendKeys(strArg1);
	        }
	        if(strArg2.equalsIgnoreCase("LINKTEXT"))
	        {
	        	driver.findElement(By.linkText(strArg3)).sendKeys(strArg1);
	        }
	        if(strArg2.equalsIgnoreCase("XPATH"))
	        {
	        	driver.findElement(By.xpath(strArg3)).sendKeys(strArg1);
	        }
	    }

	   
	   @Then("^User should able to see \"([^\"]*)\" radio button and must be set to \"([^\"]*)\"$")
	    public void user_should_able_to_see_something_radio_button_and_must_be_set_to_something(String strArg1, String strArg2) throws Throwable {
	        String xpath="//label[text()='"+strArg1+"']";
	       // System.out.println(xpath);
	        if(strArg2.equalsIgnoreCase("ON"))
	        {
	        	//if(!driver.findElement(By.xpath(xpath)).isSelected())
	        		driver.findElement(By.xpath(xpath)).click();
	        }
	        else
	        	{
	        	//if(driver.findElement(By.xpath(xpath)).isSelected())
	        		driver.findElement(By.xpath(xpath)).click();
	        }
	        
	    }
	   
	   @Given("^User login to the application$")
	    public void user_login_to_the_application() throws Throwable {
		   
		   Reusables.ActionClick(driver.findElements(By.xpath("//i[@class='fa fa-user']")));
	
		  
	        Reusables.ActionClick(driver.findElements(By.xpath("//a[text()='Login']")));
	        driver.findElement(By.id("emailAddressFormId")).click();
	        driver.findElement(By.id("emailAddressFormId")).clear();
	        driver.findElement(By.id("emailAddressFormId")).sendKeys(Reusables.GetTestProparty("EMAIL"));
	        
	        driver.findElement(By.id("loginPassword")).click();
	        driver.findElement(By.id("loginPassword")).clear();
	        driver.findElement(By.id("loginPassword")).sendKeys(Reusables.GetTestProparty("PASSWORD"));
	        driver.findElement(By.name("/atg/userprofiling/ProfileFormHandler.login")).click();
	        user_check_that_the_browser_title_contains_something("My Account");
	       driver.get(Reusables.GetTestProparty("URL"));
	    }
	   
	   @Given("^User login to the application as order user$")
	    public void user_login_to_the_application_order() throws Throwable {
		   
		   Reusables.ActionClick(driver.findElements(By.xpath("//i[@class='fa fa-user']")));
	
		  
	        Reusables.ActionClick(driver.findElements(By.xpath("//a[text()='Login']")));
	        driver.findElement(By.id("emailAddressFormId")).click();
	        driver.findElement(By.id("emailAddressFormId")).clear();
	        driver.findElement(By.id("emailAddressFormId")).sendKeys(Reusables.GetTestProparty("ORDEREMAIL"));
	        
	        driver.findElement(By.id("loginPassword")).click();
	        driver.findElement(By.id("loginPassword")).clear();
	        driver.findElement(By.id("loginPassword")).sendKeys(Reusables.GetTestProparty("ORDERPASSWORD"));
	        driver.findElement(By.name("/atg/userprofiling/ProfileFormHandler.login")).click();
	        user_check_that_the_browser_title_contains_something("My Account");
	       driver.get(Reusables.GetTestProparty("URL"));
	    }
	   
	   @Given("^User login to the application with user$")
	   public void user_login_to_the_application_with_user() throws Throwable {
		   
		   Reusables.ActionClick(driver.findElements(By.xpath("//i[@class='fa fa-user']")));
	
		  
	        Reusables.ActionClick(driver.findElements(By.xpath("//a[text()='Login']")));
	        driver.findElement(By.id("emailAddressFormId")).click();
	        driver.findElement(By.id("emailAddressFormId")).clear();
	        driver.findElement(By.id("emailAddressFormId")).sendKeys(Reusables.GetTestProparty("ORDEREMAIL"));
	        
	        driver.findElement(By.id("loginPassword")).click();
	        driver.findElement(By.id("loginPassword")).clear();
	        driver.findElement(By.id("loginPassword")).sendKeys(Reusables.GetTestProparty("ORDERPASSWORD"));
	        driver.findElement(By.name("/atg/userprofiling/ProfileFormHandler.login")).click();
	        user_check_that_the_browser_title_contains_something("My Account");
	     
	    }
	   

	    @Given("^User login to the application as VIP user$")
	    public void user_login_to_the_application_as_vip_user() throws Throwable {
	    	Reusables.ActionClick(driver.findElements(By.xpath("//i[@class='fa fa-user']")));
	    	
			  
	        Reusables.ActionClick(driver.findElements(By.xpath("//a[text()='Login']")));
	        driver.findElement(By.id("emailAddressFormId")).click();
	        driver.findElement(By.id("emailAddressFormId")).clear();
	        driver.findElement(By.id("emailAddressFormId")).sendKeys(Reusables.GetTestProparty("VIPEMAIL"));
	        
	        driver.findElement(By.id("loginPassword")).click();
	        driver.findElement(By.id("loginPassword")).clear();
	        driver.findElement(By.id("loginPassword")).sendKeys(Reusables.GetTestProparty("PASSWORD"));
	        driver.findElement(By.name("/atg/userprofiling/ProfileFormHandler.login")).click();
	        user_check_that_the_browser_title_contains_something("My Account");
	       driver.get(Reusables.GetTestProparty("URL"));
	    }
	   
	   @When("^User enter invalid user credentials$")
	    public void user_enter_invalid_user_credentials() throws Throwable {
		   driver.findElement(By.id("emailAddressFormId")).click();
	        driver.findElement(By.id("emailAddressFormId")).clear();
	        driver.findElement(By.id("emailAddressFormId")).sendKeys(Reusables.RandomString()+"@gmail.com");
	        driver.findElement(By.id("loginPassword")).click();
	        driver.findElement(By.id("loginPassword")).clear();
	        driver.findElement(By.id("loginPassword")).sendKeys("eytewq");
	    }

	   
	   @When("^User clear the cart items$")
	    public void user_clear_the_cart_items() throws Throwable {
		  
	/*	if(!driver.findElement(By.xpath("//span[@class='cartStar']")).getText().contains("0"))
		{
		   WebElement WE=WD.until(ExpectedConditions.elementToBeClickable(By.xpath("//select[@class='input']")));
			
		   for(WebElement W:driver.findElements(By.xpath("//select[@class='input']")))
		   {
			   Thread.sleep(5000);
		   Select s=new Select(W);
			s.selectByValue("0");
			Thread.sleep(5000);
		   }*/
		   
		   while(!driver.findElement(By.xpath("//span[@class='cartStar']")).getText().contains("0"))
		   {
			   driver.findElement(By.xpath("//u[contains(text(),'Remove')]")).click();
			   Thread.sleep(3000);
		   }
		 /* for(WebElement W:driver.findElements(By.xpath("//u[contains(text(),'Remove')]")))
			{
			  System.out.println(driver.findElement(By.xpath("//span[@class='cartStar']")).getText());
				Reusables.ActionClick(W);
				Thread.sleep(3000);
		    }*/
		  
		
	   }
	   @When("^User able to enter address$")
	    public void user_able_to_enter_address() throws Throwable {
		  
	        driver.findElement(By.id("nickName")).clear();
	        driver.findElement(By.id("nickName")).sendKeys("Home");
	        
	        driver.findElement(By.id("firstName")).clear();
	        driver.findElement(By.id("firstName")).sendKeys("ttt");
	     
	        driver.findElement(By.id("lastName")).clear();
	        driver.findElement(By.id("lastName")).sendKeys("kkk");
	        
	      
	        driver.findElement(By.id("address1")).clear();
	        driver.findElement(By.id("address1")).sendKeys("2444 MERCHANT AVE STE 103");
	       
	        driver.findElement(By.id("city")).clear();
	        driver.findElement(By.id("city")).sendKeys("Odessa");
	      
	        if (!driver.findElement(By.xpath("//select[@id='state']//option[11]")).isSelected()) {
	            driver.findElement(By.xpath("//select[@id='state']//option[11]")).click();
	        }
	      
	      
	        driver.findElement(By.id("sPostalCode")).clear();
	        driver.findElement(By.id("sPostalCode")).sendKeys("33556");
	      
	        driver.findElement(By.id("phoneOne")).clear();
	        driver.findElement(By.id("phoneOne")).sendKeys("123");
	        
	        driver.findElement(By.id("phoneTwo")).clear();
	        driver.findElement(By.id("phoneTwo")).sendKeys("567");
	    
	        driver.findElement(By.id("phoneThree")).clear();
	        driver.findElement(By.id("phoneThree")).sendKeys("5679");
	        
	        Reusables.ActionClick(driver.findElement(By.name("/atg/userprofiling/ProfileFormHandler.addAddress")));
	    }
	   @Then("^User logout from application$")
	    public void user_logout_from_application() throws Throwable {
		 
		   Reusables.ActionClick(driver.findElements(By.xpath("//i[@class='fa fa-user']")));
		   Reusables.ActionClick(driver.findElements(By.xpath("//a[text()='Sign Out']")));
		  
	    }
	   
	   @When("^User enter (.*) promo code$")
	    public void user_enter_promo_code(String arg) throws Throwable { 
		   
		   if(arg.equalsIgnoreCase("valid"))
		   {
		   price=driver.findElement(By.xpath("//td[text()='Subtotal:']/following-sibling::td")).getText();
		   Reusables.ActionClick(driver.findElement(By.xpath("//a[contains(@class,'MysteryCoupon')]")));
	       driver.findElement(By.id("firstVisitEmail")).sendKeys(Reusables.RandomString()+"@gmail.com");
	       WD.until(ExpectedConditions.elementToBeClickable(driver.findElement(By.name("/razor360/si/droplet/firstVisitCoupon/FirstVisitCouponFormHandler.firstVisitCouponSubmit"))));
	       Reusables.ActionClick(driver.findElement(By.name("/razor360/si/droplet/firstVisitCoupon/FirstVisitCouponFormHandler.firstVisitCouponSubmit")));
		  WD.until(ExpectedConditions.elementToBeClickable(By.id("firstVisitCode")));
		  
	       String code=driver.findElement(By.id("firstVisitCode")).getText();
	     log.info("User enter"+code+" promo code");
	   
	       
	       Reusables.ActionClick(driver.findElement(By.xpath("//span[@id='popup-close-firstVisit']")));
	       
	       driver.findElement(By.xpath("//input[contains(@id,'promo')]")).sendKeys(code);
		   }
		   
		   else
		   {
			   //driver.findElement(By.id("promo-code-textbox")).sendKeys("SDFFAF");
			   driver.findElement(By.xpath("//input[contains(@id,'promo')]")).sendKeys("SDFFAF");
		   }
	    }
	   
	   @Then("^User enter mystery code$")
	    public void user_enter_mystery_code() throws Throwable {
		   String code=driver.findElement(By.id("firstVisitCode")).getText();
		     log.info("User enter"+code+" promo code");
		   
		       
		       Reusables.ActionClick(driver.findElement(By.xpath("//span[@id='popup-close-firstVisit']")));
		       
		       driver.findElement(By.xpath("//input[contains(@id,'promo')]")).sendKeys(code);
	    }

	   
	   @Then("^User should able to see the promotion code price$")
	    public void user_should_able_to_see_the_promotion_code_price() throws Throwable {
		   
		  System.out.println(price);
		  String discountamount=driver.findElement(By.xpath("//td[text()='Promotions:']/following-sibling::td")).getText();
		  System.out.println(discountamount);
		  String upprice=driver.findElement(By.xpath("//td[text()='Subtotal:']/following-sibling::td")).getText();
		  System.out.println(upprice);
		  
		  double oldprice=Double.parseDouble(price.substring(1, price.length()));
		  Float dis=Float.parseFloat(discountamount.substring(3,discountamount.length()));
		  Float finalprice=Float.parseFloat(upprice.substring(1,upprice.length()));
		  
	
		
		  
		  double roundOff = Math.round(Float.sum(dis,finalprice) * 100.0) / 100.0;
		 // System.out.println(Double.compare(roundOff, oldprice));
		// System.out.println(roundOff+":"+oldprice);
		if(Double.compare(roundOff, oldprice)==0 )
		{
		  
	   Assert.assertTrue(true, "User is able to see the promotion code price");
	   log.info("User is able to see the promotion code price");
	    }
		
		else
		{
			Assert.fail("User not  able to see the promotion code price");
			log.fatal("User not  able to see the promotion code price");
		}
	   }
	   
	   @When("^User enter (.*) Gift code and click Apply$")
	    public void user_enter_invalid_gift_code(String arg) throws Throwable {
		   
		 //  WD.until(ExpectedConditions.elementToBeClickable(By.id("atg_store_giftCertificateInput")));
		   Thread.sleep(3000);
		   if(arg.equalsIgnoreCase("valid"))
		   {
		   price=driver.findElement(By.xpath("//td[text()='Subtotal:']/following-sibling::td")).getText();
		   if(driver.getCurrentUrl().contains("www.sharperimage.com"))
		   driver.findElement(By.id("atg_store_giftCertificateInput")).sendKeys(Reusables.GetTestProparty("PRODUCTIONGIFTCARD"));
		   
		   else if(driver.getCurrentUrl().contains("sio-stg-store.sparkred.com"))
			   driver.findElement(By.id("atg_store_giftCertificateInput")).sendKeys(Reusables.GetTestProparty("STAGINGGIFTCARD"));
		   
		   
		   }
		   
		   else
		   {
			   
			  // driver.findElement(By.id("atg_store_giftCertificateInput")).click();
			 //  driver.findElement(By.id("atg_store_giftCertificateInput")).clear();
			 //  driver.findElement(By.id("atg_store_giftCertificateInput")).sendKeys("12345678");
			   JS.executeScript("arguments[0].value=12345678;", driver.findElement(By.id("atg_store_giftCertificateInput")));
			   
			   
			  //System.out.println("enter invalid");
		   }
		   
		   Thread.sleep(3000);
		   if(ismobile)
		   {
			   driver.findElement(By.id("atg_store_giftCertificateInput")).sendKeys(Keys.ENTER);
		   }
		   else
		   {
		   String xpath="//div[@class='gift-cert-open']//input[@class='button']";
		   Reusables.ActionClick(driver.findElement(By.xpath(xpath)));
		   }
		   
	    }
	   
	    @When("^User click the  giftcard$")
	    public void user_click_the_giftcard() throws Throwable {
	    	
	    	Reusables.ActionClick(driver.findElement(By.linkText("Apply a gift certificate/cash back coupon")));
	    
	    	Thread.sleep(2000);
	    	if(!(driver.findElements(By.id("atg_store_giftCertificateInput")).size()==1))
	    	{
	    		driver.findElement(By.linkText("Apply a gift certificate/cash back coupon")).click();
	    	}
	    	
	    	log.info(driver.findElements(By.id("atg_store_giftCertificateInput")).size());
	    }
	    

	    @When("^User Click the Create an Account$")
	    public void user_click_the_create_an_account() throws Throwable {
	    	WD.until(ExpectedConditions.elementToBeClickable(By.xpath("//button[contains(text(),'Create an Account')]")));
	    	Reusables.ActionClick(driver.findElement(By.xpath("//button[contains(text(),'Create an Account')]")));
	    }

	    @Then("^User should enter  details for Order search$")
	    public void user_should_enter_details_for_order_search_somethingsomething(List<String> str) throws Throwable {
	      int i=0;
	      WD.until(ExpectedConditions.numberOfElementsToBeMoreThan(By.xpath("//div[@class='form-group collapse in']//input"), 1));
	    	for(WebElement W:driver.findElements(By.xpath("//div[@class='form-group collapse in']//input")))
	    	{
	    		//System.out.println(str.get(i));
	    		//System.out.println(Reusables.GetTestProparty(str.get(i)));
	    		if(!str.get(i).isEmpty())
	    		{
	    			WD.until(ExpectedConditions.elementToBeClickable(W));
	    			W.click();
	    			W.clear();
	    			if(str.get(i).toUpperCase().equals("ORDER"))
	    			{
	    				System.out.println(Order);
	    				W.sendKeys(Order);
	    			}
	    			else
	    			{
	    		     W.sendKeys(Reusables.GetTestProparty(str.get(i).toUpperCase()));
	    			}
	    		}
	    		i++;
	    	}
	    
	    }
	    
	    
	    @Then("^User should enter  details for \"([^\"]*)\"$")
	    public void user_should_enter_details_for_something(String strArg1) throws Throwable {
	      
	    	WD.until(ExpectedConditions.numberOfElementsToBeMoreThan(By.xpath("//input[@class='form-control']"), 5));
	    	List<WebElement> L=driver.findElements(By.xpath("//input[@class='form-control']"));
	    	if(strArg1.equalsIgnoreCase("Sharper Image Account"))
	       {
			L.get(0).click();
			L.get(0).clear();
			L.get(0).sendKeys(Reusables.GetTestProparty("EMAIL"));
			L.get(1).click();
			L.get(1).clear();
			L.get(1).sendKeys(Reusables.GetTestProparty("PASSWORD"));
	       }
	    	
	    	if(strArg1.equalsIgnoreCase("Email Address and Zip Code"))
		       {
				L.get(2).click();
				L.get(2).clear();
				L.get(2).sendKeys(Reusables.GetTestProparty("EMAIL"));
				L.get(3).click();
				L.get(3).clear();
				L.get(3).sendKeys(Reusables.GetTestProparty("ZIPCODE"));
		       }
	    	
	    	
	    	
	    	if(strArg1.equalsIgnoreCase("Order Number and Zip Code"))
		       {
				L.get(4).click();
				L.get(4).clear();
				L.get(4).sendKeys(Order);
				L.get(5).click();
				L.get(5).clear();
				L.get(5).sendKeys(Reusables.GetTestProparty("ZIPCODE"));
		       }
	    }
	    
	    @Then("^User should not enter  details for \"([^\"]*)\"$")
	    public void user_should_enter_details_for_something1(String strArg1) throws Throwable {
	    	WD.until(ExpectedConditions.numberOfElementsToBeMoreThan(By.xpath("//input[@class='form-control']"), 5));
	    	List<WebElement> L=driver.findElements(By.xpath("//input[@class='form-control']"));
	    	if(strArg1.equalsIgnoreCase("Sharper Image Account"))
	       {
			L.get(0).click();
			L.get(0).clear();
			
			L.get(1).click();
			L.get(1).clear();
	
	       }
	    	
	    	if(strArg1.equalsIgnoreCase("Email Address and Zip Code"))
		       {
				L.get(2).click();
				L.get(2).clear();
				
				L.get(3).click();
				L.get(3).clear();
		
		       }
	    	
	    	if(strArg1.equalsIgnoreCase("Order Number and Zip Code"))
		       {
				L.get(4).click();
				L.get(4).clear();
			
				L.get(5).click();
				L.get(5).clear();
		
		       }
	    }
	    
	    @Then("^User is not able to seethe incomplete order$")
	    public void user_is_not_able_to_seethe_incomplete_order() throws Throwable {
	    	
	    	WD.until(ExpectedConditions.numberOfElementsToBeMoreThan(By.id("order_history_accordion_group"), 0));
		      
	    	if(driver.findElements(By.id("order_history_accordion_group")).size()>0)
	    	{
	    		
	    		Assert.assertTrue(true, "User able to see the orders");
	    		   log.info("User able to see the orders");
	    		   
	    		   driver.manage().timeouts().implicitlyWait(1, TimeUnit.SECONDS);
	    		   if(driver.findElement(By.id("order_history_accordion_group")).findElements(By.xpath("//span[contains(text(),'Status: In Complete')]")).size()==0)
	    		   {
	    			   Assert.assertTrue(true, "User is not able to seethe incomplete order");
		    		   log.info("User is not able to seethe incomplete order");
	    		   }
	    		   
	    		   else
	    		   {
	    			   Assert.fail("User is  able to seethe incomplete order");
		    		   log.error("User is  able to seethe incomplete order");
	    		   }
	    		   
	    		   driver.manage().timeouts().implicitlyWait(40, TimeUnit.SECONDS);
	    	}
	    	
	    	 else
	    	   {
	    		   Assert.fail("User not  able to see the orders");
	    		   log.error("User not able to see the orders");
	    	   }
	        
	    }
	    
	    @When("^User is able to see and click the order$")
	    public void user_is_able_to_see_and_click_the_order() throws Throwable {
	    	
	    	WebDriverWait WD=new WebDriverWait(driver,180);
	    	WD.until(ExpectedConditions.numberOfElementsToBeMoreThan(By.id("order_history_accordion_group"), 0));
	      
	    	if(driver.findElements(By.id("order_history_accordion_group")).size()>0)
	    	{
	    		
	    		Assert.assertTrue(true, "User able to see the orders");
	    		   log.info("User able to see the orders");
	    		   
	    		 //System.out.println(driver.findElements(By.xpath("//a[contains(text(),'Order No. ')]")).size());
	    		   //Order=Order.replace("Order No. ", "").trim();
	    		   ////span[contains(text(),'In')]//..
	    		   String xpath="//a[contains(text(),'Order No. ')]";
	    		   WD.until(ExpectedConditions.elementToBeClickable(By.xpath(xpath)));
	    		   Order=driver.findElement(By.xpath(xpath)).getText();
	    		   Order=Order.replace("Order No. ", "").trim();
	    		   WD.until(ExpectedConditions.elementToBeClickable(By.xpath(xpath)));
	    		   driver.manage().timeouts().implicitlyWait(2, TimeUnit.SECONDS);
	    		   if(!(driver.findElements(By.xpath("//table[@class='table table-bordered table-responsive ']")).size()>0))
	    		   {
	    		   Reusables.ActionClick(driver.findElement(By.xpath(xpath)));
	    		   }
	    		   
	    		   driver.manage().timeouts().implicitlyWait(40, TimeUnit.SECONDS);
	    		   
	    		   try{
	    		   WD.until(ExpectedConditions.numberOfElementsToBeMoreThan(By.xpath("//table[@class='table table-bordered table-responsive ']"), 0));
	    		   
	    		   }
	    		   
	    		   catch(Exception e)
	    		   {
	    			   log.error("User not able to see the order details");
	    			   Assert.fail("User not  able to see the order details");
		    		   
	    		   }
	    	   }
	    	   else
	    	   {
	    		   Assert.fail("User not  able to see the orders");
	    		   log.error("User not able to see the orders");
	    	   }
	    }
	    
	    
	    @When("^User is able to see and click the order as user$")
	    public void user_is_able_to_see_and_click_the_order_as_user() throws Throwable {
	    	if(driver.findElements(By.xpath("//table[contains(@class,'order-history')]")).size()>0)
	    	{
	    		
	    		Assert.assertTrue(true, "User able to see the orders");
	    		   log.info("User able to see the orders");
	    		   Order=driver.findElement(By.xpath("//a[contains(text(),'ORD')]")).getText();
	    		   driver.findElement(By.xpath("//a[contains(text(),'ORD')]")).click();
	    		 
	    	   }
	    	   else
	    	   {
	    		   Assert.fail("User not  able to see the orders");
	    		   log.error("User not able to see the orders");
	    	   }
	    }
	    
	    @Then("^User able to see the Order details$")
	    public void user_able_to_see_the_order_details() throws Throwable {
	    	Thread.sleep(2000);
	    	 String s=driver.findElement(By.xpath("//table[ @class='table table-bordered table-responsive ' or @class='table table-responsive thank-you-items']")).getText();
	    	 
	    	 if((s.contains("Item")||ismobile) && s.contains("Quantity") && s.contains("Price Each") && s.contains("Total") )
	    	 {
	    		 Assert.assertTrue(true, "User able to see the orders item details");
	    		   log.info("User able to see the orders item details");
	    	 }
	    	 else
	    	 {
	    		 Assert.fail("User not able to see the orders item details");
	    		   log.error("User not able to see the orders item details");
	    	 }
	    	 
	    	 driver.navigate().refresh();
	    	 try{
	    	        driver.switchTo().alert().accept();
	    	        }
	    	        catch(Exception e){}
	    	        		
			  Reusables.WaitforPageLoad();
	    }
	    
	    
	    @When("^User close child window and switch back to main window$")
	    public void user_close_child_window_and_switch_back_to_main_window() throws Throwable {
	        
	    	Reusables.switchtoparentwindow();
	    }

	    @Then("^User is able to see the order details page open in next window$")
	    public void user_is_able_to_see_the_order_details_page_open_in_next_window() throws Throwable {
	    	Thread.sleep(3000);
	       Reusables.switchwindow();
	       List<String> L = new ArrayList<String>();
	       L.add("Order Detail");
	       L.add("Need to Track Your Order? No Problem!");
	       
	       user_able_to_see_below_text_on_page(L);
	    }
	    
	    @Then("^User switch window$")
	    public void user_switch_window() throws Throwable {
	    	Reusables.switchwindow();
	    }

	    @When("^User search with \"([^\"]*)\"$")
	    public void user_search_with_something(String strArg1) throws Throwable {
	    	Thread.sleep(2000);
	    	WD.until(ExpectedConditions.elementToBeClickable(By.id("question")));
	      //  driver.findElement(By.id("question")).click();
	        driver.findElement(By.id("question")).clear();
	        driver.findElement(By.id("question")).sendKeys(strArg1);
	        driver.findElement(By.xpath("//form[@id='searchForm']/button")).click();

	    } 
	    
	    
	    public boolean retryingFindClick(Select S,String i) {
	        boolean result = false;
	        int attempts = 0;
	        while(attempts < 3) {
	            try {
	            	Thread.sleep(2000);
	            	S.selectByValue(i);
	                result = true;
	                break;
	            } catch(Exception e) {
	            }
	            attempts++;
	            
	            
	        }
	        return result;
	}
	    
	    public boolean retryingFind(Select S,int i) {
	        boolean result = false;
	        int attempts = 0;
	        while(attempts < 20) {
	            try {
	            	Thread.sleep(2000);
	            	System.out.println(i);
	            	S.selectByIndex(i);
	                result = true;
	                break;
	            } catch(Exception e) {
	            }
	            attempts++;
	            
	            
	        }
	        return result;
	}
	    
	    @When("^User add below product to cart$")
	    public void user_add_below_product_to_cart(List<String> ProductList) throws Throwable {
	    	
	    	driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	    	Date date = new Date();
			SimpleDateFormat sdf =new SimpleDateFormat("MM/dd/yyyy h:mm:ss a");
			String timeStamp = sdf.format(date);
	    	ExtentReports extent = new ExtentReports("target/SKU_Valid_"+timeStamp.replaceAll("[^\\w]", "_")+".html", true);
	    	ExtentTest test = extent.startTest("SKU validation");
	    	
	    	
	    	for(String s:ProductList)
	    	{
	    		/*String[] parts = s.split("-");
	    		String part1 = parts[0].trim(); // 004
	    		String part2 = parts[1];
	    		
	    		//System.out.println(Integer.parseInt(part2));
	    		int index=Integer.parseInt(part2)-1;
	    		*/
	    		WD.until(ExpectedConditions.elementToBeClickable(By.id("question")));
		        driver.findElement(By.id("question")).clear();
		        driver.findElement(By.id("question")).sendKeys(s);
		        Reusables.ActionClick(driver.findElement(By.xpath("//form[@id='searchForm']/button")));
		        
		        int size=driver.findElements(By.id("product-size-picker")).size();
		        
		       if(driver.findElements(By.id("personlizationSelect")).size()>0 || size>0)
		       {
		    	   String url=driver.getCurrentUrl();
		    	   int optioncount=0;  
		    	   Select pick = null;
		    	   Select SL=null;
		        	if(size>0)
		        	{
		        	optioncount=driver.findElement(By.id("product-size-picker")).findElements(By.tagName("option")).size();
		        	pick=new Select(driver.findElement(By.id("product-size-picker")));
		        	}
		        	
		        	else
		        	{
		        		optioncount=2;
		        		 SL=new Select(driver.findElement(By.id("personlizationSelect")));
		        	}
		        	
					
					for(int i=1;i<optioncount;i++)
					{
						//System.out.println(i);
						//WD.until(ExpectedConditions.elementSelectionStateToBe(driver.findElement(By.id("personlizationSelect")), true));
						
						//SL.selectByIndex(i);
						if(size>0)
						{
							retryingFind(pick,i);
							//pick.selectByIndex(i);
							 SL=new Select(driver.findElement(By.id("personlizationSelect")));
						}
						
					
						retryingFindClick(SL,"personalize");
						
						Thread.sleep(1000);
						if(driver.findElements(By.xpath("//div[@id='popup-personalize']//input")).size()>0)
						{
							driver.findElements(By.xpath("//div[@id='popup-personalize']//input")).get(0).sendKeys("TST");
							 String xpath="//input[@type='submit' and @value='Personalize item']";
						   					        
						        Reusables.ActionClick(driver.findElements(By.xpath(xpath)));
							
						}
						
						else
						{
						String xpath="//input[@type='submit' and @value='Add To Cart']";
						Reusables.ActionClick(driver.findElement(By.xpath(xpath)));
						}
						
						if(driver.findElements(By.xpath("//span[@class='cartStar']")).size()>0)
						{
							 test.log(LogStatus.PASS,"user is able to add an item :"+s+"to cart");
							 
						}
						else
						{
							test.log(LogStatus.FAIL,"user is not able to add an item :"+s+"to cart");
							
						}
						
						
						
					}	
		        
		       }
		       
		       else
		       {
		    	   test.log(LogStatus.FAIL,"user is not able to find an item :"+s);
		       }
		        
	    	}
	    	
	    	 extent.endTest(test);
	    	  extent.flush();
	      
	    	
	    }
	    
	    @Given("^User validate broken linkes \"([^\"]*)\"$")
	    public void user_validate_broken_linkes_something(String strArg1) throws Throwable {
	        if(strArg1.isEmpty())
	        {
	        	BrokenLinks B=new BrokenLinks();
	        	B.testBrokenLinks(Reusables.GetTestProparty("URL"));
	        }
	    }
	   
	    
	    @Given("^User validate broken Images \"([^\"]*)\"$")
	    public void user_validate_broken_images_something(String strArg1) throws Throwable {
	    	 if(strArg1.isEmpty())
		        {
	    		 BrokenImages B=new BrokenImages();
		        	B.testBrokenImages(Reusables.GetTestProparty("URL"));
		        }
	    }
	    
	    @When("^User able to click the \"([^\"]*)\"from sidetab$")
	    public void user_able_to_click_the_somethingfrom_sidetab(String strArg1) throws Throwable {
	    	String xpath="//span[contains(text(),'"+strArg1+"')]";
	   
	    	
	    	Reusables.ActionClick(	WD.until(ExpectedConditions.elementToBeClickable(By.xpath(xpath))));

		try {

			WebElement WE = WD.until(
					ExpectedConditions.visibilityOfElementLocated(By.xpath("//span[@id='popup-close-firstVisit']")));

			if (WE.isDisplayed()) {
				Reusables.ActionClick(WE);
			}
		}

		catch (Exception E) {
			// Assert.fail("User Navigation got failed", E);
		}
	    }

	    @Then("^User should able to see all the items$")
	    public void user_should_able_to_see_all_the_items() throws Throwable {
	       String s=driver.findElement(By.xpath("//span[contains(@class,'list-view-status')]")).getText();
	       
	       int itemCount=driver.findElements(By.xpath("//div[contains(@class,'col-lg-4 col-md-4 col-sm-6 col-xs-6 resultCell')]")).size();
	       
	       if(s.contains(Integer.toString(itemCount)))
	       {
	    	   Assert.assertTrue(true,"User should able to see all the items");
	    	   log.info("User should able to see all the items");
	       }
	       else
	       {
	    	   log.error("User not  able to see all the items");
	    	   Assert.fail("User not  able to see all the items");
	       }
	    }

	    @Then("^User able to see the popup with phonenumber$")
	    public void user_able_to_see_the_popup_with_phonenumber() throws Throwable {
	    	
	    	
	    	if (WD.until(ExpectedConditions.textToBePresentInElement(driver.findElement(By.tagName("html")), "For large orders and corporate gifts, please call 800-721-0644 to speak to a live representative"))) 
	    	{
	            log.info("User able to see the popup with phonenumber");
	            Assert.assertTrue(true, "User able to see the popup with phonenumber");
	        }
	    	else
	    	{
	    		log.error("User not able to see the popup with phonenumber");
	    		Assert.fail("User not able to see the popup with phonenumber");
	    	}
	    }

	    @Then("^User Close the popup$")
	    public void user_close_the_popup() throws Throwable {
	    	Reusables.ActionClick(driver.findElements(By.xpath("//div[@id='large_order_qty']//button[@class='close']")));
	    }
	    
	    @Then("^User should able to see promocode is not applied on Giftcard$")
	    public void user_should_able_to_see_promocode_is_not_applied_on_giftcard() throws Throwable {
	        for(WebElement WE:driver.findElements(By.xpath("//tr[@class='cart-box-item']")))
	        {
	        	if(WE.getText().contains("Gift Card")){
	        		if(WE.getText().contains("Promotions:"))
	        		{
	        			log.error("User  able to see promocode is  applied on Giftcard");
	        			Assert.fail("User  able to see promocode is  applied on Giftcard");
	        		}
	        		else
	        		{
	        			log.info("User should able to see promocode is not applied on Giftcard");
	        			Assert.assertTrue(true,"User should able to see promocode is not applied on Giftcard");
	        		}
	        	}
	        	
	        	else
	        	{
	        		if(WE.getText().contains("Promotions:"))
	        		{
	        			log.info("User  able to see promocode is  applied on OtherItems");
	        			Assert.assertTrue(true,"User  able to see promocode is  applied on OtherItems");
	        		}
	        		else
	        		{
	        			log.error("User should able to see promocode is not applied on OtherItems");
	        			Assert.fail("User should able to see promocode is not applied on OtherItems");
	        		}
	        	}
	        }
	        
	        
	    }
	    
	    

	    @When("^User navigate to back Page$")
	    public void user_navigate_to_back_page() throws Throwable {
	       driver.navigate().back();
	       Reusables.WaitforPageLoad();
	       
	    }
	    
	    @Then("^User able to see the below links under \"([^\"]*)\"$")
	    public void user_able_to_see_the_below_links_under_something(String strArg1,List<String> StringList) throws Throwable {
	        
	    	String xpath="//h3[contains(text(),'"+strArg1+"')]//..//a";
	    	
	    	for(WebElement WB:driver.findElements(By.xpath(xpath)))
	    	{
	    		if(StringList.contains(WB.getText().trim()))
	    		{
	    			log.info("User able to see the below link:"+WB.getText());
	    			assertTrue(true, "User able to see the below link:"+WB.getText());
	    		}
	    		
	    		else
	    		{
	    			log.error("User not able to see the below link:"+WB.getText());
	    			Assert.fail("User able to see the below link:"+WB.getText());
	    		}
	    			
	    	}
	    }
	    

	    @Then("^User able to see the below links under \"([^\"]*)\" and Click$")
	    public void user_able_to_see_the_below_links_under_something_and_click(String strArg1) throws Throwable {
	    	String xpath="//div[@id='faqAccordion']//a[starts-with(text(),'Q:')]";
	    	
	    	if(strArg1.contains("Press Releases"))
	    	{
	    		 xpath="//div[@id='faqAccordion']//a";	
	    	}
	    	
	    	System.out.println(driver.findElements(By.xpath(xpath)).size());
	    	int i=1;
	    	for(WebElement WB:driver.findElements(By.xpath(xpath)))
	    	{
	    		Reusables.ActionClick(WB);
	    		Thread.sleep(500);
	    		log.info("User Click on the link ::" + WB.getText());
	    		log.info("User able to see the answer ::" + WB.getText());
	    		Assert.assertTrue(true, "User Click on the link ::" + WB.getText());
	    		i++;
	    	}
	    }
	    
	    @When("^User should able to submit his contact info$")
	    public void user_should_able_to_submit_his_contact_info() throws Throwable {
	    	//driver.findElement(By.id("sFirstName")).click();
	        driver.findElement(By.id("sFirstName")).clear();
	        driver.findElement(By.id("sFirstName")).sendKeys("FirstName");
	        
	        //driver.findElement(By.id("sLsstName")).click();
	        driver.findElement(By.id("sLsstName")).clear();
	        driver.findElement(By.id("sLsstName")).sendKeys("LastName");
	        
	       // driver.findElement(By.id("sPostalCode")).click();
	        driver.findElement(By.id("sPostalCode")).clear();
	        driver.findElement(By.id("sPostalCode")).sendKeys("123456789");
	        
	       // driver.findElement(By.id("emailAddress")).click();
	        driver.findElement(By.id("emailAddress")).clear();
	        driver.findElement(By.id("emailAddress")).sendKeys(Reusables.RandomString()+"@gmail.com");
	        
	        Select s=new Select(  driver.findElement(By.id("sSubject")));
	        s.selectByIndex(2);
	        
	    }
	    
	    @When("^User should able to submit his Catalog Request$")
	    public void user_should_able_to_submit_his_catalog_request() throws Throwable {
	    	driver.findElement(By.id("sFirstName")).click();
	        driver.findElement(By.id("sFirstName")).clear();
	        driver.findElement(By.id("sFirstName")).sendKeys("FirstName");
	        
	        //driver.findElement(By.id("sLsstName")).click();
	        driver.findElement(By.id("sLsstName")).clear();
	        driver.findElement(By.id("sLsstName")).sendKeys("LastName");
	        
	        //driver.findElement(By.id("sPostalCode")).click();
	        driver.findElement(By.id("sPostalCode")).clear();
	        driver.findElement(By.id("sPostalCode")).sendKeys("123456789");
	        
	        //driver.findElement(By.id("emailAddress")).click();
	        driver.findElement(By.id("emailAddress")).clear();
	        driver.findElement(By.id("emailAddress")).sendKeys(Reusables.RandomString()+"@gmail.com");
	        
	        Select s=new Select(  driver.findElement(By.id("sSubject")));
	        s.selectByIndex(2);
	 
	        //driver.findElement(By.id("sAddress1")).click();
	        driver.findElement(By.id("sAddress1")).clear();
	        driver.findElement(By.id("sAddress1")).sendKeys("101 street");
	        
	       // driver.findElement(By.id("sCity")).click();
	        driver.findElement(By.id("sCity")).clear();
	        driver.findElement(By.id("sCity")).sendKeys("Franklin");
	    }


	    @When("^User enter details for survey$")
	    public void user_enter_details_for_survey() throws Throwable {
	    	driver.findElement(By.id("301395439_3841122817")).click();
	        driver.findElement(By.id("301395439_3841122817")).clear();
	        driver.findElement(By.id("301395439_3841122817")).sendKeys("test test");
	        driver.findElement(By.id("301395439_3841122818")).click();
	        driver.findElement(By.id("301395439_3841122818")).clear();
	        driver.findElement(By.id("301395439_3841122818")).sendKeys("no company");
	        driver.findElement(By.id("301395439_3841122819")).click();
	        driver.findElement(By.id("301395439_3841122819")).clear();
	        driver.findElement(By.id("301395439_3841122819")).sendKeys("qwertyu");
	        driver.findElement(By.xpath("//div[@id='question-field-301395439']/fieldset/div")).click();
	        driver.findElement(By.id("301395439_3841122820")).click();
	        driver.findElement(By.id("301395439_3841122820")).clear();
	        driver.findElement(By.id("301395439_3841122820")).sendKeys("iyutyt");
	        driver.findElement(By.id("301395439_3841122821")).click();
	        driver.findElement(By.id("301395439_3841122821")).clear();
	        driver.findElement(By.id("301395439_3841122821")).sendKeys("finland");
	        
	        Select s=new Select(driver.findElement(By.id("301395439_3841122822")));
	        s.selectByIndex(3);
	        
	        driver.findElement(By.id("301395439_3841122823")).click();
	        driver.findElement(By.id("301395439_3841122823")).clear();
	        driver.findElement(By.id("301395439_3841122823")).sendKeys("12345");
	        JS.executeScript("arguments[0].scrollIntoView();", driver.findElement(By.id("301395439_3841122824")));
	        driver.findElement(By.id("301395439_3841122824")).click();
	        driver.findElement(By.id("301395439_3841122824")).clear();
	        driver.findElement(By.id("301395439_3841122824")).sendKeys("test@test.com");
	    }

	    @Then("^User able to see the gift card image$")
	    public void user_able_to_see_the_gift_card_image() throws Throwable {
	        if(driver.findElement(By.xpath("//img[@src='http://www.sharperimage.com/si/img/Corp-Gifts2.jpg']")).isDisplayed())
	        {
	        	log.info("User able to see the gift card image");
	        	assertTrue(true, "User able to see the gift card image");
	        }
	        else
	        {
	        	log.error("User not able to see the gift card image");
	        	Assert.fail("User able to see the gift card image");
	        }
	        
	    }

	    
	    @Then("^User is able to see the order number$")
	    public void user_is_able_to_see_the_order_number() throws Throwable {
	    	if(!isProd)
	    	{
	    		try{
	    		Order=WD.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//p[contains(text(),'ORD')]"))).getText();
	    		log.info("User is able to see the order number:" +Order);
	    		assertTrue(true, "User is able to see the order number:" +Order);
	    		}
	    		
	    		catch(Exception e)
	    		{
	    			log.info("User is not able to see the order number,Error:" +e.toString());
		    		Assert.fail("User is not able to see the order number,Error:" +e.toString());
	    		}
	    		
	    	}
	    }
	    
	    @When("^User refresh the page$")
	    public void user_refresh_the_page() throws Throwable {				    
		driver.navigate().refresh();
		try {
			driver.switchTo().alert().accept();
		} catch (Exception e) {
		}

		Reusables.WaitforPageLoad();
	    }
}
