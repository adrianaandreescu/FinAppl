<<<<<<< HEAD
import { Workbook, Worksheet, Row, Cell } from "exceljs";
import path from "path";
import { browser, by, element, Key, protractor } from "protractor";
import {DataBalanceSheet} from '../../pageObjects/b-PO';
import * as dataF from '../../elements/financialData.json';


let b = new Data();


describe('should test the "Introducere date" section with all its functionalities', function(){
    browser.get('http......');    

    it('should read the title of section, "Introducere Date"', async()=>{
        await expect(b.uploadData.getText()).toMatch('Introducere Date');
    });

    it('should perform click ction on "Data Balanta Contabila" field', async()=>{
        await b.uploadData.click();
        expect(b.upBalanceSheet.isPresent()); 
        await b.upBalanceSheet.getText().then(function(text){
            console.log(text);
        });
        await b.upBalanceSheet.click();
        await expect(b.upBalanceSheet.isDisplayed()).toBe(true);
        await expect(b.upBalanceSheet.getText()).toMatch('Incarca Balanta Contabila');
    });

    it('test the import of data without uploading the xlxs BalanceSheet file', async()=>{
        await b.startDate.clear();
        await b.startDate.sendKeys(dataF.BalanceData.data);
        await b.startDate.sendKeys(Key.NUMPAD1, Key.NUMPAD2, Key.ARROW_RIGHT, Key.NUMPAD2, Key.NUMPAD0, Key.NUMPAD1, Key.NUMPAD6);
        await b.accountCell.sendKeys(dataF.BalanceData.account);
        await b.initialDebitCell.sendKeys(dataF.BalanceData.debit);
        await b.initialCreditCell.sendKeys(dataF.BalanceData.credit);

        var fileToUpload = 'xlsx-data/balanta_analitica_12.2016.xlsx';
        var absolutePath = path.resolve(__dirname, fileToUpload);
            
        console.log(absolutePath);
        //await b.fileUpload.sendKeys(absolutePath);  don't upload the file 

        await b.processBtn.click();
                
        await b.toastId.isPresent(); //catch the error presence
        await b.toastId.getText().then(function(){ 
            b.toastTitle.getText().then(function(text){
                console.log(text);//catch the error message
                expect(b.toastTitle.getText()).toMatch('Ledger Upload');
            });
            b.toastMessage.getText().then(function(text){
                console.log(text);
                expect(b.toastMessage.getText()).toMatch('Please select at least one file.');
            });                        
        });
    });    

    it('test the import of data without specifying any date', async()=>{
        await b.startDate.clear();
        //await b.startDate.sendKeys(dataF.BalanceData.data);
        //await b.startDate.sendKeys(Key.NUMPAD2, Key.NUMPAD2, Key.ARROW_RIGHT, Key.NUMPAD1, Key.NUMPAD0, Key.NUMPAD1, Key.NUMPAD6);
        await b.accountCell.sendKeys(dataF.BalanceData.account);
        await b.initialDebitCell.sendKeys(dataF.BalanceData.debit);
        await b.initialCreditCell.sendKeys(dataF.BalanceData.credit);

        var fileToUpload = 'xlsx-data/balanta_analitica_12.2016.xlsx';
        var absolutePath = path.resolve(__dirname, fileToUpload);
            
        console.log(absolutePath);
        await b.fileUpload.sendKeys(absolutePath);  

        await b.processBtn.click();
                
        await b.toastId.isPresent(); //catch the error presence
        await b.toastId.getText().then(function(){ 
            b.toastTitle.getText().then(function(text){
                console.log(text);//catch the error message
                expect(b.toastTitle.getText()).toMatch('Valori introduse');
            });
            b.toastMessage.getText().then(function(text){
                console.log(text);
                expect(b.toastMessage.getText()).toMatch('Urmatoarele campuri sunt necesare:....');
            });                        
        });
    });   
    
    it('test the import of data by specifying a wrong date (YYYY=1016)', async()=>{
        await b.startDate.clear();
        await b.startDate.sendKeys(dataF.WrongBalanceData1.data1);
        await b.startDate.sendKeys(Key.NUMPAD1, Key.NUMPAD2, Key.ARROW_RIGHT, Key.NUMPAD1, Key.NUMPAD0, Key.NUMPAD1, Key.NUMPAD6);
        await b.accountCell.sendKeys(dataF.BalanceData.account);
        await b.initialDebitCell.sendKeys(dataF.BalanceData.debit);
        await b.initialCreditCell.sendKeys(dataF.BalanceData.credit);

        var fileToUpload = 'xlsx-data/balanta_analitica_12.2016.xlsx';
        var absolutePath = path.resolve(__dirname, fileToUpload);
            
        console.log(absolutePath);
        await b.fileUpload.sendKeys(absolutePath);  

        await b.processBtn.click();
                
        await b.toastId.isPresent(); //should catch the error presence
        await b.toastId.getText().then(function(){ 
            b.toastTitle.getText().then(function(text){
                console.log(text);//should catch the error message
                expect(b.toastTitle.getText()).toMatch('Valori introduse'); //it displays a success title message
            });
            b.toastMessage.getText().then(function(text){
                console.log(text);
                expect(balanceSheet.toastMessage.getText()).toMatch('Urmatoarele campuri sunt necesare:...'); //it displays a success body message
            });                        
        });
    });    

    it('test the import of data by specifying a wrong date (YYYY=3016)', async()=>{
        await b.startDate.clear();
        await b.startDate.sendKeys(dataF.WrongBalanceData2.data2);
        await b.startDate.sendKeys(Key.NUMPAD0, Key.NUMPAD1, Key.ARROW_RIGHT, Key.NUMPAD3, Key.NUMPAD0, Key.NUMPAD1, Key.NUMPAD6);
        await b.accountCell.sendKeys(dataF.BalanceData.account);
        await b.initialDebitCell.sendKeys(dataF.BalanceData.debit);
        await b.initialCreditCell.sendKeys(dataF.BalanceData.credit);

        var fileToUpload = 'xlsx-data/balanta_analitica_12.2016.xlsx';
        var absolutePath = path.resolve(__dirname, fileToUpload);
            
        console.log(absolutePath);
        await b.fileUpload.sendKeys(absolutePath);  

        await b.processBtn.click();
                
        await b.toastId.isPresent(); //should catch the error presence
        await b.toastId.getText().then(function(){ 
            b.toastTitle.getText().then(function(text){
                console.log(text);//should catch the error message
                expect(b.toastTitle.getText()).toMatch('Ledger Upload'); //it displays the title success message
            });
            b.toastMessage.getText().then(function(text){
                console.log(text);
                expect(b.toastMessage.getText()).toMatch('Please select at least one file.'); //it displays the body success message
            });                        
        });
    });    

    it('should NOT insert data in "AccountCell" field and throw an error message', async()=>{
        await b.startDate. clear();
        await b.accountCell .clear();
        await b.initialDebitCell.clear();
        await b.initialCreditCell.clear();

        await b.startDate.sendKeys(dataF.BalanceData.data);
        await b.startDate.sendKeys(Key.NUMPAD1, Key.NUMPAD2, Key.ARROW_RIGHT, Key.NUMPAD2, Key.NUMPAD0, Key.NUMPAD1, Key.NUMPAD6);
        //await b.accountCell.sendKeys('');
        await b.initialDebitCell.sendKeys(dataF.BalanceData.debit);
        await b.initialCreditCell.sendKeys(dataF.BalanceData.credit);

        var fileToUpload = 'xlsx-data/balanta_analitica_12.2016.xlsx';
        var absolutePath = path.resolve(__dirname, fileToUpload);
            
        console.log(absolutePath);
        await b.fileUpload.sendKeys(absolutePath);

        await b.processBtn.click();
        await b.toastId.isPresent();
        await b.toastId.getText().then(function(){
            element // display title of error message
            .all(by.id('toast-container'))
            .get(0)
            .all(by.className('toast-title'))
            .getText().then(function(text){
                console.log(text);
                expect(b.toastTitle.getText()).toMatch('Valori introduse');
            });

            element  //display body of confirmation message
            .all(by.id('toast-container'))
            .get(0)
            .all(by.className('toast-message'))
            .getText().then(function(text){
                console.log(text);
                expect(b.toastMessage.getText()).toMatch('Urmatoarele campuri sunt necesare:',
                                                                   'Account Column');
            });
        });    
    });  
    
    it('should NOT insert data in "Initial Credit Amount Cell" field and throw an error message', async()=>{
        browser.navigate().refresh();

        await b.startDate.sendKeys(dataF.BalanceData.data);
        await b.startDate.sendKeys(Key.NUMPAD1, Key.NUMPAD2, Key.ARROW_RIGHT, Key.NUMPAD2, Key.NUMPAD0, Key.NUMPAD1, Key.NUMPAD6);
        await b.accountCell.sendKeys(dataF.BalanceData.account); 
        await b.initialDebitCell.sendKeys(dataF.BalanceData.debit);
        //await b.initialCreditCell.sendKeys(''); //should NOT insert any data

        var fileToUpload = 'xlsx-data/balanta_analitica_12.2016.xlsx';
        var absolutePath = path.resolve(__dirname, fileToUpload);
            
        console.log(absolutePath);
        await b.uploadData.sendKeys(absolutePath);
        await b.processBtn.click();
        element // display title of error message
            .all(by.id('toast-container'))
            .get(0)
            .all(by.className('toast-title'))
            .getText().then(function(text){
                console.log(text);
            });

        element  //display body of error message
            .all(by.id('toast-container'))
            .get(0)
            .all(by.className('toast-message'))
            .getText().then(function(text){
                console.log(text);
            });   
    });
    
    it('should NOT insert data in "Initial Debit Amount Cell" field and throw an error message', async()=>{
        browser.navigate().refresh();

        await b.startDate.sendKeys(dataF.BalanceData.data);
        await b.startDate.sendKeys(Key.NUMPAD1, Key.NUMPAD2, Key.ARROW_RIGHT, Key.NUMPAD2, Key.NUMPAD0, Key.NUMPAD1, Key.NUMPAD6);
        await b.accountCell.sendKeys(dataF.BalanceData.account); 
        //await b.initialDebitCell.sendKeys(''); //should NOT insert any data
        await b.initialCreditCell.sendKeys(dataF.BalanceData.credit); 

        var fileToUpload = 'xlsx-data/balanta_analitica_12.2016.xlsx';
        var absolutePath = path.resolve(__dirname, fileToUpload);
            
        console.log(absolutePath);
        await b.uploadData.sendKeys(absolutePath);
        await b.processBtn.click();
        await b.toastId.isPresent(); //error message is present
        element // display title of error message
            .all(by.id('toast-container'))
            .get(0)
            .all(by.className('toast-title'))
            .getText().then(function(text){
                console.log(text);
            });

        element  //display body of error message
            .all(by.id('toast-container'))
            .get(0)
            .all(by.className('toast-message'))
            .getText().then(function(text){
                console.log(text);
            });    
    });
    
    it('should insert a wrong column-E- in the "Initial Credit Cell" field and throw an error message', async()=>{
        //test demonstrates that you can upload a wrong column, but the process will display a success message 
        browser.navigate().refresh();

        let xlsx = require('xlsx'); //import the elsx file and store it

        let wb = new Workbook();
            
        wb.xlsx.readFile('C:\\Users\\Leni\\Desktop\\Elenis\\xlsx-data\\balanta_analitica_12.2016.xlsx').then(function(){
            let wksheet: Worksheet = wb.getWorksheet('Balance_Sum_X'); 
            //expect(wb.getWorksheet('Balance_Sum_X' ).getRow(1).getCell(5)).toString();
            console.log(wb.getWorksheet('Balance_Sum_X').getRow(1).getCell(5).value); //read title of the wrong uploaded column  
            expect(wb.getWorksheet('Balance_Sum_X').getRow(1).getCell(5).value).toMatch('InitAnC'); 
        });    

        await balanceSheet.startDate.sendKeys(dataF.BalanceData.data);
        await balanceSheet.startDate.sendKeys(Key.NUMPAD1, Key.NUMPAD2, Key.ARROW_RIGHT, Key.NUMPAD2, Key.NUMPAD0, Key.NUMPAD1, Key.NUMPAD6);
        await b.accountCell.sendKeys(dataF.BalanceData.account); 
        await b.initialDebitCell.sendKeys(dataF.BalanceData.debit); 
        await b.initialCreditCell.sendKeys(dataF.BalanceData.wrongcolumn); //wrong column uploaded

        var fileToUpload = 'xlsx-data/balanta_analitica_12.2016.xlsx';
        var absolutePath = path.resolve(__dirname, fileToUpload);
            
        console.log(absolutePath);
        await b.uploadData.sendKeys(absolutePath);
    
        await b.processBtn.click();
        await b.toastId.isPresent().then(function(){ //success message is present
            element // display title of confirmation message
            .all(by.id('toast-container'))
            .get(0)
            .all(by.className('toast-title'))
            .getText().then(function(text){
                console.log(text);
                expect(b.toastTitle.getText()).toMatch('Ledger Upload');
            });

        element  //display body of confirmation message
            .all(by.id('toast-container'))
            .get(0)
            .all(by.className('toast-message'))
            .getText().then(function(text){
                console.log(text);
                browser.navigate().refresh();
            });    
       });
    });

    it('should not insert any data, but clicking on the "proceseaza" button', async()=>{
        //browser.navigate().refresh();
        await b.uploadData.click();
        await b.upBalanceSheet.click();
        await b.processBtn.click();
        await b.toastId.isPresent().then(function(){ //success message is present
            element // display title of confirmation message
            .all(by.id('toast-container'))
            .get(0)
            .all(by.className('toast-title'))
            .getText().then(function(text){
                console.log(text);
            });

            element  //display body of confirmation message
            .all(by.id('toast-container'))
            .get(0)
            .all(by.className('toast-message'))
            .getText().then(function(text){
                console.log(text);
            });    
        });
    });
});
=======
import { Workbook, Worksheet, Row, Cell } from "exceljs";
import path from "path";
import { browser, by, element, Key, protractor } from "protractor";
import {DataBalanceSheet} from '../../pageObjects/b-PO';
import * as dataF from '../../elements/financialData.json';


