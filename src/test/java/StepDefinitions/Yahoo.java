package StepDefinitions;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Yahoo {
	
	@When("^user open yahoo\\.com$")
	public void user_open_yahoo_com() {
	   System.out.println("opened yahoo");
	}

	@Then("^yahoo\\.com should open$")
	public void yahoo_com_should_open() throws Throwable {
	System.out.println("Yahoo homepage");
	}

}
