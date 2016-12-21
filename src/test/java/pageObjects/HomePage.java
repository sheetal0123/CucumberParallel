package pageObjects;

import org.junit.Assert;

import Utility.DriverFactory;

public class HomePage extends DriverFactory {

	public void navigatestourl(String url){
		driver.navigate().to(url);
	}
	
	public void verifytitle(String expectedtitle){
		//Assert.assertEquals(expectedtitle, driver.getTitle());
		Assert.assertTrue("", driver.getTitle().contains(expectedtitle));
	}
}
