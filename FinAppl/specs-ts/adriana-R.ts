<<<<<<< HEAD
import { browser } from 'protractor';
import { Ledger } from '../../pageObjects/r-PO';
import { Data } from '../../pageObjects/bc-PO';


let lg = new Lg;
let balance = new Data;
import * as dataF from '../../elements/financialData.json';
import path from 'path';
import { fstat } from 'fs';

describe('should test the insertion of all the data needed from Ledger files', function(){
    browser.get('http.............');
    
    it('should open "ID" page', async()=>{
        await expect(browser.getCurrentUrl()).toEqual('http.......');
        
        await expect(balance.uploadData.getText()).toMatch('Introducere Date');
        await balance.uploadData.click();
    });

    it('should enter "IR" section', async()=>{
        await lg.lP.click(); //click on page
        browser.getCurrentUrl().then((url)=>{ //validate the page you should be on
            console.log('URL is: '+url);
        });
    });

    it('should successfully upload "R" file', async()=>{
        await lg.dateColumn.sendKeys(dataF.LD.data);
        await lg.debitAccountColumn.sendKeys(dataF.LD.debit_account);
        await lg.debitAmountCell.sendKeys(dataF.LD.debit_amount);
        await lg.creditAccountColumn.sendKeys(dataF.LD.credit_account);
        await lg.creditAmountCell.sendKeys(dataF.LD.credit_amount);
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
                expect(lg.toastTitle.getText()).toMatch('Process complet');
            });
            lg.toastMessage.getText().then(function(){
                lg.toastMessage.getText().then(function(text){
                    console.log(text);
                    expect (lg.toastMessage.getText()).toMatch('Document processing started.');
                });
            });
        });
    });


=======
import { browser } from 'protractor';
import { Ledger } from '../../pageObjects/r-PO';
import { Data } from '../../pageObjects/bc-PO';


let lg = new Lg;
let balance = new Data;
import * as dataF from '../../elements/financialData.json';
import path from 'path';
import { fstat } from 'fs';

describe('should test the insertion of all the data needed from Ledger files', function(){
    browser.get('http.............');
    
    it('should open "ID" page', async()=>{
        await expect(browser.getCurrentUrl()).toEqual('http.......');
        
        await expect(balance.uploadData.getText()).toMatch('Introducere Date');
        await balance.uploadData.click();
    });

    it('should enter "IR" section', async()=>{
        await lg.lP.click(); //click on page
        browser.getCurrentUrl().then((url)=>{ //validate the page you should be on
            console.log('URL is: '+url);
        });
    });

    it('should successfully upload "R" file', async()=>{
        await lg.dateColumn.sendKeys(dataF.LD.data);
        await lg.debitAccountColumn.sendKeys(dataF.LD.debit_account);
        await lg.debitAmountCell.sendKeys(dataF.LD.debit_amount);
        await lg.creditAccountColumn.sendKeys(dataF.LD.credit_account);
        await lg.creditAmountCell.sendKeys(dataF.LD.credit_amount);
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
                expect(lg.toastTitle.getText()).toMatch('Process complet');
            });
            lg.toastMessage.getText().then(function(){
                lg.toastMessage.getText().then(function(text){
                    console.log(text);
                    expect (lg.toastMessage.getText()).toMatch('Document processing started.');
                });
            });
        });
    });


>>>>>>> 40a7c51c3a02f0e334e8f8d614a241f90d63393a
});