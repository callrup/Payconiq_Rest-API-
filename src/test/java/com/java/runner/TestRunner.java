package com.java.runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/java/resources/features/",
glue="com.java.stepdefs",
dryRun= false, 
strict=false,
monochrome=true,
tags= {"@DeleteBooking"},
plugin = {"pretty", "html:target/cucumber","html:target/cucumber-html-report",}
)
public class TestRunner {

}

