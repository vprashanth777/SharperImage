package BDD.Cucumber.StepDefinations;

import java.util.concurrent.TimeUnit;

import org.apache.log4j.Logger;
import org.junit.Assert;
import org.openqa.selenium.By;
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
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import BDD.Cucumber.Core.Initialization;
import cucumber.api.PendingException;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.chrome.ChromeDriver;
public class SharperImage extends Initialization 
{
   Logger log = Logger.getLogger(this.getClass());
   
   
   String productname;
   String product;
   String quantitynum;
  
   @Given("^User navigate to sharperimage website$")
	public void user_navigate_to_sharperimage_website() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	   driver.get("https://www.sharperimage.com");
	   driver.manage().window().maximize();
	   
	   Thread.sleep(2000);
	}

	@Then("^User able to see the Homepage with Categories$")
	public void user_able_to_see_the_Homepage_with_Categories() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		try{
		WebElement popup = WD.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//span[@id='popup-close-firstVisit']")));
		if(popup.isDisplayed())
		   {
	       driver.findElement(By.xpath("//span[@id='popup-close-firstVisit']")).click();
	       Boolean iselementpresent = driver.findElements(By.xpath("//a[text()='Shop All Categories']")).size()!= 0;
		   if (iselementpresent == true)
		     {
			   Assert.assertTrue(true);
		      }
		   }
		}
		
		catch(Exception E)
		{}
		
		
		  
			   Boolean iselementpresent = driver.findElements(By.xpath("//a[text()='Shop All Categories']")).size()!= 0;
			   
			   if (iselementpresent == true)
			   {
				   Assert.assertTrue(true);
			   }
		   
		   
	   }

	

	@When("^User clicks on gadgets$")
	public void user_clicks_on_gadgets() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		   WebElement WE=driver.findElement(By.xpath("//div[@class='row']//a[contains(.,'Gadgets') and @class='cat-select sec-cat-select']"));
		   Actions actions = new Actions(driver);
		   actions.moveToElement(WE).build().perform();
		   Thread.sleep(1000);
		   actions.click(WE).build().perform();
	}
	@Then("^User should redirect to gadgets page$")
	   public void user_should_redirect_to_gadgets_page() throws Throwable {
	       // user verifies gadgets page is opened by verifying the heading of page 
		
		   WebElement gadgetheading;
		   gadgetheading= WD.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//h1[text()='Gadgets']")));
	   }

	@Then("^User able to  filter by Price$")
	public void user_able_to_filter_by_Price() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		//driver.findElement(By.xpath("(//li[text()='Price']//input)[3]")).click();
		
		ClickonElement(driver.findElement(By.xpath("(//li[text()='Price']//input)[3]")));
	}

	@Then("^User able to filter by Category$")
	public void user_able_to_filter_by_Category() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		Thread.sleep(1000);
		JavascriptExecutor jse = (JavascriptExecutor) driver;
	    jse.executeScript("window.scrollBy(0,500)", "");
	    ClickonElement(driver.findElement(By.xpath(" (//li[text()='By Category']//input)[11]")));
		//driver.findElement(By.xpath(" (//li[text()='By Category']//input)[11]")).click();
	}

	@When("^User selects any product within that range$")
	public void user_selects_any_product_within_that_range() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		Thread.sleep(1000);
		productname= driver.findElement(By.xpath("//a[contains(text(),'VR One Plus Virtual Reality...')]")).getText();
	//	driver.findElement(By.xpath("//a[contains(text(),'VR One Plus Virtual Reality...')]")).click();
		ClickonElement(driver.findElement(By.xpath("//a[contains(text(),'VR One Plus Virtual Reality...')]")));
	}

	@Then("^Application redirects to product specification page$")
	public void application_redirects_to_product_specification_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		int n=productname.length();
		  String prodname=productname.substring(0,n-4 );
		  product= driver.findElement(By.xpath("//h1[text()='VR One Plus Virtual Reality Glasses']")).getText();  
	      if(product.contains(prodname))
	 	 {
	 		 Assert.assertTrue("product Specification page is opened",true);
	 		
	 	 }
	 	 else
	 	 {
	 		 Assert.fail("product Specification page is opened");
	 		 log.error("step was failed due to correct product was not opened");
	 	 }
		  
	   }

   @Then("^User should click addtocart button$")
	   public void user_should_click_addtocart_button() throws Throwable {
	       // user clicks Add to cart button
		 //  driver.findElement(By.xpath("//input[@value='Add To Cart']")).click();
		   
		   ClickonElement( driver.findElement(By.xpath("//input[@value='Add To Cart']")));
	   }


	@Then("^Application redirects to shoppingcart page$")
	public void application_redirects_to_shoppingcart_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		 WebElement cart;
		 cart= WD.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//span[contains(text(),'Shopping Cart')]")));
	}

	@When("^User should select quantity as (\\d+)$")
	public void user_should_select_quantity_as(int quant) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		String quantnum=Integer.toString(quant);
	    quantitynum=quantnum;
		Select quantity=new Select(driver.findElement(By.xpath("//select[@class='input']")));
		quantity.selectByValue(quantnum);
	}

	@Then("^Price need to update by Quantity$")
	public void price_need_to_update_by_Quantity() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		String singlecost= driver.findElement(By.id("catalog_price")).getText(); 
	    int a=singlecost.length();
	    float quantnum=Float.parseFloat(quantitynum);
		 String singcost=singlecost.substring(1,a);
		 float scost = Float.parseFloat(singcost); 
		 String multiplecost= driver.findElement(By.xpath("//td[@class='cart-box-item-total col-sm-2 col-xs-3']")).getText();
		 int b=multiplecost.length();
		 String mulcost=multiplecost.substring(1,b);
		 float mcost = Float.parseFloat(mulcost);
		 float totalcost=scost*quantnum;
		 if(totalcost==mcost)
		 {
			 Assert.assertTrue("price has been updated",true);
		}
		 else
		 {
			 Assert.fail("price was not updated by changing quantity");
			 log.error("step case  failed price was not updated by changing quantity");
		 }
		
	}

	@Then("^User clicks checkout button$")
	public void user_clicks_checkout_button() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		 WebElement checkout= driver.findElement(By.xpath("//div[@class='row']//input[@value='Checkout']"));
		 if(checkout.isEnabled())
		 {
		   //checkout.click();
		   ClickonElement(checkout);
		 }
		 else
		 {
			Thread.sleep(3000);
		 }
		 
	   }
	

	@When("^Application redirects to shippingadress page$")
	public void application_redirects_to_shippingadress_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		WebElement adress;
		adress= WD.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//h1[text()='Shipping Address']")));
	}
	@Then("^User should enter Mandatory fields like (.+),(.+),(.+), (.+),(.+),(.+),(.+),(.+)$")
	 public void user_should_enter_mandatory_fields_like_(String firstname, String lastname, String streetadress, String city, String state, String zip, String phone, String mailid) throws Throwable {
		   //user enters the mandatory details for Shipping 
		   driver.findElement(By.xpath("//input[@placeholder='First']")).sendKeys(firstname);
	       driver.findElement(By.xpath("//input[@placeholder='Last']")).sendKeys(lastname);
		   driver.findElement(By.id("/atg/commerce/order/purchase/ShippingGroupFormHandler.shippingAddress_address1")).sendKeys(streetadress);
		   driver.findElement(By.id("/atg/commerce/order/purchase/ShippingGroupFormHandler.shippingAddress_city")).sendKeys(city);
		   Select state1=new Select(driver.findElement(By.id("/atg/commerce/order/purchase/ShippingGroupFormHandler.shippingAddress_state")));
		   state1.selectByValue(state);
	       driver.findElement(By.id("/atg/commerce/order/purchase/ShippingGroupFormHandler.shippingAddress_postalCode")).sendKeys(zip);
	       driver.findElement(By.id("/atg/commerce/order/purchase/ShippingGroupFormHandler.shippingAddressPhoneNumber1")).sendKeys(phone);
	       driver.findElement(By.id("/atg/commerce/order/purchase/ShippingGroupFormHandler.shippingAddressPhoneNumber2")).sendKeys(phone);
	       driver.findElement(By.id("/atg/commerce/order/purchase/ShippingGroupFormHandler.shippingAddressPhoneNumber3")).sendKeys(phone);
	       driver.findElement(By.id("atg_store_emailInput")).sendKeys(mailid);
	   }

	@When("^User click checkout  button$")
	public void user_click_checkout_button() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions

		   driver.findElement(By.xpath(" //input[@value='Checkout as a guest']")).click();
		  // driver.findElement(By.xpath(" //input[@value='Checkout as a guest']")).click();
	}

	@When("^Application Redirects to Payment page$")
	public void application_Redirects_to_Payment_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		WebElement payment;
	    payment= WD.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//h3[text()='Payment Information']")));
	}
	@Then("^User should enter valid card details$")
	   public void user_should_enter_valid_card_details() throws Throwable {
	       // User enters Credit card details.
		   driver.findElement(By.id("creditCardSelecter")).sendKeys("1234567890");
		   Select month=new Select(driver.findElement(By.id("BillingFormHandler.creditCard.expirationMonth")));
		   month.selectByValue("04");
		   Select year=new Select(driver.findElement(By.id("BillingFormHandler.creditCard.expirationYear")));
		   year.selectByValue("2020");
		   driver.findElement(By.id("BillingFormHandler.creditCardVerificationNumber")).sendKeys("1234");
	   }
	@Then("^User should click Placeorder button$")
	public void user_should_click_Placeorder_button() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		
		Thread.sleep(4000);
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
	    
}
