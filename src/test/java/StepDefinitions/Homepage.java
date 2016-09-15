package StepDefinitions;

import pageObjects.HomePage;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Homepage {
	
	HomePage hp=new HomePage();
	
	@Given("^user is on HomePage$")
	public void user_is_on_HomePage()  {
	    hp.verifyhomepagetitle();
	}

	@Then("^user should see the search product box$")
	public void user_should_see_the_search_product_box()  {
	    hp.verifysearchboxispresent();
	}

	@Then("^user should see the deals of the day section$")
	public void user_should_see_the_deals_of_the_day_section()  {
	    hp.verifydealsofthedayispresent();
	}

	@Then("^user should see the flipkart assured section$")
	public void user_should_see_the_flipkart_assured_section(){
	    hp.verifyflipkartassuredispresent();
	}
	
	/*@When("^user click on login$")
	public void user_click_on_login(){
	    hp.clicklogin();
	}

	@Then("^login popup should be displayed$")
	public void login_popup_should_be_displayed(){
	    hp.verifylogin();
}*/
}