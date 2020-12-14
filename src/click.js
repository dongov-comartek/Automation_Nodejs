describe("Learning APT", () => {
    const MAX_WAIT_TIME=5000;
  let pageUrl = "https://the-internet.herokuapp.com/";
  let formAuthenLinkText ='=Form Authentication';
  let usernameSelector = "#username";
  let userpassSelector = "#password";
  let loginBtn = '[type="submit"]';
  it("Click on link text", () => {
    //[1] open the index page
    browser.url(pageUrl);
    // [2] click on [form unthentication] link text
    $(formAuthenLinkText).waitForDisplayed(MAX_WAIT_TIME);
    $(formAuthenLinkText).click();
    //[3] input username and pass
    $(usernameSelector).waitForDisplayed(MAX_WAIT_TIME);
    $(usernameSelector).setValue('Dong dong')
    $(userpassSelector).waitForDisplayed(MAX_WAIT_TIME);
    $(userpassSelector).setValue('123456')
    // [4] click on login button
    $(loginBtn).waitForDisplayed(MAX_WAIT_TIME);
    $(loginBtn).click();
    browser.pause(3000);
  });
});
