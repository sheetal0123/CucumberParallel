package Utility;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

public class DriverFactory {

	public static WebDriver driver;
	public static WebDriverWait waitvar=null;
	
	public void createdriver()
	{
		System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir")+"\\src\\main\\resources\\drivers\\chromedriver.exe");
		driver=new ChromeDriver();
	    driver.manage().window().maximize();
	    driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
	    driver.get("https://www.flipkart.com");
	    waitvar=new WebDriverWait(driver, 50);
	}
	
	public void teardown()
	{
		driver.quit();
	}
	
	public void printmessage(String message){
		System.out.println(message);
	}
	
	
}
