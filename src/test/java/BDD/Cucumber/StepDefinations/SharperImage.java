package BDD.Cucumber.StepDefinations;

import static org.testng.Assert.assertTrue;

import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.TimeUnit;

import org.apache.commons.collections.bag.SynchronizedSortedBag;
import org.apache.log4j.Logger;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.Cookie;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.phantomjs.PhantomJSDriver;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.seleniumhq.jetty7.util.log.Log;



import BDD.Cucumber.Core.Initialization;
import cucumber.api.DataTable;
import cucumber.api.PendingException;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class SharperImage extends Initialization 
{
   Logger log = Logger.getLogger(this.getClass());
   

   String productname;
   String product;
   String quantitynum;
   String email,itemname;
   String Password,Imagesource;
   float sumtotal,TotalPrice;
   int itemCount=0,Totalitem=0;
   String shippingoptionnew,shippingoption,color;
   HashMap<String, Integer> Itemdetails=new HashMap<String,Integer>();
   HashMap<String,String> costList=new HashMap<String,String>();
   boolean iscolor=false;

   @When("^User choose the product color \"([^\"]*)\"$")
   public void user_choose_the_product_color_something(String strArg1) throws Throwable {

		 
		   if(driver.findElements(By.id("colorPicker")).size()>0)
		   {
	    	int optioncount=driver.findElement(By.id("colorPicker")).findElement(By.id("product-size-picker")).findElements(By.tagName("option")).size();
			Select s=new Select(driver.findElement(By.id("product-size-picker")));
			
		s.selectByVisibleText(strArg1);
		iscolor=true;
		color=strArg1;
		   }
			
   }
   
   @When("^User choose personalized option$")
   public void user_choose_personalized_option() throws Throwable {
	   if(driver.findElements(By.id("personlizationSelect")).size()>0)
		{
			Select SL=new Select(driver.findElement(By.id("personlizationSelect")));
			//retryingFindClick(SL,"personalize");
			
			SL.selectByValue("personalize");
			
			Thread.sleep(1000);
			if(driver.findElements(By.xpath("//div[@id='popup-personalize']//input")).size()>0)
			{
				driver.findElements(By.xpath("//div[@id='popup-personalize']//input")).get(0).sendKeys("TST");
				 String xpath="//input[@type='submit' and @value='Personalize item']";
			   					        
			        Reusables.ActionClick(driver.findElements(By.xpath(xpath)));
			       
				
			}
		}
   }

   @When("^User click Add to Cart button$")
   public void user_click_add_to_cart_button() throws Throwable {
	   
	   WebElement WE=WD.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//section[@class='product-info__action-items col-lg-5 product-cell']")));
	   if(iscolor)
	   {
	   itemname=WE.findElement(By.tagName("h1")).getText()+" - "+color;
	   }
	   
	   else
	   {
		   itemname=WE.findElement(By.tagName("h1")).getText();
	   }
	 
	   iscolor=false;
	   
	   String singlecost=WE.findElement(By.id("catalog_price")).getText();
	   String singcost=singlecost.substring(1,singlecost.length());
		 float scost = Float.parseFloat(singcost); 
		 
		 
				
	   String xpath="//input[@type='submit' and @value='Add To Cart']";
      // Reusables.waitforElement(driver.findElement(By.xpath(xpath)));
      // System.out.println(driver.findElements(By.xpath(xpath)).size());
       WD.until(ExpectedConditions.numberOfElementsToBeMoreThan(By.xpath(xpath), 0));
       
       Reusables.ActionClick(driver.findElements(By.xpath(xpath)));
       
       itemCount++;
       TotalPrice=TotalPrice+scost;
       if(!costList.containsKey(itemname))
       {
       costList.put(itemname, driver.findElement(By.id("catalog_price")).getText());
       }
     
       
       if (!Itemdetails.containsKey(itemname))
       {
    	   Itemdetails.put(itemname, 1);
       }
       else
       {
    	   Itemdetails.put(itemname, Itemdetails.get(itemname) + 1);
       }
       
      
       Thread.sleep(5000);
      // System.out.println(itemname);
      // System.out.println(TotalPrice);
       //System.out.println(Itemdetails);
   }
   
   @When("^User click Add to Cart button with Sale$")
   public void user_click_add_to_cart_button_sale() throws Throwable {
	   
	   WebElement WE=WD.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//section[@class='product-info__action-items col-lg-5 product-cell']")));
	   itemname=WE.findElement(By.tagName("h1")).getText();
	   
	   String singlecost=WE.findElement(By.xpath("//span[contains(text(),'NOW $')]")).getText().replace("NOW ", "").trim();
	   String singcost=singlecost.substring(1,singlecost.length());
		 float scost = Float.parseFloat(singcost); 
		 
	   String xpath="//input[@type='submit' and @value='Add To Cart']";
      // Reusables.waitforElement(driver.findElement(By.xpath(xpath)));
      // System.out.println(driver.findElements(By.xpath(xpath)).size());
       WD.until(ExpectedConditions.numberOfElementsToBeMoreThan(By.xpath(xpath), 0));
       
       Reusables.ActionClick(driver.findElements(By.xpath(xpath)));
       
       itemCount++;
       TotalPrice=TotalPrice+scost;
       if(!costList.containsKey(itemname))
       {
       costList.put(itemname,singcost );
       }
     
       
       if (!Itemdetails.containsKey(itemname))
       {
    	   Itemdetails.put(itemname, 1);
       }
       else
       {
    	   Itemdetails.put(itemname, Itemdetails.get(itemname) + 1);
       }
       
      
       Thread.sleep(5000);
      // System.out.println(itemname);
      // System.out.println(TotalPrice);
       //System.out.println(Itemdetails);
   }
   
   @Then("^User able to see the item with quantity with addon$")
   public void user_able_to_see_the_item_with_quantity_with_addon() throws Throwable {
	   WD.until(ExpectedConditions.elementToBeClickable(By.xpath("//select[contains(@class,'input')]")));
	   int count=0;
	   for(WebElement WE:driver.findElements(By.xpath("//select[contains(@class,'input')]")))
	   {
		   count=count+Integer.parseInt(WE.getAttribute("value"));
	   }
	   
	   count=count*2;
	 System.out.println(count);
	 System.out.println(driver.findElement(By.xpath("//span[@class='cartStar']")).getText());
	  if(driver.findElement(By.xpath("//span[@class='cartStar']")).getText().contains(Integer.toString(count)))
	  {
		  log.info("User able to see the item with quantity");
	   		assertTrue(true, "User able to see the item with quantity");
	  }
	  
	  else
	  {
		  log.error("User not able to see the item with quantity");
	   		Assert.fail("User not able to see the item with quantity");
	  }
   }
   
   @Then("^User able to see the item with quantity$")
   public void user_able_to_see_the_item_with_quantity() throws Throwable {
	   WD.until(ExpectedConditions.elementToBeClickable(By.xpath("//select[contains(@class,'input')]")));
	   int count=0;
	   for(WebElement WE:driver.findElements(By.xpath("//select[contains(@class,'input')]")))
	   {
		   count=count+Integer.parseInt(WE.getAttribute("value"));
	   }
	   
	  
	 System.out.println(count);
	 System.out.println(itemCount);
	  if(Integer.compare(count, itemCount)==0)
	  {
		  log.info("User able to see the item with quantity");
	   		assertTrue(true, "User able to see the item with quantity");
	  }
	  
	  else
	  {
		  log.error("User not able to see the item with quantity");
	   		Assert.fail("User not able to see the item with quantity");
	  }
   }

   @Then("^User able to add an item to mini cart$")
   public void user_able_to_add_an_item_to_mini_cart() throws Throwable {
       if(WD.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//div[@class='minicart-container']"))) != null)
       {
   		log.info("User able to add an item to mini cart,item Name: "+itemname);
   		assertTrue(true, "User able to add an item to mini cart,item Name: "+itemname);
   	}
   	
   	else
   	{
   		log.error("User not able to add an item to mini cart,item Name: "+itemname);
   		Assert.fail("User not able to add an item to mini cart,item Name: "+itemname);
   	}
       driver.manage().timeouts().implicitlyWait(4, TimeUnit.SECONDS);
      int count= driver.findElements(By.xpath("//select[@class='input']")).size();
       driver.manage().timeouts().implicitlyWait(40, TimeUnit.SECONDS);
       if(count==0)
       {
    	   log.info("User able to add an item to cart with out moved to shopping cart page");
      		assertTrue(true, "User able to add an item to cart with out moved to shopping cart page");
       }
       
       else
       {
    	   log.error("User not able to add an item to cart with out moved to shopping cart page");
      		Assert.fail("User not able to add an item to cart with out moved to shopping cart page");
       }
   }

   
   @Then("^User not able to see the mini cart$")
   public void user_not_able_to_see_the_mini_cart() throws Throwable {
	   driver.manage().timeouts().implicitlyWait(1, TimeUnit.SECONDS);
	    System.out.println(driver.findElement(By.xpath("//div[@class='minicart-container']")).isDisplayed());
	    if(!driver.findElement(By.xpath("//div[@class='minicart-container']")).isDisplayed())
	       {
	   		log.info("User not able to see the mini cart after clickingn the continue shopping in mini cart");
	   		assertTrue(true, "User not able to see the mini cart after clickingn the continue shopping in mini cart");
	   	}
	   	
	   	else
	   	{
	   		log.error("User  able to see the mini cart after clickingn the continue shopping in mini cart");
	   		Assert.fail("User able to see the mini cart after clickingn the continue shopping in mini cart");
	   	}
	   
	   // System.out.println(driver.findElement(By.xpath("//div[@class='minicart-container']")).isDisplayed());
	   driver.manage().timeouts().implicitlyWait(40, TimeUnit.SECONDS);
   }
   
   @Then("^User able to see the item image in mini cart$")
   public void user_able_to_see_the_item_image_in_mini_cart() throws Throwable {
      
	   String imgaesource=driver.findElement(By.xpath("//div[@id='product_image_carousel_thumbs']//img")).getAttribute("src").replace("https:", "").replace("http:", "");
	   
	   String xpath="//div[@class='minicart-container']//img[@src='"+imgaesource+"']";
	   
	   System.out.println(xpath);
	   if(driver.findElements(By.xpath(xpath)).size()>0)
	   {
		   log.info("User able to see the item image in mini cart");
	   		assertTrue(true, "User able to see the item image in mini cart");
	   }
	   
		else
	   	{
	   		log.error("User not able to see the item image in mini cart");
	   		Assert.fail("User not able to see the item image in mini cart");
	   	}
   }
   
   @Then("^User able to validate item details and Subtotal$")
   public void user_able_to_validate_item_details_and_subtotal() throws Throwable {
	   
	   WebElement WE=driver.findElement(By.xpath("//div[@class='minicart-container']"));
	  
	   
	   for(Map.Entry m:Itemdetails.entrySet()){
		   
		   	  
	         String itemname=(String) m.getKey();
	         int itemcount=(int) m.getValue();
	         
	         if(WE.findElements(By.partialLinkText(itemname)).size()>0)
	         {
	        	 log.info("User able to see the  an item to mini cart,item Name: "+itemname);
	        	assertTrue(true, "User able to see the  anitem to mini cart,item Name: "+itemname);
	         }
	         else
	         {
	        	 log.error("User not able to see the  an item to mini cart,item Name: "+itemname);
	        	Assert.fail("User not able to see the  an item to mini cart,item Name: "+itemname);
	         }
	         
	         String xpath="//div[@class='minicart-container']//a[contains(text(),'"+itemname+"')]/../../li[contains(text(),'Quantity')]";
	         String scount=String.valueOf(itemcount);
	         //WD.until(ExpectedConditions.numberOfElementsToBeMoreThan(By.xpath("//div[@class='minicart-container']//a[text()='"+itemname+"']/../../li[contains(text(),'Quantity') and contains(text(),'"+itemcount+"')]"), 0));
	         WD.until(ExpectedConditions.textToBePresentInElementLocated(By.xpath(xpath),scount ));
	         
	         if(WE.findElement(By.xpath(xpath)).getText().contains(scount))
	         {
	        	 log.info("User able to see the  an item to mini cart,item Name: "+itemname+" and item count: "+itemcount);
		        	assertTrue(true, "User able to see the  anitem to mini cart,item Name: "+itemname+"  and item count: "+itemcount);
	         }
	         else
	         {
	        	 log.error("User not able to see the  an item to mini cart,item Name: "+itemname+" and item count: "+itemcount);
		        	Assert.fail("User not able to see the  an item to mini cart,item Name: "+itemname+" and  item count: "+itemcount);
	         }
	         
         String xpath1="//div[@class='minicart-container']//a[contains(text(),'"+itemname+"')]/../..//span[@class='minicart-product-price']";
	         
        //System.out.println(costList);
       // System.out.println(costList.get(itemname));
	         if(WE.findElement(By.xpath(xpath1)).getText().contains(costList.get(itemname)))
	         {
	        	 log.info("User able to see the  an item to mini cart,item Name: "+itemname+" Cost: "+costList.get(itemname));
		        	assertTrue(true, "User able to see the  anitem to mini cart,item Name: "+itemname+" item cost: "+costList.get(itemname));
	         }
	         else
	         {
	        	 System.out.println(xpath1);
	        	 log.error("User not able to see the  an item to mini cart,item Name: "+itemname+" item cost: "+costList.get(itemname));
		        	Assert.fail("User not able to see the  an item to mini cart,item Name: "+itemname+" item cost: "+costList.get(itemname));
	         }
	         
	         
	         
	         double price=Double.parseDouble(driver.findElement(By.xpath("//li[contains(@class,'minicart-subtotal')]")).getText().replace("SUBTOTAL: $", ""));
	         System.out.println(TotalPrice);
	         double roundOff = (double) Math.round(TotalPrice * 100) / 100;
	       if(Double.compare(price, roundOff)==0)
	       {
	    	   log.info("User able to see the  an items total cost:"+price);
	        	assertTrue(true, "User able to see the  an items total cost:"+price);
	       }
	       else
	       {
	    	   log.error("User not able to see the  an items total cost:"+price);
	           Assert.fail("User not able to see the  an items total cost:"+price);
	       }
	         
	         
	   }
      
   }
   
   @When("^User Click the view cart in mini cart$")
   public void user_click_the_view_cart_in_mini_cart() throws Throwable {
	   try{
		    if(WD.until(ExpectedConditions.presenceOfAllElementsLocatedBy(By.linkText("VIEW CART"))).size()>0)
		    {
		    	//System.out.println(WD.until(ExpectedConditions.numberOfElementsToBeMoreThan(By.xpath("//div[@id='header_minicart']"), 0)));
		 		 Reusables.ActionClick(driver.findElements(By.linkText("VIEW CART")));
		 	    
		    }
		    
		  
	        }
	        
	        catch(Exception E ){}
	   
	   
	        }
   
   @When("^User Click the Continue Shopping in mini cart$")
   public void user_click_the_continue_shopping_in_mini_cart() throws Throwable {
       Reusables.ActionClick(driver.findElement(By.xpath("//div[@id='header_minicart']//a[contains(text(),'CONTINUE SHOPPING')]")));
   }
   
   @When("^User click the Continue Shopping$")
   public void user_click_the_continue_shopping() throws Throwable {
       Reusables.ActionClick(driver.findElement(By.xpath("//input[@value='Continue Shopping']")));
   }
   
   
   @When("^User Click the protection plan (\\d+)$")
   public void user_click_the_protection_plan_1(int i) throws Throwable {
	   String xpath="//input[@name='protection-"+i+"'] | //input[@name='portection-"+i+"' ]";
	//  String xpath="//input[@name='protection-"+i+"']";
	   
	  int index= driver.findElements(By.xpath(xpath)).size();
	  int j=1;
	   for(WebElement WE:driver.findElements(By.xpath(xpath)))
	   {
		   if(j==index)
		   {
			Reusables.ActionClick(WE);
		   }
		   j++;
	   }
	   
	   
	   
		
   }
	@When("^User should select quantity as (\\d+)$")
	public void user_should_select_quantity_as(int quantnum) throws Throwable {
	  
		//WD.until(ExpectedConditions.elementToBeClickable(By.xpath("//select[contains(@class,'input')]")));
		Thread.sleep(2000);
	//	if(!getBrowserType().equalsIgnoreCase("phantomjs"))
	//	{
			itemCount++;
			
	    quantitynum=Integer.toString(quantnum);
	    Totalitem=Totalitem+quantnum;
	    //if(!driver.findElement(By.xpath("//span[@class='cartStar']")).getText().contains(quantitynum) && quantnum!=1 )
	    	 if(quantnum!=1 )
	    {
	    //	System.out.println(Totalitem);
		WD.until(ExpectedConditions.elementToBeClickable(By.xpath("//select[contains(@class,'input')]")));
		//Select s=new Select(Reusables.GetNthElement(driver.findElements(By.xpath("//select[@class='input']")),itemCount ));
		//s.selectByValue(quantitynum);
		//WE.click();
		Reusables.GetNthElement(driver.findElements(By.xpath("//select[contains(@class,'input')]")),itemCount ).click();
		//driver.findElements(By.xpath("//select[@class='input']")).get(itemCount-1).click();
		Thread.sleep(1000);
		driver.findElement(By.xpath("//option[@value='"+quantnum+"']")).click();
		
		//Thread.sleep(2000);
	    }
		//String S_name=WE.getAttribute("name");
		//String jsscript="document.getElementsByName('"+S_name+"')[0].value=4;";
		//JS.executeScript(jsscript);
		//JS.executeScript("arguments[0].value="+quantnum+";", s);
		//JS.executeScript("document.querySelector('option[value=" + quantnum +"]').selected = true");
/*		}
		
		else
	{
			quantitynum="1";
			
			Totalitem=Totalitem+1;
		}
	*/
	    Thread.sleep(2000);
		
	
	    
	}

	  @Then("^User validated the VIP cashback$")
	    public void user_validated_the_vip_cashback() throws Throwable {
		  
		  Reusables.Mousescroll("DOWN");
		 	  int num=(int) Math.round(sumtotal*0.2);
	        String cashback=driver.findElement(By.xpath("//td[contains(text(),'Cash Back') and contains(text(),':')]/following-sibling::td")).getText().replace("$", "");
	        
	        if(cashback.contains(String.valueOf(num)))
	        {
	        	log.info("User is able to see the 20% cash back");
	        	Assert.assertTrue("User is able to see the 20% cash back", true);
	        }
	        
	        else
	        {
	        	log.error("User is able to see the 20% cash back");
	        	Assert.fail("User is able to see the 20% cash back");
	        }
	        
	        
	    }

	 @When("^User should select quantity as bulk$")
    public void user_should_select_quantity_as_50() throws Throwable {
    //Thread.sleep(2000);
    itemCount=1;
    	WD.until(ExpectedConditions.elementToBeClickable(By.xpath("//select[contains(@class,'input')]")));
		Reusables.GetNthElement(driver.findElements(By.xpath("//select[contains(@class,'input')]")),itemCount ).click();
		//driver.findElements(By.xpath("//select[@class='input']")).get(itemCount-1).click();
		Thread.sleep(1000);
		driver.findElement(By.xpath("//option[@value='More']")).click();
		  Thread.sleep(2000);
		  
		  
		
		  
		 
    }
	 
	 @Then("^Validate promo code autoapplied$")
	    public void validate_promo_code_autoapplied() throws Throwable {
	        
	 }
	 

	    @Then("^User able to validate the total price with protection plan$")
	    public void user_able_to_validate_the_total_price_with_protection_plan() throws Throwable {
	       System.out.println(quantitynum);
	     
	       String singlecost=Reusables.GetNthElement(driver.findElements(By.id("catalog_price")),itemCount ).getText();
			//	driver.findElement(By.id("catalog_price")).getText(); 
		//System.out.println(singlecost);
	    int a=singlecost.length();
	    float quantnum=Float.parseFloat(quantitynum);
		 String singcost=singlecost.substring(1,a);
		 float scost = Float.parseFloat(singcost); 
		 float totalcost=scost*quantnum;
		 
		 
		 
		 float mcost = 0;
		 int i=0;
		 do 
		 {
			 Thread.sleep(2000);
		 String multiplecost= Reusables.GetNthElement(driver.findElements(By.xpath("//td[@class='cart-box-item-total col-sm-2 col-xs-3']")), itemCount).getText();
				 //driver.findElement(By.xpath("//td[@class='cart-box-item-total col-sm-2 col-xs-3']")).getText();
		 int b=multiplecost.length();
		 String mulcost=multiplecost.substring(1,b);
		  mcost = Float.parseFloat(mulcost);
		  i++;
		 }while(!(totalcost==mcost) || i==10);
		
		 if(totalcost==mcost)
		 {
			 Assert.assertTrue("price has been updated",true);
		}
		 else
		 {
			 log.error("step case  failed price was not updated by changing quantity");
			 Assert.fail("price was not updated by changing quantity" + totalcost);
			
		 }
		 
		  String protectionplancost=driver.findElement(By.xpath("//input[contains(@name,'protection') and @checked='']/../../span")).getText().replace("$", "");
		  float Pcost = Float.parseFloat(protectionplancost);
		  
		  totalcost=totalcost+quantnum*Pcost;
		  
		  sumtotal=sumtotal+totalcost;
		 System.out.println(sumtotal);
		 ValidateTotalCost();
		 log.info("Total price was  updated");
		 
	    }

	@Then("^Price need to update by Quantity$")
	public void price_need_to_update_by_Quantity() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		//System.out.println(Totalitem);
		//System.out.println(driver.findElement(By.xpath("//span[@class='cartStar']")).getText());
		if(driver.findElement(By.xpath("//span[@class='cartStar']")).getText().contains(Integer.toString(Totalitem)))
		{
			Assert.assertTrue("Shopper cart is updated with item count", true);
			log.info("Shopper cart is updated with item count");
		}
		else
		{
			log.info("Shopper cart is not updated with item count::"+Totalitem);
			Assert.fail("Shopper cart is not updated with item count");
			
		}
		
		
		String singlecost=Reusables.GetNthElement(driver.findElements(By.id("catalog_price")),itemCount ).getText();
			//	driver.findElement(By.id("catalog_price")).getText(); 
		//System.out.println(singlecost);
	    int a=singlecost.length();
	    float quantnum=Float.parseFloat(quantitynum);
		 String singcost=singlecost.substring(1,a);
		 float scost = Float.parseFloat(singcost); 
		 float totalcost=scost*quantnum;
		 
		 
		 
		 float mcost = 0;
		 int i=0;
		 do 
		 {
			 Thread.sleep(2000);
		 String multiplecost= Reusables.GetNthElement(driver.findElements(By.xpath("//td[@class='cart-box-item-total col-sm-2 col-xs-3']")), itemCount).getText();
				 //driver.findElement(By.xpath("//td[@class='cart-box-item-total col-sm-2 col-xs-3']")).getText();
		 int b=multiplecost.length();
		 String mulcost=multiplecost.substring(1,b);
		  mcost = Float.parseFloat(mulcost);
		  i++;
		 }while(!(totalcost==mcost) || i==10);
		
		 if(totalcost==mcost)
		 {
			 Assert.assertTrue("price has been updated",true);
		}
		 else
		 {
			 log.error("step case  failed price was not updated by changing quantity");
			 Assert.fail("price was not updated by changing quantity" + totalcost);
			
		 }
		 
		 
		 sumtotal=sumtotal+totalcost;
		 System.out.println(sumtotal);
		 ValidateTotalCost();
		 log.info("Total price was  updated");
	}

	
	public void ValidateTotalCost()
	{
		 DecimalFormat df = new DecimalFormat("0.00");
	        df.setMaximumFractionDigits(2);
	        String StartRange = df.format(sumtotal);
	        
		// String xpath="//td[contains(text(),'"+StartRange+"')]";
		//System.out.println(driver.findElement(By.xpath("//table[@class='cart-box-totals']//td[@class='col-sm-4']")).getText());
		
		if( driver.findElement(By.xpath("//table[@class='cart-box-totals']//td[@class='col-sm-4']")).getText().contains(StartRange))
		{
			 Assert.assertTrue("Total price has been updated",true);
		}
		else
		{
			 Assert.fail("Total price was not updated" + sumtotal);
			 log.error("Total price was not updated");
		}
		
	}

	@When("^Application redirects to shippingadress page$")
	public void application_redirects_to_shippingadress_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		WebElement adress;
		adress= WD.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//h1[text()='Shipping Address']")));
	}
	
	 @Then("^User should enter  details for Email and Zip Code$")
	    public void user_should_enter_details_for_email_and_zip_code() throws Throwable {
		/* WD.until(ExpectedConditions.numberOfElementsToBeMoreThan(By.xpath("//input[@class='form-control']"), 5));
	    	List<WebElement> L=driver.findElements(By.xpath("//input[@class='form-control']"));
	    	L.get(2).click();
			L.get(2).clear();
			L.get(2).sendKeys(email);
			L.get(3).click();
			L.get(3).clear();
			L.get(3).sendKeys(Reusables.GetTestProparty("ZIPCODE"));
			
			*/
		 driver.findElement(By.xpath("//div[@class='form-group collapse in']")).findElement(By.name("email")).clear();
		 driver.findElement(By.xpath("//div[@class='form-group collapse in']")).findElement(By.name("email")).sendKeys(email);
		 driver.findElement(By.xpath("//div[@class='form-group collapse in']")).findElement(By.name("zipCode")).clear();
		 driver.findElement(By.xpath("//div[@class='form-group collapse in']")).findElement(By.name("zipCode")).sendKeys(Reusables.GetTestProparty("ZIPCODE"));
		 
	    }
	 
	 
	 @Then("^User should enter  details for OrderEmail and Zip Code$")
	    public void user_should_enter_details_for_email_and_zip_code1() throws Throwable {
		 WD.until(ExpectedConditions.numberOfElementsToBeMoreThan(By.xpath("//input[@class='form-control']"), 5));
	    	List<WebElement> L=driver.findElements(By.xpath("//input[@class='form-control']"));
	    	L.get(2).click();
			L.get(2).clear();
			L.get(2).sendKeys(Reusables.GetTestProparty("ORDEREMAIL"));
			L.get(3).click();
			L.get(3).clear();
			L.get(3).sendKeys(Reusables.GetTestProparty("ORDERZIPCODE"));
	    }
	 
	 @Then("^User enter email to save cart$")
	    public void user_enter_email_to_save_cart() throws Throwable {
		 email=Reusables.RandomString()+"@mailinator.com";
		 Thread.sleep(2000);
		 driver.findElement(By.xpath("//input[@id='saveCartEmailAddress']")).sendKeys(email);
		 Thread.sleep(2000);
		 Reusables.ActionClick(driver.findElement(By.xpath("//input[@value='Save Your Cart']")));
	    }
	 
	@Then("^User should enter Mandatory fields like (.+),(.+),(.+), (.+),(.+),(.+),(.+),(.+)$")
	 public void user_should_enter_mandatory_fields_like_(String firstname, String lastname, String streetadress, String city, String state, String zip, String phone, String mailid) throws Throwable {
		   //user enters the mandatory details for Shipping 
/*		if (!driver.findElement(By.name("checkoutOption")).isSelected()) {
			driver.findElement(By.name("checkoutOption")).click();
        }*/
		   Boolean getemail=true;
	       
	       if(!driver.findElement(By.id("addressDoNotAddUseShippingInput")).isSelected())
	       {
	    	   WD.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//input[@placeholder='First']")));
	    	  // driver.findElement(By.xpath("//input[@placeholder='First']")).click();
	    	   driver.findElement(By.xpath("//input[@placeholder='First']")).clear();
	    	   driver.findElement(By.xpath("//input[@placeholder='First']")).sendKeys(firstname);
	    	   
	    	   //driver.findElement(By.xpath("//input[@placeholder='Last']")).click();
	    	   driver.findElement(By.xpath("//input[@placeholder='Last']")).clear();
		       driver.findElement(By.xpath("//input[@placeholder='Last']")).sendKeys(lastname);
		       
		       //driver.findElement(By.id("/atg/commerce/order/purchase/ShippingGroupFormHandler.shippingAddress_address1")).click();
		       driver.findElement(By.id("/atg/commerce/order/purchase/ShippingGroupFormHandler.shippingAddress_address1")).clear();
			   driver.findElement(By.id("/atg/commerce/order/purchase/ShippingGroupFormHandler.shippingAddress_address1")).sendKeys(streetadress);
			   //driver.findElement(By.id("/atg/commerce/order/purchase/ShippingGroupFormHandler.shippingAddress_city")).click();
			   driver.findElement(By.id("/atg/commerce/order/purchase/ShippingGroupFormHandler.shippingAddress_city")).clear();
			  //driver.findElement(By.id("/atg/commerce/order/purchase/ShippingGroupFormHandler.shippingAddress_city")).sendKeys(city);
			   JS.executeScript("arguments[0].value='"+city+"';", driver.findElement(By.id("/atg/commerce/order/purchase/ShippingGroupFormHandler.shippingAddress_city")));
			   
			   Select state1=new Select(driver.findElement(By.id("/atg/commerce/order/purchase/ShippingGroupFormHandler.shippingAddress_state")));
			   state1.selectByValue(state);
		       driver.findElement(By.id("/atg/commerce/order/purchase/ShippingGroupFormHandler.shippingAddress_postalCode")).sendKeys(zip);
		       driver.findElement(By.id("/atg/commerce/order/purchase/ShippingGroupFormHandler.shippingAddressPhoneNumber1")).sendKeys(phone);
		       driver.findElement(By.id("/atg/commerce/order/purchase/ShippingGroupFormHandler.shippingAddressPhoneNumber2")).sendKeys(phone);
		       driver.findElement(By.id("/atg/commerce/order/purchase/ShippingGroupFormHandler.shippingAddressPhoneNumber3")).sendKeys(phone);
		       try{
		    	   
		       WebDriverWait WD=new WebDriverWait(driver,1);
		       if(WD.until(ExpectedConditions.numberOfElementsToBeMoreThan(By.id("atg_store_emailInput"), 0)) != null)
		       {
		    	  email=Reusables.RandomString()+"@mailinator.com";
		    	  //driver.findElement(By.id("atg_store_emailInput")).click();
		    	  driver.findElement(By.id("atg_store_emailInput")).clear();
		    		   driver.findElement(By.id("atg_store_emailInput")).sendKeys(email);
		    		   
		    		   getemail=false;
		       }
		       }
		       catch(Exception e){}
		       
	    	   Reusables.ActionClick(driver.findElement(By.xpath("//input[@id='addressAddUseShippingInput']")));
	       }
	       
	       else
	       {
	    	   //driver.findElement(By.id("/atg/commerce/order/purchase/ShippingGroupFormHandler.billingAddress_firstName")).click();
	    	   driver.findElement(By.id("/atg/commerce/order/purchase/ShippingGroupFormHandler.billingAddress_firstName")).clear();
	    	   driver.findElement(By.id("/atg/commerce/order/purchase/ShippingGroupFormHandler.billingAddress_firstName")).sendKeys(firstname);
	    	   
	           //driver.findElement(By.id("/atg/commerce/order/purchase/ShippingGroupFormHandler.billingAddress_lastName")).click();
	    	   driver.findElement(By.id("/atg/commerce/order/purchase/ShippingGroupFormHandler.billingAddress_lastName")).clear();
	    	   Thread.sleep(500);
	    	   JS.executeScript("arguments[0].value='"+lastname+"';", driver.findElement(By.id("/atg/commerce/order/purchase/ShippingGroupFormHandler.billingAddress_lastName")));
		       //driver.findElement(By.id("/atg/commerce/order/purchase/ShippingGroupFormHandler.billingAddress_lastName")).sendKeys(lastname);
		       
		      System.out.println( driver.findElement(By.id("/atg/commerce/order/purchase/ShippingGroupFormHandler.billingAddress_lastName")).getAttribute("value"));
		       
		       //driver.findElement(By.id("/atg/commerce/order/purchase/ShippingGroupFormHandler.billingAddress_address1")).click();
		       driver.findElement(By.id("/atg/commerce/order/purchase/ShippingGroupFormHandler.billingAddress_address1")).clear();
			   driver.findElement(By.id("/atg/commerce/order/purchase/ShippingGroupFormHandler.billingAddress_address1")).sendKeys(streetadress);
			   
			   //driver.findElement(By.id("/atg/commerce/order/purchase/ShippingGroupFormHandler.billingAddress_city")).click();
			   driver.findElement(By.id("/atg/commerce/order/purchase/ShippingGroupFormHandler.billingAddress_city")).clear();
			  // driver.findElement(By.id("/atg/commerce/order/purchase/ShippingGroupFormHandler.billingAddress_city")).sendKeys(city);
			   JS.executeScript("arguments[0].value='"+city+"';", driver.findElement(By.id("/atg/commerce/order/purchase/ShippingGroupFormHandler.billingAddress_city")));
			   
			   Select state1=new Select(driver.findElement(By.id("/atg/commerce/order/purchase/ShippingGroupFormHandler.billingAddress_state")));
			   state1.selectByValue(state);
		       driver.findElement(By.id("/atg/commerce/order/purchase/ShippingGroupFormHandler.billingAddress_postalCode")).sendKeys(zip);
		       driver.findElement(By.id("/atg/commerce/order/purchase/ShippingGroupFormHandler.billingAddressPhoneNumber1")).sendKeys(phone);
		       driver.findElement(By.id("/atg/commerce/order/purchase/ShippingGroupFormHandler.billingAddressPhoneNumber2")).sendKeys(phone);
		       driver.findElement(By.id("/atg/commerce/order/purchase/ShippingGroupFormHandler.billingAddressPhoneNumber3")).sendKeys(phone);
		       //driver.findElement(By.id("atg_store_emailInput")).sendKeys(mailid);
		      // email=driver.findElement(By.id("atg_store_emailInput")).getText();
		       
	       }
	       
	       if(getemail)
	       {
	       try{
	       WebDriverWait WD=new WebDriverWait(driver,1);
	       if(WD.until(ExpectedConditions.numberOfElementsToBeMoreThan(By.xpath("//p[contains(text(),'@')]"), 0)) != null )
	       {
	    	   email=driver.findElement(By.xpath("//p[contains(text(),'@')]")).getText();
	       }	
	       
	       } catch(Exception e){}
	       
	       }
	       System.out.println(email);
	   }

	
	  @Then("^User should not enter Mandatory fields$")
	    public void user_should_not_enter_mandatory_fields() throws Throwable {
		  driver.findElement(By.xpath("//input[@placeholder='First']")).clear();
	       driver.findElement(By.xpath("//input[@placeholder='Last']")).clear();
		   driver.findElement(By.id("/atg/commerce/order/purchase/ShippingGroupFormHandler.shippingAddress_address1")).clear();
		   driver.findElement(By.id("/atg/commerce/order/purchase/ShippingGroupFormHandler.shippingAddress_city")).clear();
		   Select state1=new Select(driver.findElement(By.id("/atg/commerce/order/purchase/ShippingGroupFormHandler.shippingAddress_state")));
		   state1.selectByIndex(0);
	       driver.findElement(By.id("/atg/commerce/order/purchase/ShippingGroupFormHandler.shippingAddress_postalCode")).clear();
	       driver.findElement(By.id("/atg/commerce/order/purchase/ShippingGroupFormHandler.shippingAddressPhoneNumber1")).clear();
	       driver.findElement(By.id("/atg/commerce/order/purchase/ShippingGroupFormHandler.shippingAddressPhoneNumber2")).clear();
	       driver.findElement(By.id("/atg/commerce/order/purchase/ShippingGroupFormHandler.shippingAddressPhoneNumber3")).clear();
	       
	     
	    }
	  

	@Then("^User should enter valid card details$")
	   public void user_should_enter_valid_card_details() throws Throwable {
	       // User enters Credit card details.
		WD.until(ExpectedConditions.elementToBeClickable(By.id("creditCardSelecter")));
		if(!Reusables.isProductionEnvironment())
		{
		   driver.findElement(By.id("creditCardSelecter")).sendKeys(Reusables.GetTestProparty("STAGINGCREDITCARD"));
		
		}
		
		else
		{
			driver.findElement(By.id("creditCardSelecter")).sendKeys("43241234234562345");
		}
		   Select month=new Select(driver.findElement(By.id("BillingFormHandler.creditCard.expirationMonth")));
		   month.selectByValue("04");
		   Select year=new Select(driver.findElement(By.id("BillingFormHandler.creditCard.expirationYear")));
		   year.selectByValue("2020");
		   driver.findElement(By.id("BillingFormHandler.creditCardVerificationNumber")).sendKeys("1234");
	   }
	
	
	 @Then("^User should able to see the empty shopper cart$")
	    public void user_should_able_to_see_the_empty_shopper_cart() throws Throwable {
		 if(driver.findElement(By.xpath("//span[@class='cartStar']")).getText().equals("0"))
			{
				Assert.assertTrue("Shopper cart is updated with item count ZERO", true);
				log.info("Shopper cart is updated with item count");
			}
			else
			{
				Assert.fail("Shopper cart is not updated with item count Zero");
				log.info("Shopper cart is not updated with item count");
			}
	    }

	    

	    @Then("^User should able to choose Shipping Options$")
	    public void user_should_able_to_choose_shipping_options() throws Throwable {
	    	String Shippingcost,totalcost;
	    	Float Shippingprice;
	    	
	    	log.info("User should able to choose Shipping Options:start");
	    //	  Shippingcost=driver.findElement(By.xpath("//table[@class='shipping-table']//span[contains(@id,'shipPrice')]")).getText();
	       //   Shippingprice=Float.parseFloat(Shippingcost.substring(1, Shippingcost.length()));
	            
	          DecimalFormat df = new DecimalFormat("0.00");
		        df.setMaximumFractionDigits(2);
	        
	          
	     
	          for(int i=1;i<=driver.findElements(By.xpath("//input[@id='addressAddUseShippingInput']")).size();i++)
	          {
	        	  System.out.println(i);
	        	  if(i==1)
	        	  {
	        		  
	        		 
	        		  if (!driver.findElement(By.id("addressAddUseShippingInput")).isSelected()) {
	      	            driver.findElement(By.id("addressAddUseShippingInput")).click();
	      	            Reusables.WaitforPageLoad();
	      	            }
	        	  }
	        	  else
	        	  {
	        		  log.info("User should able to choose Shipping Options");
	        	  String xpath="//table[@class='shipping-table']//tr["+i+"]//input[@type='radio']";
	        	  WD.until(ExpectedConditions.elementToBeClickable(By.xpath(xpath)));
	        	  if (!driver.findElement(By.xpath(xpath)).isSelected()) {
	 	    		 driver.findElement(By.xpath(xpath)).click();
	 	    		 Reusables.WaitforPageLoad();
	 	         }
	        	  }
	        	  
	        	  Shippingcost=Reusables.GetNthElement(driver.findElements(By.xpath("//table[@class='shipping-table']//span[contains(@id,'shipPrice')]")),i).getText();
	        	  
	        			  driver.findElement(By.xpath("//table[@class='shipping-table']//span[contains(@id,'shipPrice')]")).getText();
		          Shippingprice=Float.parseFloat(Shippingcost.substring(1, Shippingcost.length()));
		            
		          
		          totalcost=df.format(Shippingprice+sumtotal);
		          
		        //  System.out.println(totalcost);
		          
		          if(driver.findElement(By.xpath("//td[@class='total col-sm-4']")).getText().contains(totalcost))
		          {
		        	  Assert.assertTrue("Shopping cart cost is updated as per user shopping choice", true);
		        	  log.info("Shopping cart cost is updated as per user shopping choice");
		          }
		          else
		          {
		        	  Assert.fail("Shopping cart cost is updated as per user shopping choice");
		        	  log.error("Shopping cart cost is updated as per user shopping choice");
		          }
		          
	        	  
	          }
	          
	   /*	 if (!driver.findElement(By.xpath("//table[@class='shipping-table']/tbody/tr[2]/td[1]/input[1]")).isSelected()) {
	    		 driver.findElement(By.xpath("//table[@class='shipping-table']/tbody/tr[2]/td[1]/input[1]")).click();
	    		 Reusables.WaitforPageLoad();
	         }
	         if (!driver.findElement(By.xpath("//table[@class='shipping-table']/tbody/tr[3]/td[1]/input[1]")).isSelected()) {
	        	 driver.findElement(By.xpath("//table[@class='shipping-table']/tbody/tr[3]/td[1]/input[1]")).click();
	        	 Reusables.WaitforPageLoad();
	         }
	         if (!driver.findElement(By.xpath("//table[@class='shipping-table']/tbody/tr[4]/td[1]/input[1]")).isSelected()) {
	        	 driver.findElement(By.xpath("//table[@class='shipping-table']/tbody/tr[4]/td[1]/input[1]")).click();
	        	 Reusables.WaitforPageLoad();
	         }
	 
	    */
	    
	    
	    }
	    
	    
	    @Then("^User should able to choose the Shipping Options$")
	    public void user_should_able_to_choose_the_shipping_options() throws Throwable {
	    	
	    	//int i=driver.findElements(By.xpath("//table[@class='shipping-table']//input[@type='radio'][not(@checked='checked')]")).size();
	    	
	    	WebElement WE=driver.findElement(By.xpath("//table[@class='shipping-table']//input[@type='radio'][not(@checked='checked')]"));
	       shippingoptionnew=WE.getAttribute("value");
	      Reusables.ActionClick(WE);
	      Thread.sleep(3000);
	    }
	    
	    @Then("^User should able to change the Shipping Options$")
	    public void user_should_able_to_change_the_shipping_options() throws Throwable {
	    	
	    	int i=driver.findElements(By.xpath("//table[@class='shipping-table']//input[@type='radio'][not(@checked='checked')]")).size();
	    	System.out.println(i);
	    	WebElement WE=Reusables.GetNthElement(driver.findElements(By.xpath("//table[@class='shipping-table']//input[@type='radio'][not(@checked='checked')]")),i);
	       shippingoptionnew=WE.getAttribute("value");
	     Reusables.ActionClick(WE); //WE.click();
	      Thread.sleep(3000);
	    }
	    

	    @Then("^User able to see only groud shipping option$")
	    public void user_able_to_see_only_groud_shipping_option() throws Throwable {
	    	if(driver.findElements(By.xpath("//table[@class='shipping-table']//input[@type='radio']")).size()==1)
	    	{
	    		Assert.assertTrue("User able to see only groud shipping option", true);
	        	  log.info("User able to see only groud shipping option");
	          }
	          else
	          {
	        	  Assert.fail("User not able to see only groud shipping option");
	        	  log.error("User not able to see only groud shipping option");
	          }
	    }
	    
	    
	    @When("^User Click the Paypal Button$")
	    public void user_click_the_paypal_button() throws Throwable {
	       Reusables.ActionClick(driver.findElements(By.xpath("//input[@class='cart-button-item openPaypal']")));
	    }
	    
	    @Then("^User should able to choose the color of product$")
	    public void user_should_able_to_choose_the_color_of_product() throws Throwable {
	    	WebElement WE=WD.until(ExpectedConditions.elementToBeClickable(By.id("product-size-picker")));
	    	int optioncount=WE.findElements(By.tagName("option")).size();
			Select s=new Select(WE);
			
			for(int i=1;i<=optioncount;i++)
			{
				System.out.println(i);
				s.selectByIndex(i);
				
				Thread.sleep(3000);
				String xpath="//input[@type='submit' and @value='Add To Cart']";
				if(driver.findElements(By.xpath(xpath)).size()>0)
				{
					System.out.println(i);
					break;
				}
			}
			
			Reusables.WaitforPageLoad();
		/*	if(optioncount>1)
			{
			s.selectByIndex(optioncount-1);
			
			while(driver.findElement(By.tagName("html")).getText().contains("Item sold out and is no longer available"))
			{
				s.selectByIndex(optioncount-1);
			}
			}
			else
				s.selectByIndex(0);
				
				*/
		
	    }
	    
	    
	    @Then("^User able to see \"([^\"]*)\" and quantity as (.+)$")
	    public void user_able_to_see_something_and_quantity_as(String strArg1,String quantity ) throws Throwable {
	    	//System.out.println(driver.findElement(By.tagName("html")).getText());
	    	if (driver.findElement(By.tagName("html")).getText().contains(strArg1)) {
	           Assert.assertTrue("User able to see the product :" + strArg1, true);
	           log.info("User able to see the product :" + strArg1);
	        }
	    	
	    	else
	    	{
	    		Assert.fail("User not able to see the product :" + strArg1);
		           log.error("User not able to see the product :" + strArg1);
	    	}
	    	
	    	//WebElement WE=WD.until(ExpectedConditions.elementToBeClickable(By.xpath("//select[@class='input']")));
	    	String count=driver.findElement(By.xpath("//select[contains(@class,'input')]")).findElement(By.xpath("//option[@selected='true']")).getText();
			System.out.println(count+";"+quantity);
	    	if (count.contains(quantity)) {
	    		Assert.assertTrue("User able to see the product quantity :" + quantity, true);
		           log.info("User able to see the product  quantity:" + quantity);
	        }
	    	
	    	else
	    	{
	    		Assert.fail("User not able to see the product quantity :" + quantity);
		           log.error("User not able to see the product quantity :" + quantity);
	    	}
	    	
	    	ValidateTotalCost();
	    }
	    
	    
	    @When("^User choose the option \"([^\"]*)\" in the Billing$")
	    public void user_choose_the_option_something_in_the_billing(String str) throws Throwable {
	     if(str.trim().equalsIgnoreCase("No, the address on record with my credit card is different"))
	     {
	    	 Reusables.ActionClick(driver.findElement(By.id("addressDoNotAddUseShippingInput")));
	     }
	     
	     if(str.trim().equalsIgnoreCase("Yes, my BILLING address is the same as the shipping address"))
	     {
	    	 Reusables.ActionClick(driver.findElement(By.id("addressAddUseShippingInput")));
	     }
	     
	    }
	    
	    
	    @When("^User enter the password$")
	    public void user_enter_the_password() throws Throwable {
	       driver.findElement(By.id("atg_store_passwordInput")).sendKeys(Reusables.GetTestProparty("PASSWORD"));
	    }

	    @When("^User enter the conform password$")
	    public void user_enter_the_conform_password() throws Throwable {
	    	 driver.findElement(By.id("atg_store_confirmPassword")).sendKeys(Reusables.GetTestProparty("PASSWORD"));
	    }
	    

	    @Then("^User should able to see the login fields$")
	    public void user_should_able_to_see_the_login_fields() throws Throwable {
	    	if (driver.findElement(By.id("emailAddressFormId")).isDisplayed() && driver.findElement(By.id("pwdFormId")).isDisplayed()) {
	            Assert.assertTrue("User should able to see the login fields", true);
	            log.info("User should able to see the login fields");
	        }
	    	else
	    	{
	    		Assert.fail("User not able to see the login fields");
	    		 log.error("User not  able to see the login fields");
	    	}
	    		
	       
	    }
	    
	    
	    @When("^User enter login details and click login button$")
	    public void user_enter_login_details_and_click_login_button() throws Throwable {
	    	driver.findElement(By.id("emailAddressFormId")).sendKeys(Reusables.GetTestProparty("EMAIL"));
	    	driver.findElement(By.id("pwdFormId")).sendKeys(Reusables.GetTestProparty("PASSWORD"));
	    	driver.findElement(By.xpath("//input[@value='Log In']")).click();
	    	Reusables.WaitforPageLoad();
	    }
	    

	    @Then("^User must login automatically$")
	    public void user_must_login_automatically() throws Throwable {
	    	user_clcik_the_close_vip_popup("close");
	    	Thread.sleep(1000);
	    	 Reusables.ActionClick(driver.findElements(By.xpath("//i[@class='fa fa-user']")));
	    	 driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		    if(driver.findElements(By.xpath("//a[contains(text(),'Sign Out')]")).size()>0)
		    {
		    	Assert.assertTrue("User  able to login automatically",true);
		    	log.info("User  able to login automatically");
		    	
		    }
		    else
		    {
		    
		    	Assert.fail("User not able to login automatically");
		    	log.error("User not able to login automatically");
		    }
		    driver.manage().timeouts().implicitlyWait(40, TimeUnit.SECONDS);
	    }
	    
	    
	    @Then("^User able to see the VIP badge$")
	    public void user_able_to_see_the_vip_badge() throws Throwable {
	    	Thread.sleep(1000);
	    	 Reusables.ActionClick(driver.findElements(By.xpath("//i[@class='fa fa-user']")));
	    	 driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		    if(driver.findElements(By.xpath("//a[contains(text(),'VIP - Active')]")).size()>0)
		    {
		    	Assert.assertTrue("User  able to login automatically",true);
		    	log.info("User  able to login automatically");
		    	
		    }
		    else
		    {
		    
		    	Assert.fail("User not able to login automatically");
		    	log.error("User not able to login automatically");
		    }
	    }
	    
	    
	    @When("^User click the edit of \"([^\"]*)\"$")
	    public void user_click_the_edit_of_something(String strArg1) throws Throwable {
	    	switch (strArg1.toLowerCase()) {
            case "shipping address":  
            	
            	Reusables.ActionClick(Reusables.GetNthElement(driver.findElements(By.xpath("//a[contains(text(),'Edit')]")), 1));
                     break;
            case "billing address":  Reusables.ActionClick(Reusables.GetNthElement(driver.findElements(By.xpath("//a[contains(text(),'Edit')]")), 2));
                     break;
            case "shipping method":  
            	
            	shippingoption=driver.findElement(By.xpath("//h3[text()='Shipping Method']/../..//strong")).getText();
            	Reusables.ActionClick(Reusables.GetNthElement(driver.findElements(By.xpath("//a[contains(text(),'Edit')]")), 3));
            	
            	
                     break;
	    	}
	    }
	    
	    
	    @Then("^User able to see shippingtype update$")
	    public void user_able_to_see_shippingtype_updated() throws Throwable {
	    	shippingoptionnew=shippingoptionnew.replaceAll("\\s+","");
	    	shippingoption=shippingoption.replaceAll("\\s+","");
	    	
	    	System.out.println(shippingoption +"::" +shippingoptionnew +"::"+ driver.findElement(By.xpath("//h3[text()='Shipping Method']/../..//strong")).getText());
	    	
	    	String shippingval=driver.findElement(By.xpath("//h3[text()='Shipping Method']/../..//strong")).getText().replaceAll("\\s+","");
	    	//if(driver.findElement(By.xpath("//h3[text()='Shipping Method']/../..//strong")).getText().contains(shippingoptionnew) || !(driver.findElement(By.xpath("//h3[text()='Shipping Method']/../..//strong")).getText().contains(shippingoption)) )
	    	System.out.println(shippingoption +"::" +shippingoptionnew +"::"+shippingval);
	    	if(shippingval.equalsIgnoreCase(shippingoptionnew))
	    	{
	    		Assert.assertTrue("User able to see shippingtype update", true);
	    		log.info("User able to see shippingtype update");
	    	}
	    	
	    	else
	    	{
	    		Assert.fail("User not able to see shippingtype update");
	    		log.error("User not able to see shippingtype update");
	    	}
	    }

	    
	    @When("^User click the login$")
	    public void user_click_the_login() throws Throwable {
	    	
	    	WD.until(ExpectedConditions.numberOfElementsToBeMoreThan(By.xpath("//i[@class='fa fa-user']"), 0));
	    	 Reusables.ActionClick(driver.findElements(By.xpath("//i[@class='fa fa-user']")));
	    		
	    	 WD.until(ExpectedConditions.numberOfElementsToBeMoreThan(By.xpath("//a[text()='Login']"), 0));
		        Reusables.ActionClick(driver.findElements(By.xpath("//a[text()='Login']")));
	    }
	    
	    @When("^User click the Return Center$")
	    public void user_click_the_return_center() throws Throwable {
	      	WD.until(ExpectedConditions.numberOfElementsToBeMoreThan(By.xpath("//i[@class='fa fa-user']"), 0));
	    	 Reusables.ActionClick(driver.findElements(By.xpath("//i[@class='fa fa-user']")));
	    		
	    	 WD.until(ExpectedConditions.numberOfElementsToBeMoreThan(By.xpath("//a[text()='Return Center']"), 0));
		        Reusables.ActionClick(driver.findElements(By.xpath("//a[text()='Return Center']")));
	    	
	    }
	    
	    @When("^User click the Track Order$")
	    public void user_click_the_track_order() throws Throwable {
	    	WD.until(ExpectedConditions.numberOfElementsToBeMoreThan(By.xpath("//i[@class='fa fa-user']"), 0));
	    	 Reusables.ActionClick(driver.findElements(By.xpath("//i[@class='fa fa-user']")));
	    	// WD.until(ExpectedConditions.numberOfElementsToBeMoreThan(By.xpath("//a[text()='Track Order']"), 0));
		      //  Reusables.ActionClick(driver.findElements(By.xpath("//a[text()='Track Order']")));	
		       
	    	// WD.until(ExpectedConditions.numberOfElementsToBeMoreThan(By.xpath("//li[@class='dropdown hidden-sm hidden-xs']//a[text()='Track Order']"), 0));
	    	 Reusables.ActionClick(driver.findElements(By.xpath("//ul[@class='toolBar']//a[text()='Track Order']")));
		        Thread.sleep(3000);
	    	 
	    }

	    @When("^User click the My Account$")
	    public void user_click_the_track_order1() throws Throwable {
	    	WD.until(ExpectedConditions.numberOfElementsToBeMoreThan(By.xpath("//i[@class='fa fa-user']"), 0));
	    	 Reusables.ActionClick(driver.findElements(By.xpath("//i[@class='fa fa-user']")));
	    	 WD.until(ExpectedConditions.numberOfElementsToBeMoreThan(By.xpath("//a[text()='My Account']"), 0));
		        Reusables.ActionClick(driver.findElements(By.xpath("//a[text()='My Account']")));	
	    	 
	    }
	    
	    @When("^User click the Track Order in my account$")
	    public void user_click_the_track_order_in_my_account() throws Throwable {
	       // Reusables.ActionClick(driver.findElement(By.xpath("//ul[@class='top']")).findElement(By.linkText("Track Order")));
	    	
	    	Reusables.ActionClick(driver.findElement(By.linkText("Order History")));
	    }
	    
	    @When("^User enter Email$")
	    public void user_enter_email() throws Throwable {
	    	driver.findElement(By.name("email")).click();
	        driver.findElement(By.name("email")).clear();
	        driver.findElement(By.name("email")).sendKeys(email);
	        
	       // System.out.println(email);
	    }

	    @When("^User navigate to email and click the cart link$")
	    public void user_navigate_to_email_and_click_the_cart_link() throws Throwable {
	    	Reusables.navigatetomailbox(email);
	    	Thread.sleep(2000);
	    	Reusables.ActionClick(driver.findElements(By.xpath("//div[contains(text(),'Here is your Sharper Image Shopping Cart!')]")));
	    	 	Thread.sleep(2000);
	    	 	driver.switchTo().frame("msg_body");
	    	 	
	    	 	Reusables.ActionClick(driver.findElement(By.xpath("//a[contains(.,' your shopping cart.')]")));
	    	 	Thread.sleep(2000);
	    }
	    @When("^User get the reset password$")
	    public void user_get_the_reset_password() throws Throwable {
	    	Reusables.navigatetomailbox(email);
	    	//Reusables.ActionClick(driver.findElement(By.xpath("//div[@style='height:100%;']")));
	    	Reusables.ActionClick(driver.findElements(By.xpath("//div[contains(text(),'Reset your Sharper Image password!')]")));
	    	Thread.sleep(2000);
	    	//driver.switchTo().frame("publicshowmaildivcontent");
	    	
	    	driver.switchTo().frame("msg_body");
	    	
	    	String s=driver.findElement(By.tagName("strong")).getText();
	    	 Password=s.replace("Temporary Password: ", "").trim();
	    	//System.out.println(Password);
	    	 
	    	// driver.findElement(By.linkText("Click here")).click();
	    	 
	    	 driver.get(Reusables.GetTestProparty("URL"));
	    	
	    }
	    
	    @Then("^User get the VIP welcome Email$")
	    public void user_get_the_vip_welcome_email() throws Throwable {
	    	Reusables.navigatetomailbox(email);
	    	//Reusables.ActionClick(driver.findElement(By.xpath("//div[@style='height:100%;']")));
	    	Reusables.ActionClick(driver.findElements(By.xpath("//div[contains(text(),'Welcome to the Sharper Image VIP Program!')]")));
	    	Thread.sleep(2000);
	    	//driver.switchTo().frame("publicshowmaildivcontent");
	    	
	    	driver.switchTo().frame("msg_body");
	    	
	    	if(driver.findElements(By.xpath("//img[@alt='Start Redeeming']")).size()>0)
	    	{
	    		log.info("User get the VIP welcome Email after signup as VIP");
	    		assertTrue(true, "User get the VIP welcome Email after signup as VIP");
	    		
	    	}
	    	
	    	else
	    	{
	    		log.error( "User did not  get the VIP welcome Email after signup as VIP");
	    		Assert.fail( "User did not get the VIP welcome Email after signup as VIP");
	    	}
	    	
	    	driver.switchTo().defaultContent();
	    	 driver.get(Reusables.GetTestProparty("URL"));
	    }

	    @When("^User click the login link$")
	    public void user_click_the_login_link() throws Throwable {
	    	driver.findElement(By.linkText("Click here")).click();
	    	driver.switchTo().defaultContent();
	    	Reusables.switchwindow();
	    }
	    
	    @When("^User reset password$")
	    public void user_reset_password() throws Throwable {
	    	
	    	driver.findElement(By.name("old-Password")).click();
	        driver.findElement(By.name("old-Password")).clear();
	        driver.findElement(By.name("old-Password")).sendKeys(Password);
	        
	        driver.findElement(By.name("new-Password")).click();
	        driver.findElement(By.name("new-Password")).clear();
	        driver.findElement(By.name("new-Password")).sendKeys("Qwerty_1");
	        
	        driver.findElement(By.name("conf-password")).click();
	        driver.findElement(By.name("conf-password")).clear();
	        driver.findElement(By.name("conf-password")).sendKeys("Qwerty_1");
	        
	    }

	    
	    @When("^User enter login with reset password$")
	    public void user_enter_login_with_reset_password() throws Throwable {
	    	   driver.findElement(By.id("emailAddressFormId")).click();
		        driver.findElement(By.id("emailAddressFormId")).clear();
		        driver.findElement(By.id("emailAddressFormId")).sendKeys(email);
		        
		        driver.findElement(By.id("loginPassword")).click();
		        driver.findElement(By.id("loginPassword")).clear();
		        driver.findElement(By.id("loginPassword")).sendKeys(Password);
		        driver.findElement(By.name("/atg/userprofiling/ProfileFormHandler.login")).click();
	    }

	    
	    @When("^User enter First Name,Last Name,Email, Confirm Email ,Password,Confirm Password$")
	    public void user_enter_first_namelast_nameemail_confirm_email_passwordconfirm_password(DataTable Data) throws Throwable {
	    	List<List<String>> data = Data.raw();
	    	
	    	for(List<String> row:data)
	    	{
	    	//driver.findElement(By.id("sFirstName")).click();
	        driver.findElement(By.id("sFirstName")).clear();
	        driver.findElement(By.id("sFirstName")).sendKeys(row.get(0));
	        
	        //driver.findElement(By.id("sLastName")).click();
	        driver.findElement(By.id("sLastName")).clear();
	        driver.findElement(By.id("sLastName")).sendKeys(row.get(1));
	        
	        //driver.findElement(By.id("emailAddress")).click();
	        driver.findElement(By.id("emailAddress")).clear();
	      if(row.get(2).contains("relogin"))
	      {
	    	  driver.findElement(By.id("emailAddress")).sendKeys(email);
	      }
	      
	      else{
	        email=Reusables.RandomString()+row.get(2);
	        
	        driver.findElement(By.id("emailAddress")).sendKeys(email);
	      }
	        if(row.get(3).contains("same"))
	        {
	        	JS.executeScript("arguments[0].scrollIntoView();", driver.findElement(By.id("confEmailAddress")));
	        	//driver.findElement(By.id("confEmailAddress")).click();
		        driver.findElement(By.id("confEmailAddress")).clear();
		        driver.findElement(By.id("confEmailAddress")).sendKeys(email);
	        }
	        
	        else
	        {
	        	//driver.findElement(By.id("confEmailAddress")).click();
		        driver.findElement(By.id("confEmailAddress")).clear();
		        driver.findElement(By.id("confEmailAddress")).sendKeys(Reusables.RandomString()+"@gmail.com");
	        }
	       
	       // driver.findElement(By.name("password")).click();
	        driver.findElement(By.name("password")).clear();
	        driver.findElement(By.name("password")).sendKeys(row.get(4));
	        
	       // driver.findElement(By.name("conf-password")).click();
	        driver.findElement(By.name("conf-password")).clear();
	        driver.findElement(By.name("conf-password")).sendKeys(row.get(5));
	      
	     
	        
	       // String xpath="//input[@value='Create an Account']";
	        //Reusables.ActionClick(driver.findElement(By.xpath(xpath)));
	        
	        Reusables.ActionClick(driver.findElement(By.name("/atg/userprofiling/RegistrationFormHandler.create")));
	       
	        if(row.get(6).length()>0)
	        {
	        	WD.until(ExpectedConditions.numberOfElementsToBeMoreThan(By.id("atg_store_formValidationError"), 0));
	        	if(driver.findElement(By.tagName("html")).getText().contains(row.get(6)))
	        	{
	        		Assert.assertTrue("User able to see the error :" +row.get(6), true);
	        		log.info("User able to see the error :" +row.get(6));
	        	}
	        	
	        	else
	        	{
	        		log.error("User not able to see the error :" +driver.findElement(By.tagName("html")).getText());
	        		Assert.fail("User not able to see the error :" +row.get(6));
	        		
	        	}
	        }
	        
	        
	    	}
	        
	    }

	    
	    
	    @When("^User changes old,New and confirm passwords$")
	    public void user_changes_oldnew_and_confirm_passwords(DataTable Data) throws Throwable {
	    	
	    		List<List<String>> data = Data.raw();
	    	
	    	for(List<String> row:data)
	    	{
	    	driver.findElement(By.name("old-Password")).click();
	        driver.findElement(By.name("old-Password")).clear();
	        driver.findElement(By.name("old-Password")).sendKeys(row.get(0));
	        
	        driver.findElement(By.name("new-Password")).click();
	        driver.findElement(By.name("new-Password")).clear();
	        driver.findElement(By.name("new-Password")).sendKeys(row.get(1));
	        
	        driver.findElement(By.name("conf-password")).click();
	        driver.findElement(By.name("conf-password")).clear();
	        driver.findElement(By.name("conf-password")).sendKeys(row.get(2));
	        
	        
	      //  String xpath="//input[@type='submit' and @value='Submit']";
	      //  Reusables.ActionClick(driver.findElements(By.xpath(xpath)));
	        
	        driver.findElement(By.name("/atg/userprofiling/ProfileFormHandler.changePassword")).click();
	        
	        if(row.get(3).length()>0)
	        {
	        	WD.until(ExpectedConditions.numberOfElementsToBeMoreThan(By.id("atg_store_formValidationError"), 0));
	        	if(driver.findElement(By.tagName("body")).getText().contains(row.get(3)))
	        	{
	        		Assert.assertTrue("User able to see the error :" +row.get(3), true);
	        		log.info("User able to see the error :" +row.get(3));
	        	}
	        	
	        	else
	        	{
	        		
	        		Assert.fail("User not able to see the error :" +row.get(3));
	        		log.error("User not able to see the error :" +row.get(3));
	        	}
	        	
	        }
	        
	        if(row.get(4).length()>0)
	        {
	        	WD.until(ExpectedConditions.numberOfElementsToBeMoreThan(By.id("atg_store_formValidationError"), 0));
	        	if(driver.findElement(By.tagName("body")).getText().contains(row.get(4)))
	        	{
	        		Assert.assertTrue("User able to see the error :" +row.get(4), true);
	        		log.info("User able to see the error :" +row.get(4));
	        	}
	        	
	        	else
	        	{
	        		Assert.fail("User not able to see the error :" +row.get(4));
	        		log.error("User not able to see the error :" +row.get(4));
	        	}
	        	
	        }
	        
	    	}
	       
	    }
	    
	    @When("^User relogin to the application$")
	    public void user_relogin_to_the_application() throws Throwable {
	    	  
		        driver.findElement(By.id("emailAddressFormId")).click();
		        driver.findElement(By.id("emailAddressFormId")).clear();
		        driver.findElement(By.id("emailAddressFormId")).sendKeys(email);
		        
		        driver.findElement(By.id("loginPassword")).click();
		        driver.findElement(By.id("loginPassword")).clear();
		        driver.findElement(By.id("loginPassword")).sendKeys("Qwerty_2");
		        driver.findElement(By.name("/atg/userprofiling/ProfileFormHandler.login")).click();
		      
	    }
	    
	    @When("^User relogin to the application as VIP$")
	    public void user_relogin_to_the_application_VIP() throws Throwable {
	    	  
		        driver.findElement(By.id("emailAddressFormId")).click();
		        driver.findElement(By.id("emailAddressFormId")).clear();
		        driver.findElement(By.id("emailAddressFormId")).sendKeys(email);
		        
		        driver.findElement(By.id("loginPassword")).click();
		        driver.findElement(By.id("loginPassword")).clear();
		        driver.findElement(By.id("loginPassword")).sendKeys(Reusables.GetTestProparty("PASSWORD"));
		        driver.findElement(By.name("/atg/userprofiling/ProfileFormHandler.login")).click();
		      
	    }
	    @When("^User click the cart$")
	    public void user_click_the_cart() throws Throwable {
	       // Reusables.ActionClick(driver.findElement(By.xpath("//span[@class='cartStar']")));
		   if(Totalitem>0)
		   {
		   driver.findElement(By.linkText(Integer.toString(Totalitem))).click();
		   }
		   
		   else
		   {
			   Reusables.ActionClick(driver.findElement(By.xpath("//span[@class='cartStar']")));
		   }
	    }
	    
	    
	    @When("^User click the  Gift Guide$")
	    public void user_click_the_gift_guide() throws Throwable {
	    	Reusables.ActionClick(driver.findElement(By.xpath("//div[@id='navbar']//a[@href='/si/view/category/Gift+Cards/100329?mainCatId=']")));
	    }
	    
	    
	    @When("^User Click the Deliver Yourself and Enter email$")
	    public void user_click_the_deliver_yourself() throws Throwable {
	    	
	    	Reusables.ActionClick(driver.findElement(By.xpath("//img[@src='//cdn1.sharperimage.com/si/img/productImages/999999/general-t1.jpg']")));
	     // Reusables.ActionClick(WD.until(ExpectedConditions.numberOfElementsToBeMoreThan(By.xpath("//div[@class='method-option']"), 0)));
	      
	    	Reusables.ActionClick(WD.until(ExpectedConditions.numberOfElementsToBeMoreThan(By.xpath("//a[contains(text(),'Deliver Yourself')]"), 0)));
	      //email=Reusables.RandomString()+"@mailinator.com";
	      
	     // log.info("Email:"+email);
	     WD.until(ExpectedConditions.elementToBeClickable(By.id("myEmail"))).sendKeys(Reusables.GetTestProparty("EMAIL"));
	    }
	    
	    @When("^User select the GiftBag Option$")
	    public void user_select_the_giftbag_option() throws Throwable {
	    	
	    	for(WebElement WE:driver.findElements(By.name("giftWrapSelected")))
	    	{
	    	if (!WE.isSelected()) {
	    		WE.click();
	    		log.info("User select the GiftBag Option");
	        }
	    	}
	    }

	    @When("^User enter his comments$")
	    public void user_enter_his_comments() throws Throwable {
	    	
	    	driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
	    	if(driver.findElements(By.xpath("//h4[contains(text(),'Gift Bag Shipping Details')]/../button")).size()>0)
	    	{
	    		Reusables.ActionClick(driver.findElement(By.xpath("//h4[contains(text(),'Gift Bag Shipping Details')]/../button")));
	    	}
	    	driver.manage().timeouts().implicitlyWait(40, TimeUnit.SECONDS);
	    	Thread.sleep(2000);
	    	if(Totalitem==1)
	    	{
	    	driver.findElement(By.id("giftMessage-message")).click();
	    	driver.findElement(By.id("giftMessage-message")).clear();
	    	Thread.sleep(2000);
	    	driver.findElement(By.id("giftMessage-message")).sendKeys("Automation Testing");
	    	log.info("User enter his comments :Automation Testing");
	    	}
	    }
	    
	    @Then("^User able to validate the Giftbag Price$")
	    public void user_able_to_validate_the_giftbag_price() throws Throwable {
	    	System.out.println(sumtotal);
	   float totalcost=sumtotal +Float.parseFloat(driver.findElement(By.xpath("//span[@class='gift-wrap-item-price-total']")).getText().replace("+$", ""));
	   double roundOff = Math.round(totalcost * 100.0) / 100.0;
	    //System.out.println(driver.findElement(By.xpath("//span[@class='gift-wrap-item-price-total']")).getText().replace("+$", ""));
	   double price=Double.parseDouble(driver.findElement(By.xpath("//td[text()='Subtotal:']/following-sibling::td")).getText().replace("$", ""));
	  
	   System.out.println(roundOff);
	   System.out.println(price);
	  if(Double.compare(roundOff, price)==0 )
	  {
		  log.info("User able to validate the Giftbag Price");
		  Assert.assertTrue("User able to validate the Giftbag Price", true);
	  }
	  else
	  {
		  log.error("User able to validate the Giftbag Price but validatation failed");
		  Assert.fail("User able to validate the Giftbag Price but validatation failed");
		
	  }
	  
	  
	    }
	    
	    @When("^User enter message for Giftcard$")
	    public void user_enter_message_for_giftcard() throws Throwable {
	     
	    	Reusables.ActionClick(driver.findElement(By.xpath("//img[@src='//cdn1.sharperimage.com/si/img/productImages/999999/general-t1.jpg']")));
	    	
	    	driver.findElement(By.id("gcMessage")).clear();
	    	//driver.findElement(By.id("gcMessage")).click();
	    	driver.findElement(By.id("gcMessage")).sendKeys("Automation Testing");
	    	driver.findElement(By.id("gcMessage")).sendKeys(Keys.TAB);
	    }

	    @When("^User Enter Email Delivery$")
	    public void user_enter_email_delivery() throws Throwable {
	    	
	    	System.out.println(driver.findElements(By.id("fromName")).size());
	    	//driver.findElement(By.id("fromName")).click();
	    	driver.findElement(By.id("fromName")).clear();
	    	driver.findElement(By.id("fromName")).sendKeys("TestFirstname");
	    	//driver.findElement(By.id("toEmail")).click();
	    	driver.findElement(By.id("toEmail")).clear();
	    	driver.findElement(By.id("toEmail")).sendKeys("testname123@gmail.com");
	    	//driver.findElement(By.id("toName")).click();
	    	driver.findElement(By.id("toName")).clear();
	    	driver.findElement(By.id("toName")).sendKeys("Test234");
	    }
	    
	    
	    @When("^User enter \"([^\"]*)\" giftcard$")
	    public void user_enter_something_giftcard(String strArg1) throws Throwable {
	        if(strArg1.equalsIgnoreCase("VALID"))
			{
	        	if(!isProd)
	        	{
				//driver.findElement(By.id("gc_cert_number")).click();
		        driver.findElement(By.id("gc_cert_number")).clear();
		        driver.findElement(By.id("gc_cert_number")).sendKeys(Reusables.GetTestProparty("STAGINGGIFTCARD"));
		       // driver.findElement(By.id("gc_email")).click();
		        driver.findElement(By.id("gc_email")).clear();
		        driver.findElement(By.id("gc_email")).sendKeys(Reusables.GetTestProparty("GIFTCARDEMAIL"));
	        	}
	        	
	        	else
	        	{
	        		driver.findElement(By.id("gc_cert_number")).clear();
			        driver.findElement(By.id("gc_cert_number")).sendKeys(Reusables.GetTestProparty("PRODGIFTCARD"));
			       // driver.findElement(By.id("gc_email")).click();
			        driver.findElement(By.id("gc_email")).clear();
			        driver.findElement(By.id("gc_email")).sendKeys(Reusables.GetTestProparty("PRODGIFTCARDEMAIL"));
	        	}
			}
			
	        if(strArg1.equalsIgnoreCase("INVALID"))
	        {
	        	WD.until(ExpectedConditions.elementToBeClickable(By.id("gc_cert_number")));
	        	
		        driver.findElement(By.id("gc_cert_number")).clear();
		        driver.findElement(By.id("gc_cert_number")).sendKeys(Reusables.GetTestProparty("STAGINGGIFTCARD"));
		        //driver.findElement(By.id("gc_email")).click();
		        driver.findElement(By.id("gc_email")).clear();
		        driver.findElement(By.id("gc_email")).sendKeys("ADSd2@yahoo.com");
	        }
			
	    }
	    
	    
	    @Then("^User should able to see the gift card balance$")
	    public void user_should_able_to_see_the_gift_card_balance() throws Throwable {
	       if(!isProd)
	       {
	    	   Thread.sleep(2000);
	    	   if (driver.findElement(By.tagName("html")).getText().contains("Gift certificate 3286216869860747 has")) {
	             log.info("User should able to see the gift card balance");
	             Assert.assertTrue("User should able to see the gift card balance", true);
	           }
	    	   
	    	   else
	    	   {
	    		   log.error("User not able to see the gift card balance");
		             Assert.fail("User should able to see the gift card balance");
	    	   }
	       }
	       
	      
	    }
	    
	    
	    @Given("^User navigate to \"([^\"]*)\" website$")
	    public void user_navigate_to_something_website(String strArg1) throws Throwable {
	    	driver.get(strArg1);
	    	driver.manage().window().maximize();
	    	driver.manage().deleteAllCookies();
	    	Thread.sleep(5000);
	    	
	    	Set<Cookie> totalCookies1 = driver.manage().getCookies();
	    	  System.out.println("Total Number Of cookies : " +totalCookies1.size());
	    	  
	    	  for (Cookie currentCookie : totalCookies1) {
	    	      System.out.println(String.format("%s -> %s -> %s", "Domain Name : "+currentCookie.getDomain(), "Cookie Name : "+currentCookie.getName(), "Cookie Value : "+currentCookie.getValue()));
	    	  }
	    }

	    @When("^User search for an item from google$")
	    public void user_search_for_an_item_from_google() throws Throwable {
	    	
	    	WD.until(ExpectedConditions.presenceOfElementLocated(By.id("lst-ib")));
	    	driver.findElement(By.id("lst-ib")).click();
	        driver.findElement(By.id("lst-ib")).clear();
	        driver.findElement(By.id("lst-ib")).sendKeys("200606   Towel Warmer sharperimage");
	        if(ismobile)
	        {
	        	 driver.findElement(By.name("btnG")).click();
	        }
	        else
	        {
	        driver.findElement(By.name("btnK")).click();}
	        WD.until(ExpectedConditions.elementToBeClickable(By.linkText("Towel Warmer - The Sharper Image")));
	        driver.findElement(By.linkText("Towel Warmer - The Sharper Image")).click();
	        
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

	    @Then("^User able to see and validate the VIP popup$")
	    public void user_able_to_see_and_validate_the_vip_popup(List<String> StrList) throws Throwable {
	    	
	    	if(WD.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//div[@id='vipModal']"))).isDisplayed())
	    	{
	    		log.info("User able to see the VIP popup");
	    		assertTrue(true, "User able to see the VIP popup");
	    		
	    		WebElement WE=WD.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//div[@id='vipModal']")));
	    		int i=0;
	    		for(WebElement W:WE.findElements(By.tagName("li")))
	    		{
	    			//System.out.println(W.getText());
	    			//System.out.println(StrList.get(i));
	    			if(W.getText().trim().equalsIgnoreCase(StrList.get(i).trim()))
						{
							log.info("User able to see the VIP popup message :"+W.getText());
							assertTrue(true, "User able to see the VIP popup message :"+W.getText());
						}
	    			
	    			else
	    			{
	    				log.error("User able to see the VIP popup message :"+StrList.get(i));
	    	    		Assert.fail("User able to see the VIP popup message :"+StrList.get(i));
	    			}
	    			i++;
	    		}
	    		
	    		
	    	}
	    	
	    	else
	    	{
	    		log.error("User not able to see the VIP popup");
	    		Assert.fail("User able to see the VIP popup");
	    	}
	        
	    } 
	    
	    
	    @When("^User click the \"([^\"]*)\" VIP popup$")
	    public void user_clcik_the_close_vip_popup(String s) throws Throwable {
	    	if(s.equalsIgnoreCase("close"))
	    	{
	    	Reusables.ActionClick(driver.findElement(By.xpath("//div[@id='vipModal']//button[@class='close']")));
	    	}
	    	
	    	else if(s.equalsIgnoreCase("START SAVING NOW"))
	    	{
	    		Reusables.ActionClick(driver.findElement(By.xpath("//div[@id='vipModal']//button[@class='btn btn-primary vipSubmit']")));
	    	}
	    }
	    
	    @When("^User sign up for VIP \"([^\"]*)\" password$")
	    public void user_sign_up_for_vip_something_password(String strArg1) throws Throwable {
	    	
	    	String s=driver.findElement(By.id("vipEmail")).getAttribute("value");
	       
	    	if(s.equalsIgnoreCase(email))
	    	{
	    		log.info("User email is auto populated");
	    		assertTrue(true, "User email is auto populated");
	    	}
	    	
	    	else
	    	{
	    		log.error("User email is not auto populated");
	    		Assert.fail( "User email is not auto populated");
	    	}
	    	
	    	switch(strArg1.toLowerCase()) {
	    	   case "with" :
	    		   driver.findElement(By.id("vipPassword")).clear();
	    		     driver.findElement(By.id("vipPassword")).sendKeys(Reusables.GetTestProparty("PASSWORD"));
	    		     break;
	    	   case "without" :
	    		     driver.findElement(By.id("vipPassword")).clear();
	    		     break;
	    	   case "wrong" :
	    		   driver.findElement(By.id("vipPassword")).clear();
	    		     driver.findElement(By.id("vipPassword")).sendKeys("qwttt"); 
	    		     break;
	    	}
	    }
	    
	    
@Then("^User able to see VIP thankyou pop up$")
public void user_able_to_see_vip_thankyou_pop_up(List<String> StringList) throws Throwable {  
	
	WD.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//div[@id='vipModal']//span[contains(text(),'THANK YOU FOR SIGNING UP FOR OUR VIP PROGRAM!')]")));
	 
	String s=WD.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//div[@id='vipModal']"))).getText();
	    	
	    	System.out.println(s);
	    	
	    	for(String str:StringList)
	    	{
	    		if(s.contains(str))
	    		{
	    			log.info("User able to see VIP thankyou pop up, with text :"+str);
		    		assertTrue(true, "User able to see VIP thankyou pop up, with text :"+str);
	    		}
	    		
	    		else
	    		{
	    			log.error("User not able to see VIP thankyou pop up, with text :"+str);
		    		Assert.fail("User not able to see VIP thankyou pop up, with text :"+str);
	    		}
	    	}
	    }
	    	
	    	

	    	@When("^User is able to close VIP thankyou pop up$")
		    public void user_is_able_to_close_vip_thankyou_pop_up() throws Throwable {
	        
	    		Reusables.ActionClick(driver.findElement(By.xpath("//div[@id='vipModal']//button[@class='close']")));
	    }
	    	
	    	@Then("^User able to get side banner$")
	        public void user_able_to_get_side_banner() throws Throwable {
	           Imagesource=driver.findElement(By.xpath("//section[@id='page_promo_stratum']//img")).getAttribute("src");
	        }

	        @Then("^User should not able to see the VIP side banner$")
	        public void user_should_not_able_to_see_the_vip_side_banner() throws Throwable {
	        	try{
	        	String src=driver.findElement(By.xpath("//section[@id='page_promo_stratum']//img")).getAttribute("src");
	        	
	        	System.out.println(Imagesource);
	        	System.out.println(src);
	        	if(!Imagesource.equals(src))
	        	{
	        		log.info("User should not able to see the VIP side banner :"+Imagesource);
		    		assertTrue(true, "User should not able to see the VIP side banner :"+Imagesource);
	        	}
	        	
	        	else
	        	{
	        		log.error("User should  able to see the VIP side banner :"+Imagesource);
		    		Assert.fail("User should  able to see the VIP side banner :"+Imagesource);
	        	}
	        	
	        	}
	        	
	        	catch(Exception e)
	        	{
	        		//log.info(e.toString());
	        	}
	        }


}
