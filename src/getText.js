describe("APT learning", () => {
  let pageUrl = "https://the-internet.herokuapp.com/dropdown";
  let hightlightText = "h3";
  let currentHightlightText;

  it("getText API", () => {
    // 1. Open the page
    browser.url(pageUrl);
    // 2. Get the hightlight text from the page
    $(hightlightText).waitForDisplayed(3000);
    currentHightlightText = $(hightlightText).getText();
    console.log(currentHightlightText)
    // 3. Pause a little to see the result
    browser.pause(2000);
  });
});
