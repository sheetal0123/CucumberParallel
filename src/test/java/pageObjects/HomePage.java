package pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.junit.Assert;


import Utility.DriverFactory;

public class HomePage extends DriverFactory {
	
	
	String expectedtitle="Online Shopping India | Buy Mobiles, Electronics, Appliances, Clothing and More Online at Flipkart.com";
	By searchbox=By.xpath("//div[@class='O8ZS_U']");
	By dealsoftheday=By.xpath("//div[@class='_1GRhLX _3JslKL _2tVPFM required-tracking']");
	By flipkartassured=By.xpath("//div[@class='_1GRhLX _3JslKL required-tracking']");
	By Login=By.linkText("Log In");
	By loginpopup=By.xpath("//div[@class='_32LSmx']");
	
	public void verifyhomepagetitle(){
		Assert.assertEquals(expectedtitle, driver.getTitle());
		System.out.println("The title has been verified");
	}
	
	public void verifysearchboxispresent(){
		waitvar.until(ExpectedConditions.visibilityOf(driver.findElement(searchbox)));
		Assert.assertTrue(driver.findElement(searchbox).isDisplayed());
	}
	
	public void verifydealsofthedayispresent(){
		waitvar.until(ExpectedConditions.visibilityOf(driver.findElement(dealsoftheday)));
		Assert.assertTrue(driver.findElement(dealsoftheday).isDisplayed());
	}
	
	public void verifyflipkartassuredispresent(){
		waitvar.until(ExpectedConditions.visibilityOf(driver.findElement(flipkartassured)));
		Assert.assertTrue(driver.findElement(flipkartassured).isDisplayed());
	}
	
	public void clicklogin(){
		driver.findElement(Login).click();
	}
	
	public void verifylogin(){
		waitvar.until(ExpectedConditions.visibilityOf(driver.findElement(loginpopup)));
		Assert.assertTrue(driver.findElement(loginpopup).isDisplayed());
	}

}
