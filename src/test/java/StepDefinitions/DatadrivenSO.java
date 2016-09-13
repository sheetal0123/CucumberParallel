package StepDefinitions;

import org.junit.Assert;

import Utility.DriverFactory;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class DatadrivenSO extends DriverFactory {
	
	@When("^user enter \"(.*)\" $")
	public void user_enter_url(String url){
	   driver.navigate().to(url);
	}

	@Then("^url should open and title should match with \"(.*)\" $")
	public void url_should_open(String expectedtitle) {
	   Assert.assertEquals(expectedtitle,driver.getTitle());
	}


}
