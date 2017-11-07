package BDD.Reusables.Dump;




import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.ProtocolException;
import java.net.URL;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.concurrent.TimeUnit;

import javax.net.ssl.SSLException;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;

import org.apache.log4j.Logger;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.phantomjs.PhantomJSDriver;
import org.openqa.selenium.phantomjs.PhantomJSDriverService;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.support.ui.FluentWait;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;
import org.xml.sax.InputSource;
import org.xml.sax.XMLReader;
import org.xml.sax.helpers.XMLReaderFactory;

import com.relevantcodes.extentreports.ExtentReports;
import com.relevantcodes.extentreports.ExtentTest;
import com.relevantcodes.extentreports.LogStatus;

import BDD.Reusables.xmlRead;

import java.io.File;
import java.io.IOException;
import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
 
public class ProductSitemap_old{
  
String pageUrl;
String logger;
ExtentReports extent;
ExtentTest test ;
Logger log;
String URL="https://www.sharperimage.com/si/productSitemap.xml";
@Test
public void testBrokenImages() throws IOException, InterruptedException {
	 pageUrl=URL;
	 
	 Logger log=Logger.getLogger(ProductSitemap_old.class);
	 log.info("ProductSitemap Validation for  ::"+URL);
	 
	  Date date = new Date();
	  SimpleDateFormat sdf =new SimpleDateFormat("MM/dd/yyyy h:mm:ss a");
	  String timeStamp = sdf.format(date);
		System.out.println(timeStamp.replaceAll("[^\\w]", "_"));
	  //System.out.println(page.select("title").text().substring(0, 15).replace(" ", ""));
	  extent = new ExtentReports("target/ProductSitemap_Valid_"+timeStamp.replaceAll("[^\\w]", "_")+".html", true);
	  test = extent.startTest("ProductSitemap("+URL+")", URL);

	  
		DesiredCapabilities capabilities = new DesiredCapabilities();
		capabilities.setJavascriptEnabled(true);
		capabilities.setCapability("takesScreenshot", true);
		capabilities.setCapability("screen-resolution", "1280x1024");
		capabilities.setCapability("phantomjs.page.settings.userAgent",
				"Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36");
		capabilities.setCapability(PhantomJSDriverService.PHANTOMJS_EXECUTABLE_PATH_PROPERTY,
				"src/test/resources/Drivers/phantomjs.exe");

		ArrayList<String> cliArgsCap = new ArrayList<String>();
		cliArgsCap.add("--webdriver-loglevel=NONE");
		capabilities.setCapability(PhantomJSDriverService.PHANTOMJS_CLI_ARGS, cliArgsCap);

		WebDriver driver = new PhantomJSDriver(capabilities);
		driver.manage().timeouts().implicitlyWait(40, TimeUnit.SECONDS);
		// driver.manage().timeouts().pageLoadTimeout(120, TimeUnit.SECONDS);
		driver.manage().deleteAllCookies();
		FluentWait<WebDriver> WD = new FluentWait<WebDriver>(driver);
		WD.withTimeout(60, TimeUnit.SECONDS);
		WD.pollingEvery(200, TimeUnit.MILLISECONDS);
		WD.ignoring(NoSuchElementException.class);
		driver.manage().window().setSize(new Dimension(1920, 1080));

		 
	  xmlRead xmldata=new xmlRead();
	  
	  for(String s:xmldata.readxml(URL))
	  {
		  
		  driver.get(s);
		  String[] bits = s.split("/");
		  String lastOne = bits[bits.length-1];
		  test.addScreenCapture(capture(driver,lastOne+"_"+timeStamp));
		  System.out.println(s);
		  if(driver.findElements(By.xpath("//ul[@class='pdp-info-actions']")).size()>0)
			{
				test.log(LogStatus.PASS, lastOne+" is avilable on site");
			}
			else
			{
				test.log(LogStatus.FAIL, lastOne+" is not avilable on site");
			}

		  
	  }
	  
	  extent.endTest(test);
	  extent.flush();
	  driver.close();
	  driver.quit();
     
}

public static String capture(WebDriver driver,String screenShotName) throws IOException
{
    TakesScreenshot ts = (TakesScreenshot)driver;
    File source = ts.getScreenshotAs(OutputType.FILE);
    String dest = "Sitemap/ProductSitemap/"+screenShotName+".png";
    File destination = new File(dest);
    FileUtils.copyFile(source, destination);        
                 
    return dest;
}

				
}