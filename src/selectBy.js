describe("APT learning", () => {
  let pageUrl = "https://the-internet.herokuapp.com/dropdown";
  let dropDownSelector = "#dropdown";
  it("Handle Dropdown menu", () => {
    // [1] open the target page
    browser.url(pageUrl);
    // [2] Select [Option 1] from the dropdown menu
    $(dropDownSelector).waitForDisplayed(5000);
    $(dropDownSelector).selectByVisibleText("Option 2");
    // [3] pause a little to rusult
    browser.pause(3000);
    // [4] Select [Option 1] by selectByAttribute
    $(dropDownSelector).selectByAttribute('value','1');
    // [5] pause a little to rusult
    browser.pause(2000);
  });
});