let b = new Data();


describe('should test the "Introducere date" section with all its functionalities', function(){
    browser.get('http......');    

    it('should read the title of section, "Introducere Date"', async()=>{
        await expect(b.uploadData.getText()).toMatch('Introducere Date');
    });

    it('should perform click ction on "Data Balanta Contabila" field', async()=>{
        await b.uploadData.click();
        expect(b.upBalanceSheet.isPresent()); 
        await b.upBalanceSheet.getText().then(function(text){
            console.log(text);
        });
        await b.upBalanceSheet.click();
        await expect(b.upBalanceSheet.isDisplayed()).toBe(true);
        await expect(b.upBalanceSheet.getText()).toMatch('Incarca Balanta Contabila');
    });

    it('test the import of data without uploading the xlxs BalanceSheet file', async()=>{
        await b.startDate.clear();
        await b.startDate.sendKeys(dataF.BalanceData.data);
        await b.startDate.sendKeys(Key.NUMPAD1, Key.NUMPAD2, Key.ARROW_RIGHT, Key.NUMPAD2, Key.NUMPAD0, Key.NUMPAD1, Key.NUMPAD6);
        await b.accountCell.sendKeys(dataF.BalanceData.account);
        await b.initialDebitCell.sendKeys(dataF.BalanceData.debit);
        await b.initialCreditCell.sendKeys(dataF.BalanceData.credit);

        var fileToUpload = 'xlsx-data/balanta_analitica_12.2016.xlsx';
        var absolutePath = path.resolve(__dirname, fileToUpload);
            
        console.log(absolutePath);
        //await b.fileUpload.sendKeys(absolutePath);  don't upload the file 

        await b.processBtn.click();
                
        await b.toastId.isPresent(); //catch the error presence
        await b.toastId.getText().then(function(){ 
            b.toastTitle.getText().then(function(text){
                console.log(text);//catch the error message
                expect(b.toastTitle.getText()).toMatch('Ledger Upload');
            });
            b.toastMessage.getText().then(function(text){
                console.log(text);
                expect(b.toastMessage.getText()).toMatch('Please select at least one file.');
            });                        
        });
    });    

    it('test the import of data without specifying any date', async()=>{
        await b.startDate.clear();
        //await b.startDate.sendKeys(dataF.BalanceData.data);
        //await b.startDate.sendKeys(Key.NUMPAD2, Key.NUMPAD2, Key.ARROW_RIGHT, Key.NUMPAD1, Key.NUMPAD0, Key.NUMPAD1, Key.NUMPAD6);
        await b.accountCell.sendKeys(dataF.BalanceData.account);
        await b.initialDebitCell.sendKeys(dataF.BalanceData.debit);
        await b.initialCreditCell.sendKeys(dataF.BalanceData.credit);

        var fileToUpload = 'xlsx-data/balanta_analitica_12.2016.xlsx';
        var absolutePath = path.resolve(__dirname, fileToUpload);
            
        console.log(absolutePath);
        await b.fileUpload.sendKeys(absolutePath);  

        await b.processBtn.click();
                
        await b.toastId.isPresent(); //catch the error presence
        await b.toastId.getText().then(function(){ 
            b.toastTitle.getText().then(function(text){
                console.log(text);//catch the error message
                expect(b.toastTitle.getText()).toMatch('Valori introduse');
            });
            b.toastMessage.getText().then(function(text){
                console.log(text);
                expect(b.toastMessage.getText()).toMatch('Urmatoarele campuri sunt necesare:....');
            });                        
        });
    });   
    
    it('test the import of data by specifying a wrong date (YYYY=1016)', async()=>{
        await b.startDate.clear();
        await b.startDate.sendKeys(dataF.WrongBalanceData1.data1);
        await b.startDate.sendKeys(Key.NUMPAD1, Key.NUMPAD2, Key.ARROW_RIGHT, Key.NUMPAD1, Key.NUMPAD0, Key.NUMPAD1, Key.NUMPAD6);
        await b.accountCell.sendKeys(dataF.BalanceData.account);
        await b.initialDebitCell.sendKeys(dataF.BalanceData.debit);
        await b.initialCreditCell.sendKeys(dataF.BalanceData.credit);

        var fileToUpload = 'xlsx-data/balanta_analitica_12.2016.xlsx';
        var absolutePath = path.resolve(__dirname, fileToUpload);
            
        console.log(absolutePath);
        await b.fileUpload.sendKeys(absolutePath);  

        await b.processBtn.click();
                
        await b.toastId.isPresent(); //should catch the error presence
        await b.toastId.getText().then(function(){ 
            b.toastTitle.getText().then(function(text){
                console.log(text);//should catch the error message
                expect(b.toastTitle.getText()).toMatch('Valori introduse'); //it displays a success title message
            });
            b.toastMessage.getText().then(function(text){
                console.log(text);
                expect(balanceSheet.toastMessage.getText()).toMatch('Urmatoarele campuri sunt necesare:...'); //it displays a success body message
            });                        
        });
    });    

    it('test the import of data by specifying a wrong date (YYYY=3016)', async()=>{
        await b.startDate.clear();
        await b.startDate.sendKeys(dataF.WrongBalanceData2.data2);
        await b.startDate.sendKeys(Key.NUMPAD0, Key.NUMPAD1, Key.ARROW_RIGHT, Key.NUMPAD3, Key.NUMPAD0, Key.NUMPAD1, Key.NUMPAD6);
        await b.accountCell.sendKeys(dataF.BalanceData.account);
        await b.initialDebitCell.sendKeys(dataF.BalanceData.debit);
        await b.initialCreditCell.sendKeys(dataF.BalanceData.credit);

        var fileToUpload = 'xlsx-data/balanta_analitica_12.2016.xlsx';
        var absolutePath = path.resolve(__dirname, fileToUpload);
            
        console.log(absolutePath);
        await b.fileUpload.sendKeys(absolutePath);  

        await b.processBtn.click();
                
        await b.toastId.isPresent(); //should catch the error presence
        await b.toastId.getText().then(function(){ 
            b.toastTitle.getText().then(function(text){
                console.log(text);//should catch the error message
                expect(b.toastTitle.getText()).toMatch('Ledger Upload'); //it displays the title success message
            });
            b.toastMessage.getText().then(function(text){
                console.log(text);
                expect(b.toastMessage.getText()).toMatch('Please select at least one file.'); //it displays the body success message
            });                        
        });
    });    

    it('should NOT insert data in "AccountCell" field and throw an error message', async()=>{
        await b.startDate. clear();
        await b.accountCell .clear();
        await b.initialDebitCell.clear();
        await b.initialCreditCell.clear();

        await b.startDate.sendKeys(dataF.BalanceData.data);
        await b.startDate.sendKeys(Key.NUMPAD1, Key.NUMPAD2, Key.ARROW_RIGHT, Key.NUMPAD2, Key.NUMPAD0, Key.NUMPAD1, Key.NUMPAD6);
        //await b.accountCell.sendKeys('');
        await b.initialDebitCell.sendKeys(dataF.BalanceData.debit);
        await b.initialCreditCell.sendKeys(dataF.BalanceData.credit);

        var fileToUpload = 'xlsx-data/balanta_analitica_12.2016.xlsx';
        var absolutePath = path.resolve(__dirname, fileToUpload);
            
        console.log(absolutePath);
        await b.fileUpload.sendKeys(absolutePath);

        await b.processBtn.click();
        await b.toastId.isPresent();
        await b.toastId.getText().then(function(){
            element // display title of error message
            .all(by.id('toast-container'))
            .get(0)
            .all(by.className('toast-title'))
            .getText().then(function(text){
                console.log(text);
                expect(b.toastTitle.getText()).toMatch('Valori introduse');
            });

            element  //display body of confirmation message
            .all(by.id('toast-container'))
            .get(0)
            .all(by.className('toast-message'))
            .getText().then(function(text){
                console.log(text);
                expect(b.toastMessage.getText()).toMatch('Urmatoarele campuri sunt necesare:',
                                                                   'Account Column');
            });
        });    
    });  
    
    it('should NOT insert data in "Initial Credit Amount Cell" field and throw an error message', async()=>{
        browser.navigate().refresh();

        await b.startDate.sendKeys(dataF.BalanceData.data);
        await b.startDate.sendKeys(Key.NUMPAD1, Key.NUMPAD2, Key.ARROW_RIGHT, Key.NUMPAD2, Key.NUMPAD0, Key.NUMPAD1, Key.NUMPAD6);
        await b.accountCell.sendKeys(dataF.BalanceData.account); 
        await b.initialDebitCell.sendKeys(dataF.BalanceData.debit);
        //await b.initialCreditCell.sendKeys(''); //should NOT insert any data

        var fileToUpload = 'xlsx-data/balanta_analitica_12.2016.xlsx';
        var absolutePath = path.resolve(__dirname, fileToUpload);
            
        console.log(absolutePath);
        await b.uploadData.sendKeys(absolutePath);
        await b.processBtn.click();
        element // display title of error message
            .all(by.id('toast-container'))
            .get(0)
            .all(by.className('toast-title'))
            .getText().then(function(text){
                console.log(text);
            });

        element  //display body of error message
            .all(by.id('toast-container'))
            .get(0)
            .all(by.className('toast-message'))
            .getText().then(function(text){
                console.log(text);
            });   
    });
    
    it('should NOT insert data in "Initial Debit Amount Cell" field and throw an error message', async()=>{
        browser.navigate().refresh();

        await b.startDate.sendKeys(dataF.BalanceData.data);
        await b.startDate.sendKeys(Key.NUMPAD1, Key.NUMPAD2, Key.ARROW_RIGHT, Key.NUMPAD2, Key.NUMPAD0, Key.NUMPAD1, Key.NUMPAD6);
        await b.accountCell.sendKeys(dataF.BalanceData.account); 
        //await b.initialDebitCell.sendKeys(''); //should NOT insert any data
        await b.initialCreditCell.sendKeys(dataF.BalanceData.credit); 

        var fileToUpload = 'xlsx-data/balanta_analitica_12.2016.xlsx';
        var absolutePath = path.resolve(__dirname, fileToUpload);
            
        console.log(absolutePath);
        await b.uploadData.sendKeys(absolutePath);
        await b.processBtn.click();
        await b.toastId.isPresent(); //error message is present
        element // display title of error message
            .all(by.id('toast-container'))
            .get(0)
            .all(by.className('toast-title'))
            .getText().then(function(text){
                console.log(text);
            });

        element  //display body of error message
            .all(by.id('toast-container'))
            .get(0)
            .all(by.className('toast-message'))
            .getText().then(function(text){
                console.log(text);
            });    
    });
    
    it('should insert a wrong column-E- in the "Initial Credit Cell" field and throw an error message', async()=>{
        //test demonstrates that you can upload a wrong column, but the process will display a success message 
        browser.navigate().refresh();

        let xlsx = require('xlsx'); //import the elsx file and store it

        let wb = new Workbook();
            
        wb.xlsx.readFile('C:\\Users\\Leni\\Desktop\\Elenis\\xlsx-data\\balanta_analitica_12.2016.xlsx').then(function(){
            let wksheet: Worksheet = wb.getWorksheet('Balance_Sum_X'); 
            //expect(wb.getWorksheet('Balance_Sum_X' ).getRow(1).getCell(5)).toString();
            console.log(wb.getWorksheet('Balance_Sum_X').getRow(1).getCell(5).value); //read title of the wrong uploaded column  
            expect(wb.getWorksheet('Balance_Sum_X').getRow(1).getCell(5).value).toMatch('InitAnC'); 
        });    

        await balanceSheet.startDate.sendKeys(dataF.BalanceData.data);
        await balanceSheet.startDate.sendKeys(Key.NUMPAD1, Key.NUMPAD2, Key.ARROW_RIGHT, Key.NUMPAD2, Key.NUMPAD0, Key.NUMPAD1, Key.NUMPAD6);
        await b.accountCell.sendKeys(dataF.BalanceData.account); 
        await b.initialDebitCell.sendKeys(dataF.BalanceData.debit); 
        await b.initialCreditCell.sendKeys(dataF.BalanceData.wrongcolumn); //wrong column uploaded

        var fileToUpload = 'xlsx-data/balanta_analitica_12.2016.xlsx';
        var absolutePath = path.resolve(__dirname, fileToUpload);
            
        console.log(absolutePath);
        await b.uploadData.sendKeys(absolutePath);
    
        await b.processBtn.click();
        await b.toastId.isPresent().then(function(){ //success message is present
            element // display title of confirmation message
            .all(by.id('toast-container'))
            .get(0)
            .all(by.className('toast-title'))
            .getText().then(function(text){
                console.log(text);
                expect(b.toastTitle.getText()).toMatch('Ledger Upload');
            });

        element  //display body of confirmation message
            .all(by.id('toast-container'))
            .get(0)
            .all(by.className('toast-message'))
            .getText().then(function(text){
                console.log(text);
                browser.navigate().refresh();
            });    
       });
    });

    it('should not insert any data, but clicking on the "proceseaza" button', async()=>{
        //browser.navigate().refresh();
        await b.uploadData.click();
        await b.upBalanceSheet.click();
        await b.processBtn.click();
        await b.toastId.isPresent().then(function(){ //success message is present
            element // display title of confirmation message
            .all(by.id('toast-container'))
            .get(0)
            .all(by.className('toast-title'))
            .getText().then(function(text){
                console.log(text);
            });

            element  //display body of confirmation message
            .all(by.id('toast-container'))
            .get(0)
            .all(by.className('toast-message'))
            .getText().then(function(text){
                console.log(text);
            });    
        });
    });
});
>>>>>>> 40a7c51c3a02f0e334e8f8d614a241f90d63393a
