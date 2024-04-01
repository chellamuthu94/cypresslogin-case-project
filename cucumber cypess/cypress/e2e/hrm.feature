Feature: Login Functionality

  Scenario: Successful login
    Given I am on the login page
    When I enter  username "Admin"
    When  I enter  password "admin123"
    Then I click the login button
  
