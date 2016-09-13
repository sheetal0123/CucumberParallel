package StepDefinitions;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="src/main/resources/FeatureFiles",
		glue="StepDefinitions",
		plugin={"pretty", "html:target/cucumberreports"}
		//monochrome=true
		//dryRun=true
		)
public class ParallelTest {

}
