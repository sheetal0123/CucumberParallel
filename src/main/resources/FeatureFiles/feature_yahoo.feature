Feature: Check parameterization

  Scenario Outline: Check navigation with multiple URL's
    When user navigates to "<url>"
    Then page should open with title "<expectedtitle>"

    Examples: 
      | url                   | expectedtitle |
      | https://in.yahoo.com/ | Yahoo         |
