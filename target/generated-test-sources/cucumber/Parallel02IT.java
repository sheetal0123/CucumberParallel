import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(strict = true,
    features = {"classpath:FeatureFiles/SOParameterization.feature"},
    format = {"json:target/cucumber-parallel/2.json", "pretty"},
    monochrome = true,
    tags = {"~@ignored"},
    glue = { "StepDefinitions" })
public class Parallel02IT {
}