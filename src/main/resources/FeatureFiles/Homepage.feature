Feature: Homepage verification

@sanity
Scenario: Verify the homepage
Given user is on HomePage
Then user should see the search product box
And user should see the deals of the day section
And user should see the flipkart assured section

#Scenario: Verify the login
#When user click on login
#Then login popup should be displayed
