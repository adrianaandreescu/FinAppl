<<<<<<< HEAD
import { Workbook, Worksheet, Row, Cell } from "exceljs";
import path from "path";
import { browser, by, element, Key } from "protractor"
import { DataBalanceSheet } from '../../pageObjects/balanta-contabila-PO';

let balanceSheet = new DataBalanceSheet();



describe('should test the "Introducere date" section with all its functionalities', function(){
    browser.get('http://finlight.ro:8762/index.html#!/available-data');      

    it('should read the title of section, "Introducere Date"', async()=>{
        await expect(balanceSheet.uploadData.getText()).toMatch('Introducere Date');
        await balanceSheet.uploadData.click();
        await expect(balanceSheet.upBalanceSheet.isDisplayed()).toBe(true);
        await balanceSheet.upBalanceSheet.getText().then(function(text){
            console.log(text);
        });
    });

    it('should perform action on "Data Balanta Contabila" field', async()=>{
        await balanceSheet.upBalanceSheet.click();
        await expect(balanceSheet.upBalanceSheet.isDisplayed()).toBe(true);
        await expect(balanceSheet.upBalanceSheet.getText()).toMatch('Incarca Balanta Contabila');
    });

    it('should upload BalanceSheet', async()=>{
        await balanceSheet.startDate.sendKeys(Key.NUMPAD1, Key.NUMPAD2, Key.ARROW_RIGHT, Key.NUMPAD2, Key.NUMPAD0, Key.NUMPAD1, Key.NUMPAD6);
        await balanceSheet.accountCell.sendKeys('b');
        await balanceSheet.initialDebitCell.sendKeys('n');
        await balanceSheet.initialCreditCell.sendKeys('o');

        var fileToUpload = 'xlsx-data/balanta_analitica_12.2016.xlsx';
        var absolutePath = path.resolve(__dirname, fileToUpload);
            
        console.log(absolutePath);
        //await element(by.id('file')).sendKeys(absolutePath);
        await balanceSheet.fileUpload.sendKeys(absolutePath);

        //await element(by.id('process-button')).click();
        await balanceSheet.processBtn.click();
        browser.manage().timeouts().implicitlyWait(6000);
        await balanceSheet.toastId.isPresent().then(function(){
             expect(balanceSheet.toastTitle.getText()).toMatch('Process complet'); 
            expect(balanceSheet.toastMessage.getText()).toMatch('S-a pornit un process de import. Verificati statusul in zona de notificari');
        });
    });    
       
    it('should operate data with the xlsx file', async()=>{
        let xlsx = require('xlsx'); //import the exls file and store it

        let wb = new Workbook();
    
        wb.xlsx.readFile('C:\\Users\\Leni\\Desktop\\Elenis\\xlsx-data\\balanta_analitica_12.2016.xlsx').then(function(){
            let wksheet: Worksheet = wb.getWorksheet('Balance_Sum_X');   

            let totalRowsIncludingEmptyRows: number = wksheet.rowCount;
            console.log('Total number of rows: '+totalRowsIncludingEmptyRows);  //count all the rows from the specified woorksheet
            expect(totalRowsIncludingEmptyRows).toBe(243);

            expect(wb.getWorksheet('Balance_Sum_X' ).getRow(1).getCell(15)).toString();
            console.log(wb.getWorksheet('Balance_Sum_X').getRow(1).getCell(15).value); //read random cell value
            //console.log(wb.getWorksheet('Balance_Sum_X').getColumn(15).values); //display all the values of column 15
            
            //count and display number of rows with values
            console.log('actualRowCount: ' +wksheet.actualRowCount); //the rows with values only
            console.log('rowCount: ' +wksheet.rowCount); //the row with values+empty values
            console.log('columnCount: ' +wksheet.columnCount); //count

           

        }); 
    });


});
=======
import { Workbook, Worksheet, Row, Cell } from "exceljs";
import path from "path";
import { browser, by, element, Key } from "protractor"
import { DataBalanceSheet } from '../../pageObjects/balanta-contabila-PO';

let balanceSheet = new DataBalanceSheet();



describe('should test the "Introducere date" section with all its functionalities', function(){
    browser.get('http://finlight.ro:8762/index.html#!/available-data');      

    it('should read the title of section, "Introducere Date"', async()=>{
        await expect(balanceSheet.uploadData.getText()).toMatch('Introducere Date');
        await balanceSheet.uploadData.click();
        await expect(balanceSheet.upBalanceSheet.isDisplayed()).toBe(true);
        await balanceSheet.upBalanceSheet.getText().then(function(text){
            console.log(text);
        });
    });

    it('should perform action on "Data Balanta Contabila" field', async()=>{
        await balanceSheet.upBalanceSheet.click();
        await expect(balanceSheet.upBalanceSheet.isDisplayed()).toBe(true);
        await expect(balanceSheet.upBalanceSheet.getText()).toMatch('Incarca Balanta Contabila');
    });

    it('should upload BalanceSheet', async()=>{
        await balanceSheet.startDate.sendKeys(Key.NUMPAD1, Key.NUMPAD2, Key.ARROW_RIGHT, Key.NUMPAD2, Key.NUMPAD0, Key.NUMPAD1, Key.NUMPAD6);
        await balanceSheet.accountCell.sendKeys('b');
        await balanceSheet.initialDebitCell.sendKeys('n');
        await balanceSheet.initialCreditCell.sendKeys('o');

        var fileToUpload = 'xlsx-data/balanta_analitica_12.2016.xlsx';
        var absolutePath = path.resolve(__dirname, fileToUpload);
            
        console.log(absolutePath);
        //await element(by.id('file')).sendKeys(absolutePath);
        await balanceSheet.fileUpload.sendKeys(absolutePath);

        //await element(by.id('process-button')).click();
        await balanceSheet.processBtn.click();
        browser.manage().timeouts().implicitlyWait(6000);
        await balanceSheet.toastId.isPresent().then(function(){
             expect(balanceSheet.toastTitle.getText()).toMatch('Process complet'); 
            expect(balanceSheet.toastMessage.getText()).toMatch('S-a pornit un process de import. Verificati statusul in zona de notificari');
        });
    });    
       
    it('should operate data with the xlsx file', async()=>{
        let xlsx = require('xlsx'); //import the exls file and store it

        let wb = new Workbook();
    
        wb.xlsx.readFile('C:\\Users\\Leni\\Desktop\\Elenis\\xlsx-data\\balanta_analitica_12.2016.xlsx').then(function(){
            let wksheet: Worksheet = wb.getWorksheet('Balance_Sum_X');   

            let totalRowsIncludingEmptyRows: number = wksheet.rowCount;
            console.log('Total number of rows: '+totalRowsIncludingEmptyRows);  //count all the rows from the specified woorksheet
            expect(totalRowsIncludingEmptyRows).toBe(243);

            expect(wb.getWorksheet('Balance_Sum_X' ).getRow(1).getCell(15)).toString();
            console.log(wb.getWorksheet('Balance_Sum_X').getRow(1).getCell(15).value); //read random cell value
            //console.log(wb.getWorksheet('Balance_Sum_X').getColumn(15).values); //display all the values of column 15
            
            //count and display number of rows with values
            console.log('actualRowCount: ' +wksheet.actualRowCount); //the rows with values only
            console.log('rowCount: ' +wksheet.rowCount); //the row with values+empty values
            console.log('columnCount: ' +wksheet.columnCount); //count

           

        }); 
    });


});
>>>>>>> 40a7c51c3a02f0e334e8f8d614a241f90d63393a
