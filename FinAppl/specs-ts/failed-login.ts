import { clearScreenDown } from 'readline';
import { FailedLogin } from '../pageObjects/failed-login-PO';


const { browser, element, by } = require("protractor");
const { protractor } = require("protractor/built/ptor");

//working with failed-conf.js on chrome and firefox
describe('Test the element of Finlight login page', function () {
    browser.get('http.....');

    let failedLogin = new FailedLogin();

    it('expect error when displaying the window named "autentificare in contul tau"', async () => {
        await failedLogin.titleName.getText().then(function (text) {
            console.log(text);
        });
        expect(failedLogin.titleName.getText()).toEqual('Autentificare in cont'); //should fail

    });

    it('login with no useraddress sent', async () => {
        await failedLogin.nameCleared.clear();
        await failedLogin.userID.sendKeys('');
        await failedLogin.passw.sendKeys('123456');
        await failedLogin.go.click();
        browser.manage().timeouts().implicitlyWait(5000);

        await failedLogin.toastTitle.getText().then(function (text) {
            console.log(text);
        });
        expect(failedLogin.toastTitle.getText()).toContain('Valoari introduse'); //should fail
        expect(failedLogin.toastTitle.isDisplayed()).toBe(true);

    });

    it('login with a wrong user address', async () => {
        await failedLogin.nameCleared.clear();
        await failedLogin.userID.sendKeys('adrianaandreescu1@gmail.com');
        await failedLogin.passw.sendKeys('123456');
        await failedLogin.go.click();
        browser.manage().timeouts().implicitlyWait(5000);

        await failedLogin.toastMessage.getText().then(function (text) {
            console.log(text);
        });
        expect(failedLogin.toastMessage.getText()).toContain('Invalid username or password');
        expect(failedLogin.toastMessage.isDisplayed()).toBe(true);

    });


    it('login with a valid user but no password', async () => {
        await failedLogin.nameCleared.clear();
        await failedLogin.userID.sendKeys('adriana@a.a');
        await failedLogin.passw.sendKeys('');
        await failedLogin.buttonName.click();
        browser.manage().timeouts().implicitlyWait(7000);

        await failedLogin.toastTitle.getText().then(function (text) {
            console.log(text);
        });
        expect(failedLogin.toastTitle.getText()).toContain('Valoari introduse'); //should fail
        expect(failedLogin.toastTitle.isDisplayed()).toBe(true);

    });

    it('error message capture when login with no password', async () => {
        await failedLogin.nameCleared.clear();
        await failedLogin.userID.sendKeys('adriana@a.a');
        await failedLogin.buttonName.click();
        browser.manage().timeouts().implicitlyWait(7000);

        await failedLogin.toastMessage.getText().then(function (text) {
            console.log(text);
        });
        expect(failedLogin.toastMessage.getText()).toContain('Urmatoarele campuri sunt necesare : Parola');
        expect(failedLogin.toastMessage.isDisplayed()).toBe(true);

    }); 


});
