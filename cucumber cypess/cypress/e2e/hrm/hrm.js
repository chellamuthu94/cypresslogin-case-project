const { Given, When, Then, And } = require('cypress-cucumber-preprocessor/steps');
import LoginPage from '../page/LoginPage'
const loginPage = new LoginPage();

Given('I am on the login page', () => {
  loginPage.visit();
});

When('I enter  username {string}', (username) => {
 loginPage.fillUsername(username)
});
And('I enter  password {string}', (password) => {
 loginPage.fillPassword(password);
});
Then('I click the login button', () => {
  loginPage.submit();
});
