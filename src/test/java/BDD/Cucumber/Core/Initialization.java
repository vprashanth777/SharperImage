package BDD.Cucumber.Core;




import java.io.File;
import java.io.FileInputStream;

import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URL;
import org.apache.log4j.Logger;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.NoSuchElementException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;
import java.util.logging.Level;

import org.apache.commons.logging.LogFactory;
import org.junit.Test;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Proxy;
import org.openqa.selenium.Proxy.ProxyType;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.chrome.ChromeOptions.*;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxProfile;
import org.openqa.selenium.firefox.internal.ProfilesIni;
import org.openqa.selenium.htmlunit.HtmlUnitDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.phantomjs.PhantomJSDriver;
import org.openqa.selenium.phantomjs.PhantomJSDriverService;
import org.openqa.selenium.remote.CapabilityType;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.safari.SafariDriver;
import org.openqa.selenium.support.ui.FluentWait;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.asserts.SoftAssert;

import com.gargoylesoftware.htmlunit.BrowserVersion;
import com.github.genium_framework.appium.support.server.AppiumServer;
import com.github.genium_framework.server.ServerArguments;

import BDD.Reusables.ReUsablesKeywords;
import cucumber.api.Scenario;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.remote.MobileCapabilityType;


public class Initialization{
	

   
	public  static WebDriver driver=null;
	public  static AndroidDriver ADdriver=null;
	public static FluentWait<WebDriver> WD=null;
	public static String BrowserType;
	public static String winHandleBefore ;
	public static  JavascriptExecutor JS=null;
	public static ReUsablesKeywords Reusables=null;
	
	public static  AppiumServer appiumServer=null;
	public static  Process process;
	public static boolean ismobile=false;
	public static boolean GlobalExecution=false;
	public static SoftAssert s_assert = new SoftAssert();
	public static boolean isProd=false;
	Properties properties;


