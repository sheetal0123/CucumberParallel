package StepDefinitions;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDef {
	pageObjects.HomePage so=new pageObjects.HomePage();
	
	@When("^user navigates to \"(.*?)\"$")
	public void user_navigates_to(String url){
	    so.navigatestourl(url);
	    
	    
	    try {
			Thread.sleep(20000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	    System.out.println(">>>>>>>>>>>>>>> @Step > Navigate to: "+url+"     "+ Thread.currentThread().getName()+"    id: "+Thread.currentThread().getId());
	}

	@Then("^page should open with title \"(.*?)\"$")
	public void page_should_open_with_title(String expectedtitle ){
	  so.verifytitle(expectedtitle);
	}
}	
