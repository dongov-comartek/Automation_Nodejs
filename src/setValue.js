describe('APT learning', () => {
    it('', () => {
        browser.url("https://the-internet.herokuapp.com/login");
        browser.pause(2000);
        let usernameSelector='#username_';
        $(usernameSelector).setValue("dong dong")

        browser.pause(3000);
    });
});