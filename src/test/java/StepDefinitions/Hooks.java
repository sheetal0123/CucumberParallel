package StepDefinitions;

import Utility.DriverFactory;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks {

	DriverFactory df = new DriverFactory();

	@Before
	public void openbrowser() {
		System.out.println(">>>>>>>>>>>>>>> @Hook > Before: "+ Thread.currentThread().getName()+"    id: "+Thread.currentThread().getId());
		
		df.createdriver();
		System.out.println("Current running thread id is " + Thread.currentThread().getId());
	}

	@After
	public void takescreenshot(Scenario scenario) {
		System.out.println(">>>>>>>>>>>>>>> @Hook > After: "+ Thread.currentThread().getName()+"    id: "+Thread.currentThread().getId());
		
		if (scenario.isFailed()) {
			byte[] screenshot = df.takescreenshotonfailure();
			scenario.embed(screenshot, "image/png");
		}
		
		df.teardown();
	}

}
