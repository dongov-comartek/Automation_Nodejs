describe("APT Learning", () => {
  let pageUrl = "https://the-internet.herokuapp.com";
  let welcomeTextSelector='h1';
  let currentUrl = "";
  let currentTitle = "";

  it("getUrl and getTitle", () => {
    // 1. Open the target page
    browser.url(pageUrl);
    $(welcomeTextSelector).waitForDisplayed(3000);
    browser.pause(2000);
    // 2. get the current page url and print out
currentUrl=browser.getUrl();
    // 3. get the current page title and print out
    currentTitle=browser.getTitle();
    console.log('Current URL: ' ,currentUrl);
    console.log('Current URL: ' ,currentTitle);
    browser.pause(2000);
  });
});
