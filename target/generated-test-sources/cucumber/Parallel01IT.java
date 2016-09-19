import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(strict = true,
    features = {"classpath:FeatureFiles/Homepage.feature"},
    format = {"json:target/cucumber-parallel/1.json", "pretty"},
    monochrome = true,
    tags = {"~@ignored"},
    glue = { "StepDefinitions" })
public class Parallel01IT {
}