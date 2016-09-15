package StepDefinitions;


import Utility.DriverFactory;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;


public class Hooks {
	
	DriverFactory df=new DriverFactory();
	
	@Before
	public void openbrowser(){
		df.createdriver();
		System.out.println("Current running thread id is "+Thread.currentThread().getId());
	}
	
	/*@After
	public void closedriver(){
		df.teardown();
	}*/
	
	/*@Before("@sanity")
	public void printmessagebeforescenario(){
		df.printmessage("This should be printted before sanity tahg only");
	}
	
	@After("@sanity")
	public void printmessageafterscenario(){
		df.printmessage("This should be printted after sanity tahg only");
	}
	
	@Before("@regression")
	public void printmessagebeforeregressionscenario(){
		df.printmessage("This should be printted before regression tahg only");
	}
	
	@After("@regression")
	public void printmessageafterregressionscenario(){
		df.printmessage("This should be printted after regression tahg only");
	}
	
	@After
	public void takescreenshot(Scenario scenario){
		if(scenario.isFailed()){
			
		}
	}*/



}
