import { browser, by, element, protractor } from "protractor";
import { Login } from '../pageObjects/login-PO';

//working on 'chrome' and 'firefox' with config.js
describe('Login page tested', ()=> {
    beforeEach(async () => {
        browser.waitForAngularEnabled(false);
    });
    let login = new Login();

    it('expect that the name of the sign-in window to be "autentificare in contul tau"', async () => {
        await browser.get('https.....');
        await expect(login.expectedMessage.getText()).toMatch('Autentificare in contul tau');
    });

    it('Finlight login for a pre-defined user', async () => {
        await login.clearName.clear();
        await login.userName.sendKeys(protractor.browser.params.login.name);
        await login.passWord.sendKeys(protractor.browser.params.login.password);
        await login.goButton.click().then(function () {
            protractor.browser.navigate().back();
        });
    });

    it('should click on "Ai uitat parola?" link', async()=>{
        await login.clearName.clear();
        await login.userName.sendKeys(protractor.browser.params.login.name); //no password 
        login.resetPassw.getText().then(function(text){
            console.log(text); // should read the title of the link
        });
        await login.resetPassw.click();
        //await browser.switchTo().alert().accept();  
        await browser.switchTo().alert().dismiss();
    });

    it('should enter "Cere ajutor" link', async()=>{
        await login.clearName.clear();
        await expect(login.support.getText()).toMatch('Cere ajutor');
    });
});