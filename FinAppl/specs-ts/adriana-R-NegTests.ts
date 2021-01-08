<<<<<<< HEAD
import{Ledger} from '../../pageObjects/r-PO';
import{Data} from '../../pageObjects/b-PO';

let lg = new L();
let balance = new Data;

import * as dataF from '../../elements/financialData.json';
import { browser, by, element } from 'protractor';
import path from 'path';

describe('negative test for "Incarca Registru Jurnal" window', function(){
    browser.manage().timeouts().implicitlyWait(5000);
    browser.get('http..........');

    it('should open "Introducere Date" page', async()=>{
        await expect(browser.getCurrentUrl()).toEqual('http......');
        
        await expect(balance.uploadData.getText()).toMatch('Introducere Date');
        await balance.uploadData.click();
    });

    it('should enter "Incarca Registru Jurnal" section', async()=>{
        await lg.ledgerPage.click(); //click on page
        browser.getCurrentUrl().then((url)=>{ //validate the page you should be on
            console.log('URL is: '+url);
        });
    });

    it('should catch an error message when inserting partial data (no XLSX file)', async()=>{
        await lg.dateColumn.sendKeys(dataF.LedgerData.data);
        await lg.debitAccountColumn.sendKeys(dataF.LedgerData.debit_account);
        await lg.debitAmountCell.sendKeys(dataF.LedgerData.debit_amount);
        await lg.creditAccountColumn.sendKeys(dataF.LedgerData.credit_account);
        await lg.creditAmountCell.sendKeys(dataF.LedgerData.credit_amount);
        await lg.checkbox.click();
        await lg.submit.click();

        await lg.toastId.isPresent();
        await lg.toastId.getText().then(function(){
            lg.toastTitle.getText().then(function(text){
                console.log(text);
                expect(lg.toastTitle.getText()).toMatch('Server error');
            });
            lg.toastMessage.getText().then(function(text){
                console.log(text);
                expect(lg.toastMessage.getText()).toMatch('You need to attach at least a file');       //'Urmatoarele campuri nu au trecut validarea de tipar:' ,
                                                             //'Format Data Manuala');
                browser.sleep(3000);
            });
        });
    });

    it('should catch an error message when inserting no data', async()=>{
        await lg.dateColumn.clear(); //clear the previous data
        await lg.debitAccountColumn.clear();
        await lg.debitAmountCell.clear();
        await lg.creditAccountColumn.clear();
        await lg.creditAmountCell.clear();
        
        await lg.debitAccountColumn.sendKeys(dataF.LedgerData.debit_account);
        await lg.debitAmountCell.sendKeys(dataF.LedgerData.debit_amount);
        await lg.creditAccountColumn.sendKeys(dataF.LedgerData.credit_account);
        await lg.creditAmountCell.sendKeys(dataF.LedgerData.credit_account);
        await lg.checkbox.click();

        let fileToBeUploded = 'xlsx-data/RegistruJurnal_2017.xlsx';
        let absolutePath = path.resolve(__dirname, fileToBeUploded);
        console.log(absolutePath); // to validate the usage of the proper file
        await lg.file.sendKeys(absolutePath);
        await lg.submit.click();

        await lg.toastId.isPresent();
        await lg.toastId.getText().then(function(){
            lg.toastTitle.getText().then(function(text){
                console.log(text);
                expect(lg.toastTitle.getText()).toMatch('Valori introduse');
            });
            lg.toastMessage.getText().then(function(text){
                console.log(text);
                expect(lg.toastMessage.getText()).toMatch('Urmatoarele campuri sunt necesare:' ,
                                                             'Coloana Data Contabila');
                browser.navigate().refresh();
                browser.sleep(5000);
            });
        });
        
    });

    it('should catch an error message while inserting a wrong column data', async()=>{
        await lg.dateColumn.clear(); //clear the previous data
        await lg.debitAccountColumn.clear();
        await ledger.debitAmountCell.clear();
        await lg.creditAccountColumn.clear();
        await lg.creditAmountCell.clear();

        await lg.dateColumn.sendKeys(dataF.WrongLedgerData.data);
        await lg.debitAccountColumn.sendKeys(dataF.LedgerData.debit_account);
        await lg.debitAmountCell.sendKeys(dataF.LedgerData.debit_amount);
        await lg.creditAccountColumn.sendKeys(dataF.LedgerData.credit_account);
        await lg.creditAmountCell.sendKeys(dataF.LedgerData.credit_account);
        await lg.checkbox.click();

        let fileToBeUploded = 'xlsx-data/RegistruJurnal_2017.xlsx';
        let absolutePath = path.resolve(__dirname, fileToBeUploded);
        console.log(absolutePath); // to validate the usage of the proper file
        await lg.file.sendKeys(absolutePath);
        await lg.submit.click();

        await lg.toastId.isPresent();
        await lg.toastId.getText().then(function(){
            element // display title of confirmation message
            .all(by.id('toast-container'))
            .get(0)
            .all(by.className('toast-title'))
            .getText().then(function(text){
                console.log(text);
                expect(lg.toastTitle.getText()).toMatch('Process complet');
            });
            element  //display body of confirmation message
            .all(by.id('toast-container'))
            .get(0)
            .all(by.className('toast-message'))
            .getText().then(function(text){
                console.log(text);
                expect(lg.toastMessage.getText()).toMatch('Document processing started, check status.');
            });
        });
    });

    it('should catch an error message while pressing only the "proceseaza" button with no data insertion', async()=>{
        await lg.dateColumn.clear(); //clear the previous data
        await lg.debitAccountColumn.clear();
        await lg.debitAmountCell.clear();
        await lg.creditAccountColumn.clear();
        await lg.creditAmountCell.clear();

        await lg.submit.click();
        await lg.toastId.isPresent().then(function(){
            element // display title of confirmation message
            .all(by.id('toast-container'))
            .get(0)
            .all(by.className('toast-title'))
            .getText().then(function(text){
                console.log(text);
                expect(lg.toastTitle.getText()).toMatch('Valori introduse');
            });

            element  //display body of confirmation message
            .all(by.id('toast-container'))
            .get(0)
            .all(by.className('toast-message'))
            .getText().then(function(text){
                console.log(text);
                const messageDetails = `Urmatoarele campuri sunt necesare:
...`;
                expect (lg.toastMessage.getText()).toMatch(messageDetails)
            });    
        });
    });

    it('should cathc an error when clicking on checkbox with no other data insertion', async()=>{
        await lg.dateColumn.clear(); //clear the previous data
        await lg.debitAccountColumn.clear();
        await lg.debitAmountCell.clear();
        await lg.creditAccountColumn.clear();
        await lg.creditAmountCell.clear();
        await lg.checkbox.click();

        await ledger.toastId.isPresent().then(function(){
            element // display title of confirmation message
            .all(by.id('toast-container'))
            .get(0)
            .all(by.className('toast-title'))
            .getText().then(function(text){
                console.log(text);
                expect (lg.toastTitle.getText()).toMatch('Valori introduse');
            });

            element  //display body of confirmation message
            .all(by.id('toast-container'))
            .get(0)
            .all(by.className('toast-message'))
            .getText().then(function(text){
                console.log(text);
                const messageDetails = `Urmatoarele campuri sunt necesare:
...`;
                expect (lg.toastMessage.getText()).toMatch(messageDetails)
            });    
        });
    });
=======
import{Ledger} from '../../pageObjects/r-PO';
import{Data} from '../../pageObjects/b-PO';

let lg = new L();
let balance = new Data;

import * as dataF from '../../elements/financialData.json';
import { browser, by, element } from 'protractor';
import path from 'path';

describe('negative test for "Incarca Registru Jurnal" window', function(){
    browser.manage().timeouts().implicitlyWait(5000);
    browser.get('http..........');

    it('should open "Introducere Date" page', async()=>{
        await expect(browser.getCurrentUrl()).toEqual('http......');
        
        await expect(balance.uploadData.getText()).toMatch('Introducere Date');
        await balance.uploadData.click();
    });

    it('should enter "Incarca Registru Jurnal" section', async()=>{
        await lg.ledgerPage.click(); //click on page
        browser.getCurrentUrl().then((url)=>{ //validate the page you should be on
            console.log('URL is: '+url);
        });
    });

    it('should catch an error message when inserting partial data (no XLSX file)', async()=>{
        await lg.dateColumn.sendKeys(dataF.LedgerData.data);
        await lg.debitAccountColumn.sendKeys(dataF.LedgerData.debit_account);
        await lg.debitAmountCell.sendKeys(dataF.LedgerData.debit_amount);
        await lg.creditAccountColumn.sendKeys(dataF.LedgerData.credit_account);
        await lg.creditAmountCell.sendKeys(dataF.LedgerData.credit_amount);
        await lg.checkbox.click();
        await lg.submit.click();

        await lg.toastId.isPresent();
        await lg.toastId.getText().then(function(){
            lg.toastTitle.getText().then(function(text){
                console.log(text);
                expect(lg.toastTitle.getText()).toMatch('Server error');
            });
            lg.toastMessage.getText().then(function(text){
                console.log(text);
                expect(lg.toastMessage.getText()).toMatch('You need to attach at least a file');       //'Urmatoarele campuri nu au trecut validarea de tipar:' ,
                                                             //'Format Data Manuala');
                browser.sleep(3000);
            });
        });
    });

    it('should catch an error message when inserting no data', async()=>{
        await lg.dateColumn.clear(); //clear the previous data
        await lg.debitAccountColumn.clear();
        await lg.debitAmountCell.clear();
        await lg.creditAccountColumn.clear();
        await lg.creditAmountCell.clear();
        
        await lg.debitAccountColumn.sendKeys(dataF.LedgerData.debit_account);
        await lg.debitAmountCell.sendKeys(dataF.LedgerData.debit_amount);
        await lg.creditAccountColumn.sendKeys(dataF.LedgerData.credit_account);
        await lg.creditAmountCell.sendKeys(dataF.LedgerData.credit_account);
        await lg.checkbox.click();

        let fileToBeUploded = 'xlsx-data/RegistruJurnal_2017.xlsx';
        let absolutePath = path.resolve(__dirname, fileToBeUploded);
        console.log(absolutePath); // to validate the usage of the proper file
        await lg.file.sendKeys(absolutePath);
        await lg.submit.click();

        await lg.toastId.isPresent();
        await lg.toastId.getText().then(function(){
            lg.toastTitle.getText().then(function(text){
                console.log(text);
                expect(lg.toastTitle.getText()).toMatch('Valori introduse');
            });
            lg.toastMessage.getText().then(function(text){
                console.log(text);
                expect(lg.toastMessage.getText()).toMatch('Urmatoarele campuri sunt necesare:' ,
                                                             'Coloana Data Contabila');
                browser.navigate().refresh();
                browser.sleep(5000);
            });
        });
        
    });

    it('should catch an error message while inserting a wrong column data', async()=>{
        await lg.dateColumn.clear(); //clear the previous data
        await lg.debitAccountColumn.clear();
        await ledger.debitAmountCell.clear();
        await lg.creditAccountColumn.clear();
        await lg.creditAmountCell.clear();

        await lg.dateColumn.sendKeys(dataF.WrongLedgerData.data);
        await lg.debitAccountColumn.sendKeys(dataF.LedgerData.debit_account);
        await lg.debitAmountCell.sendKeys(dataF.LedgerData.debit_amount);
        await lg.creditAccountColumn.sendKeys(dataF.LedgerData.credit_account);
        await lg.creditAmountCell.sendKeys(dataF.LedgerData.credit_account);
        await lg.checkbox.click();

        let fileToBeUploded = 'xlsx-data/RegistruJurnal_2017.xlsx';
        let absolutePath = path.resolve(__dirname, fileToBeUploded);
        console.log(absolutePath); // to validate the usage of the proper file
        await lg.file.sendKeys(absolutePath);
        await lg.submit.click();

        await lg.toastId.isPresent();
        await lg.toastId.getText().then(function(){
            element // display title of confirmation message
            .all(by.id('toast-container'))
            .get(0)
            .all(by.className('toast-title'))
            .getText().then(function(text){
                console.log(text);
                expect(lg.toastTitle.getText()).toMatch('Process complet');
            });
            element  //display body of confirmation message
            .all(by.id('toast-container'))
            .get(0)
            .all(by.className('toast-message'))
            .getText().then(function(text){
                console.log(text);
                expect(lg.toastMessage.getText()).toMatch('Document processing started, check status.');
            });
        });
    });

    it('should catch an error message while pressing only the "proceseaza" button with no data insertion', async()=>{
        await lg.dateColumn.clear(); //clear the previous data
        await lg.debitAccountColumn.clear();
        await lg.debitAmountCell.clear();
        await lg.creditAccountColumn.clear();
        await lg.creditAmountCell.clear();

        await lg.submit.click();
        await lg.toastId.isPresent().then(function(){
            element // display title of confirmation message
            .all(by.id('toast-container'))
            .get(0)
            .all(by.className('toast-title'))
            .getText().then(function(text){
                console.log(text);
                expect(lg.toastTitle.getText()).toMatch('Valori introduse');
            });

            element  //display body of confirmation message
            .all(by.id('toast-container'))
            .get(0)
            .all(by.className('toast-message'))
            .getText().then(function(text){
                console.log(text);
                const messageDetails = `Urmatoarele campuri sunt necesare:
...`;
                expect (lg.toastMessage.getText()).toMatch(messageDetails)
            });    
        });
    });

    it('should cathc an error when clicking on checkbox with no other data insertion', async()=>{
        await lg.dateColumn.clear(); //clear the previous data
        await lg.debitAccountColumn.clear();
        await lg.debitAmountCell.clear();
        await lg.creditAccountColumn.clear();
        await lg.creditAmountCell.clear();
        await lg.checkbox.click();

        await ledger.toastId.isPresent().then(function(){
            element // display title of confirmation message
            .all(by.id('toast-container'))
            .get(0)
            .all(by.className('toast-title'))
            .getText().then(function(text){
                console.log(text);
                expect (lg.toastTitle.getText()).toMatch('Valori introduse');
            });

            element  //display body of confirmation message
            .all(by.id('toast-container'))
            .get(0)
            .all(by.className('toast-message'))
            .getText().then(function(text){
                console.log(text);
                const messageDetails = `Urmatoarele campuri sunt necesare:
...`;
                expect (lg.toastMessage.getText()).toMatch(messageDetails)
            });    
        });
    });
>>>>>>> 40a7c51c3a02f0e334e8f8d614a241f90d63393a
});