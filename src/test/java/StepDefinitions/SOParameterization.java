package StepDefinitions;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class SOParameterization {
	
	pageObjects.SOParameterization so=new pageObjects.SOParameterization();
	
	@When("^user navigates to \"(.*?)\"$")
	public void user_navigates_to(String url){
	    so.navigatestourl(url);
	}

	@Then("^page should open with title \"(.*?)\"$")
	public void page_should_open_with_title(String expectedtitle ){
	  so.verifytitle(expectedtitle);
}
}