	public static WebDriver GetDriverObject() 
	{
			
		  BrowserType = System.getProperty("BROWSER", "CHROMEIPHONE");
		DesiredCapabilities capabilities = new DesiredCapabilities();
		
		
		if(driver==null)
		{
			

	/*		try {
				Runtime.getRuntime().exec("taskkill /F /IM chromedriver.exe");
				Runtime.getRuntime().exec("taskkill /F /IM chromedriver1.exe");
				Runtime.getRuntime().exec("taskkill /F /IM IEDriverServer.exe");
				Runtime.getRuntime().exec("taskkill /F /IM geckodriver.exe");
				Runtime.getRuntime().exec("taskkill /F /IM phantomjs.exe");
				
				Runtime.getRuntime().exec("RunDll32.exe InetCpl.cpl,ClearMyTracksByProcess 8");
				Runtime.getRuntime().exec("RunDll32.exe InetCpl.cpl,ClearMyTracksByProcess 2");
				Runtime.getRuntime().exec("RunDll32.exe InetCpl.cpl,ClearMyTracksByProcess 16");
				Runtime.getRuntime().exec("RunDll32.exe InetCpl.cpl,ClearMyTracksByProcess 32");
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}*/
			
			
			if(BrowserType.equalsIgnoreCase("IE")) {
				
				
				try {
					Runtime.getRuntime().exec("RunDll32.exe InetCpl.cpl,ClearMyTracksByProcess 8");
					Runtime.getRuntime().exec("RunDll32.exe InetCpl.cpl,ClearMyTracksByProcess 2");
					Runtime.getRuntime().exec("RunDll32.exe InetCpl.cpl,ClearMyTracksByProcess 16");
					Runtime.getRuntime().exec("RunDll32.exe InetCpl.cpl,ClearMyTracksByProcess 32");
				} catch (IOException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
				
			
				capabilities.setCapability(CapabilityType.ACCEPT_SSL_CERTS, true);
				capabilities.setCapability(InternetExplorerDriver.INTRODUCE_FLAKINESS_BY_IGNORING_SECURITY_DOMAINS,true);
				capabilities.setCapability(InternetExplorerDriver.REQUIRE_WINDOW_FOCUS, true);
				//capabilities.setCapability(InternetExplorerDriver.ENABLE_ELEMENT_CACHE_CLEANUP, true);
				System.setProperty("webdriver.ie.driver", "src/test/resources/Drivers/IEDriverServer.exe");
				driver = new InternetExplorerDriver(capabilities);
			}
			
			
			else if(BrowserType.equalsIgnoreCase("CHROME")) {
				System.setProperty("webdriver.chrome.driver", "src/test/resources/Drivers/chromedriver1.exe");
				/*ChromeOptions chromeOptions = new ChromeOptions();
				chromeOptions.addArguments("window-size=1020,780");
				chromeOptions.setBinary("C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe");
				capabilities.setCapability(ChromeOptions.CAPABILITY, chromeOptions);*/
				driver=new ChromeDriver();
			}
			
			else if(BrowserType.equalsIgnoreCase("SAFARI")) {
				System.setProperty("webdriver.safari.noinstall", "true");
				driver=new SafariDriver();
				}
			
			else if(BrowserType.equalsIgnoreCase("FIREFOX")) {
				//System.setProperty("webdriver.chrome.driver", "Drivers/chromedriver.exe");
				//System.setProperty("webdriver.gecko.driver", "src/test/resources/Drivers/geckodriver.exe");
				
				driver=new FirefoxDriver();
				}
			
			else if(BrowserType.equalsIgnoreCase("PHANTOMJS")) {
				capabilities.setJavascriptEnabled(true);
				capabilities.setCapability("takesScreenshot", true);
				capabilities.setCapability("screen-resolution", "1280x1024");
				capabilities.setCapability("phantomjs.page.settings.userAgent", "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36");
				//capabilities.setCapability("phantomjs.page.settings.userAgent", "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.1862.2 Safari/537.36");
				capabilities.setCapability(PhantomJSDriverService.PHANTOMJS_EXECUTABLE_PATH_PROPERTY, "src/test/resources/Drivers/phantomjs.exe");
				 
				ArrayList<String> cliArgsCap = new ArrayList<String>();
				cliArgsCap.add("--webdriver-loglevel=NONE");
				capabilities.setCapability(PhantomJSDriverService.PHANTOMJS_CLI_ARGS, cliArgsCap);
								 
				driver = new PhantomJSDriver(capabilities);
				
			/*	capabilities.setJavascriptEnabled(true);                
				capabilities.setCapability("takesScreenshot", true);  
				capabilities.setCapability(PhantomJSDriverService.PHANTOMJS_EXECUTABLE_PATH_PROPERTY,"src/test/resources/Drivers/phantomjs.exe");
                    driver = new  PhantomJSDriver(capabilities);
				*/
			}
			//http://blog.wedoqa.com/2015/09/emulate-mobile-and-tablet-devices-with-chromedriver/
			else if(BrowserType.equalsIgnoreCase("CHROMEIPAD")) {
				Map<String, String> mobileEmulation = new HashMap<String, String>();
		        mobileEmulation.put("deviceName", "Apple iPad");
		        System.setProperty("webdriver.chrome.driver", "src/test/resources/Drivers/chromedriver.exe");
		        Map<String, Object> chromeOptions = new HashMap<String, Object>();
		        chromeOptions.put("mobileEmulation", mobileEmulation);
		        DesiredCapabilities capabilities1 = DesiredCapabilities.chrome();
		        capabilities1.setCapability(ChromeOptions.CAPABILITY, chromeOptions);
		         driver = new ChromeDriver(capabilities1);
		         ismobile=true;
		         //System.out.println("Hello");
			}
			
			else if(BrowserType.equalsIgnoreCase("CHROMEIPHONE")) {
				Map<String, String> mobileEmulation = new HashMap<String, String>();
		        mobileEmulation.put("deviceName", "Apple iPhone 6");
		        System.setProperty("webdriver.chrome.driver", "src/test/resources/Drivers/chromedriver.exe");
		        Map<String, Object> chromeOptions = new HashMap<String, Object>();
		        chromeOptions.put("mobileEmulation", mobileEmulation);
		        DesiredCapabilities capabilities1 = DesiredCapabilities.chrome();
		        capabilities1.setCapability(ChromeOptions.CAPABILITY, chromeOptions);
		         driver = new ChromeDriver(capabilities1);
		         ismobile=true;
			}
			
			else if(BrowserType.equalsIgnoreCase("CHROMENEXUS")) {
				Map<String, String> mobileEmulation = new HashMap<String, String>();
		        //mobileEmulation.put("deviceName", "Google Nexus 10");
				mobileEmulation.put("deviceName", "Google Nexus 5");
		        System.setProperty("webdriver.chrome.driver", "src/test/resources/Drivers/chromedriver.exe");
		        Map<String, Object> chromeOptions = new HashMap<String, Object>();
		        chromeOptions.put("mobileEmulation", mobileEmulation);
		        DesiredCapabilities capabilities1 = DesiredCapabilities.chrome();
		        capabilities1.setCapability(ChromeOptions.CAPABILITY, chromeOptions);
		         driver = new ChromeDriver(capabilities1);
		         ismobile=true;
			}
			
			else if(BrowserType.equalsIgnoreCase("HEADLESS")) {
				System.setProperty("webdriver.chrome.driver", "src/test/resources/Drivers/chromedriver1.exe");
				 ChromeOptions chromeOptions = new ChromeOptions();
				/* String windowSize = "1120,780";
			      chromeOptions.setBinary("C:\\Users\\prashanth.veldandi\\AppData\\Local\\Google\\Chrome SxS\\Application\\chrome.exe");
				 chromeOptions.addArguments("--headless",
		                 "--disable-gpu",
		                 "--incognito",
		                 "--whitelisted-ips=''",
		                "window-size=" + windowSize);
				  DesiredCapabilities capabilities1 = DesiredCapabilities.chrome();
				  capabilities1.setCapability(ChromeOptions.CAPABILITY, chromeOptions);*/

			    	chromeOptions.addArguments("headless");
			    	chromeOptions.addArguments("window-size=1200x600");
			    	chromeOptions.addArguments("disable-gpu");
			    	//chromeOptions.addArguments("no-startup-window");
			    	// chromeOptions.setBinary("src/test/resources/Drivers/chromedriver1.exe");
			       driver = new ChromeDriver(chromeOptions);
		        
		    
			}
			
			else if(BrowserType.equalsIgnoreCase("HTMLUNIT")) {
				LogFactory.getFactory().setAttribute("org.apache.commons.logging.Log",
						"org.apache.commons.logging.impl.NoOpLog");
				java.util.logging.Logger.getLogger("com.gargoylesoftware.htmlunit")
						.setLevel(Level.OFF);
				java.util.logging.Logger.getLogger("org.apache.commons.httpclient")
						.setLevel(Level.OFF);
				driver = new HtmlUnitDriver();
			
				
			}
			
			/*
			else if(BrowserType.equalsIgnoreCase("NATIVE") || BrowserType.equalsIgnoreCase("HYBRID") ) {
				
				
			      
		        capabilities.setCapability(CapabilityType.BROWSER_NAME, "");
		        capabilities.setCapability("deviceName", "Android Emulator");
		       // capabilities.setCapability("app","C:\\Users\\prashanth.veldandi\\Downloads\\Kesineni_POC_Android_V0.7_.apk");
		        
		        try {
					driver = new AndroidDriver(new URL("http://127.0.0.1:4723/wd/hub"), capabilities);
				} catch (MalformedURLException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			
			}
			
						
			else if(BrowserType.equalsIgnoreCase("MOBIWEB")) {
				
				
			
				if(process==null)
				{
					KeyWords.StartEmulator();
					
				}
				
				if(appiumServer==null)
				{
					
					KeyWords.StartAppium();
								
					
				}
				
				while(!appiumServer.isServerRunning())
				{
					try {
						Thread.sleep(60000);
					} catch (InterruptedException e) {
						// TODO Auto-generated catch block
						//e.printStackTrace();
					}
				}
				
				
				
				
		           capabilities.setCapability(CapabilityType.BROWSER_NAME, "Browser");
		           //capabilities.setCapability(MobileCapabilityType.PLATFORM_VERSION,"4.2.2");
		           capabilities.setCapability(MobileCapabilityType.PLATFORM_NAME,"Android"); 
		       
		        
		           capabilities.setCapability("deviceName", "Android Emulator");
		           try {
					driver = new AndroidDriver(new URL("http://127.0.0.1:4723/wd/hub"), capabilities);
				} catch (MalformedURLException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
				//capabilities.setCapability(CapabilityType.BROWSER_NAME, "Browser");
		       // capabilities.setCapability("deviceName", "Android Emulator");
		       
			}
			else if(BrowserType.equalsIgnoreCase("HTMLUNIT")) {
				LogFactory.getFactory().setAttribute("org.apache.commons.logging.Log",
						"org.apache.commons.logging.impl.NoOpLog");
				java.util.logging.Logger.getLogger("com.gargoylesoftware.htmlunit")
						.setLevel(Level.OFF);
				java.util.logging.Logger.getLogger("org.apache.commons.httpclient")
						.setLevel(Level.OFF);
				driver = new HtmlUnitDriver();
			
				
			}
			
		else if(BrowserType.equalsIgnoreCase("PHANTOMJS")) {
				
			
				capabilities.setJavascriptEnabled(true);                
				capabilities.setCapability("takesScreenshot", true);  
				capabilities.setCapability(PhantomJSDriverService.PHANTOMJS_EXECUTABLE_PATH_PROPERTY,"Drivers/phantomjs.exe");
                    driver = new  PhantomJSDriver(capabilities);
				
			}
			
			else if(BrowserType.equalsIgnoreCase("BROWSERSTACK")) {
			 String USERNAME = "prasanthpillai1";
			 String AUTOMATE_KEY = "pGCB5mwUkBfv7acdEGjB";
			 String URL = "https://" + USERNAME + ":" + AUTOMATE_KEY + "@hub-cloud.browserstack.com/wd/hub";
			 
			 ReadBrowserStack RBS=new ReadBrowserStack(Environment);
			 
					 if(Environment.equalsIgnoreCase("WINDOWS"))
					 {
					 capabilities.setCapability("browser", RBS.Browser);
					 capabilities.setCapability("browser_version", RBS.Browser_version);
					 capabilities.setCapability("os", RBS.OperatingSystem);
					 capabilities.setCapability("os_version", RBS.OperatingSystemversion);
					 capabilities.setCapability("resolution", "1024x768");
					 }
					 
					 else if(Environment.toLowerCase().contains("mobile"))
					 {
						 capabilities.setCapability("browserName", RBS.Browser);
						 capabilities.setCapability("platform", RBS.OperatingSystem);
						 capabilities.setCapability("device", RBS.Device);
					 }
			 
			 
			    try {
					driver = new RemoteWebDriver(new URL(URL), capabilities);
				} catch (MalformedURLException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
				
			}
			*/
			else {
				System.out.println("Please select a valid Browser");
				System.exit(0);
			}
			
			
		}
		
	
		driver.manage().timeouts().implicitlyWait(40, TimeUnit.SECONDS);
		//driver.manage().timeouts().pageLoadTimeout(120, TimeUnit.SECONDS);
		driver.manage().deleteAllCookies();
		 WD = new FluentWait<WebDriver>(driver);
		 WD.withTimeout(60, TimeUnit.SECONDS);
		 WD.pollingEvery(200, TimeUnit.MILLISECONDS);
		 WD.ignoring(NoSuchElementException.class);
		 
		//driver.manage().window().maximize();
		// Dimension d = new Dimension(1550,820);
			//Resize the current window to the given dimension
		//	driver.manage().window().setSize(d);
		winHandleBefore=driver.getWindowHandle();
		Reusables=new ReUsablesKeywords();
		JS = (JavascriptExecutor)driver;

        return driver;
		
	}

	public static String getBrowserType() {
		return BrowserType;
	}

	public static void teardown()
	{
		driver.close();
		driver.quit();
		driver=null;
	}
	
	}
