
describe('Login Function', () => {

    it('Should login OK with correcr ccred', () => {
        browser.url("https://the-internet.herokuapp.com/login");
        browser.pause(2000);
    });

})