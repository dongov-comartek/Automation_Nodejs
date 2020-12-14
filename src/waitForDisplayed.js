describe("Learning APT", () => {
  let loginUrl = "https://the-internet.herokuapp.com/login";
  let usernameSelector = '#username';
  let userpassSelector = '#password';
  it("waitForDispalyed", () => {
    // [1] Open the login page
    browser.url(loginUrl);
    // [2] Wait for the username textbox displayed
    $(usernameSelector).waitForDisplayed(5000);
    $(usernameSelector).setValue("Dong Dong");
    $(userpassSelector).setValue(123456);
    // [3] input username and password
    browser.pause(2000);
  });
});
