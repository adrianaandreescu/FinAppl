import { browser } from 'protractor';
import { Login } from '../pageObjects/login-PO';
import { Registration } from '../pageObjects/registration-page-PO';


describe ('should enter the "inregistrare" page and upload the data required to register a new client', function(){

    beforeEach(async () => {
        browser.waitForAngularEnabled(true);   
    });

    let initialLogin = new Login();

    const registration = new Registration();

    it('should read the title of the box, "Autentificare in contul tau"', async()=>{
        await browser.get('https.........');

        await expect(initialLogin.expectedMessage.isDisplayed()).toBe(true);
        await expect(initialLogin.expectedMessage.getText()).toMatch('Autentificare in contul tau');
        initialLogin.expectedMessage.getText().then(function(text){
            console.log(text);
        });
    });

    it('should click on "inregistrare" button and get on that page', async()=>{
        await initialLogin.clearName.clear(); //should clear the user box 
        await expect(registration.regist.isPresent()).toBe(true); //should see the "inregisrtare"  title
        await expect(registration.regist.getText()).toMatch('Inregistrare');
        registration.regist.getText().then(function(text){
            console.log(text);
        });
        await registration.regist.click();
    });

    it('should read the title of tha window, "Creare cont"', async()=>{
        await expect(registration.pageTitle.getText()).toMatch('Creare cont');
        registration.pageTitle.getText().then(function(text){
            console.info(text);
        });
    }); 

    it('should register the specific data for each box', async()=>{
        await registration.clientName.sendKeys(browser.params.registerNewClient.clientAdriana.client);
        await registration.userAddress.sendKeys(browser.params.registerNewClient.clientAdriana.address);
        await registration.clientPhone.sendKeys(browser.params.registerNewClient.clientAdriana.phone);
        await registration.clientPassword.sendKeys(browser.params.registerNewClient.clientAdriana.passwd);
        await registration.confirmationPassword.sendKeys(browser.params.registerNewClient.clientAdriana.confirmpasswd);
        await registration.organizationPin.sendKeys(browser.params.registerNewClient.clientAdriana.orgPin);
    });
});