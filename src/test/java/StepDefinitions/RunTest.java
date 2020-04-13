package StepDefinitions;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(
		features="src/test/java/FeatureFiles",
		glue="StepDefinitions",
		plugin={"pretty", "json:target/cucumberreports.json"}
		//monochrome=true
		//dryRun=true
		)
public class RunTest {

}
