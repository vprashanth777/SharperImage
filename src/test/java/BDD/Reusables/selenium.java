package BDD.Reusables;

import java.util.HashMap;
import java.util.Map;

import org.openqa.selenium.By;
import org.openqa.selenium.Cookie;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.support.ui.ExpectedConditions;

import BDD.Cucumber.Core.Initialization;

public class selenium extends Initialization{

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		System.setProperty("webdriver.ie.driver", "src/test/resources/Drivers/IEDriverServer.exe");
		/*ChromeOptions chromeOptions = new ChromeOptions();
		chromeOptions.addArguments("window-size=1020,780");
		chromeOptions.setBinary("C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe");
		capabilities.setCapability(ChromeOptions.CAPABILITY, chromeOptions);*/
		driver=new InternetExplorerDriver();
		
		driver.get("https://www.sharperimage.com/si");
		
		try {
			Thread.sleep(4000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		((JavascriptExecutor) driver).executeScript("document.cookie='ABTest_MiniCart=A_SHOW_MINICART'");
		/*
		Cookie cookie = driver.manage().getCookieNamed("ABTest_MiniCart");
		//System.out.println(driver.manage().getCookieNamed("ABTest_MiniCart").getValue());
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
		
		*/
	}

}
