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
 
public class CategorySitemap{
  
String pageUrl;
String logger;
ExtentReports extent;
ExtentTest test ;
Logger log;
String URL="https://www.sharperimage.com/si/categorySitemap.xml";
@Test
public void testBrokenImages() {
	 pageUrl=URL;
	 
	 Logger log=Logger.getLogger(CategorySitemap.class);
	 log.info("CategorySitemap Validation for  ::"+URL);
	 
	  Date date = new Date();
	  SimpleDateFormat sdf =new SimpleDateFormat("MM/dd/yyyy h:mm:ss a");
	  String timeStamp = sdf.format(date);
		System.out.println(timeStamp.replaceAll("[^\\w]", "_"));
	  //System.out.println(page.select("title").text().substring(0, 15).replace(" ", ""));
	  extent = new ExtentReports("target/CategorySitemap_Valid_"+timeStamp.replaceAll("[^\\w]", "_")+".html", true);
	  test = extent.startTest("CategorySitemap("+URL+")", URL);

	  
		 
	  xmlRead xmldata=new xmlRead();
	  Document doc;
	  for(String s:xmldata.readxml(URL))
	  {
		  String[] bits = s.split("/");
		  String lastOne = bits[bits.length-1];
		  
		 // System.out.println(s);
		   try {
			doc = Jsoup.connect(s).get();
		//System.out.println(doc.select("h1").size());
		  if(doc.select("h1").size()>0)
			{
			  System.out.println(s);
			}
			else
			{
				test.log(LogStatus.FAIL, s+"("+lastOne+")"+" Category not avilable on site");
			}
		  
		   } catch (IOException e) {
				// TODO Auto-generated catch block
			   test.log(LogStatus.FATAL, s+"("+lastOne+")"+" Category URL is broken");
				e.printStackTrace();
			}

		  
	  }
	  
	  extent.endTest(test);
	  extent.flush();
	 
     
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