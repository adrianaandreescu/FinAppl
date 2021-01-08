<<<<<<< HEAD
import { browser, by, element } from "protractor";
import { Arvidemo } from '../../pageObjects/arvidemo-PO';
import { Workbook, Row, Worksheet, Cell } from 'exceljs';
import { IBC } from '../../pageObjects/IBC';
import path from "path";



let arvidemo = new Arvidemo();


describe('should read the title and click on "introducere date" field', function(){

    beforeAll(async()=>{
        await browser.get('http......');

    });

    it('should click on "IBC" after reading the title', async()=>{
        await arvidemo.dataE.click();
        browser.manage().timeouts().implicitlyWait(10000);
        await expect(arv.IBC.isDisplayed()).toBe(true);
        await expect(arv.IBC.getText()).toMatch('Incarca Balanta Contabila');
        await arv.IBC.getText().then(function(text){
            console.log(text);
        });
    });

       it('should upload B file', async()=>{
            let StartDate = element(by.css('input[type="month"]'));
            await StartDate.sendKeys('2016-12');
            
            await element(by.id('accountCell')).sendKeys('B');
            await element(by.id('initialDebitAmountCell')).sendKeys('N');
            await element(by.id('initialCreditAmountCell')).sendKeys('O');
    
            var fileToUpload = 'xlsx-data/balanta_analitica_12.2016.xlsx';
            var absolutePath = path.resolve(__dirname, fileToUpload);
            
            console.log(absolutePath);
            await element(by.id('file')).sendKeys(absolutePath).then(function(){
                browser.sleep(4000);
            });
            //browser.manage().timeouts().implicitlyWait(10000);
            await element(by.id('upload')).click().then(function(){
                browser.sleep(4000);
            });         
        //});

        let XLSX = require('xlsx');

        var wb = new Workbook();

        wb.xlsx.readFile('C:\\balanta_analitica_12.2016.xlsx').then(function(){
            let wksheet: Worksheet = wb.getWorksheet('Balance_Sum_X');            

            let totalRowsIncludingEmptyRows: number = wksheet.rowCount;
            console.log('Total number of rows: '+totalRowsIncludingEmptyRows);
            //should fail: expect 243 to be 243
            expect(totalRowsIncludingEmptyRows).toBe('243');

            for(let i=1; i<= totalRowsIncludingEmptyRows; i++){
                let cellValue =wksheet.getRow(i).getCell(15).toString();
                console.log('Column O value from the row ' +i+ ': ' +cellValue);
            }; 

            console.log(wb.getWorksheet('Balance_Sum_X').getRow(2).getCell(2).value);
            console.log(wb.getWorksheet('Balance_Sum_X').getColumn(15).values);
            
            //number of rows with values
            console.log('--------- actualRowCount: ' +wksheet.actualRowCount);
            console.log('--------- rowCount: ' +wksheet.rowCount);
            console.log('--------- columnCount: ' +wksheet.columnCount);
            wksheet.eachRow({includeEmpty: false}, function(row, rowNumber){
                console.log('Row '+ rowNumber + '=' +row.values);
            });
        });
    });
=======
import { browser, by, element } from "protractor";
import { Arvidemo } from '../../pageObjects/arvidemo-PO';
import { Workbook, Row, Worksheet, Cell } from 'exceljs';
import { IBC } from '../../pageObjects/IBC';
import path from "path";



let arvidemo = new Arvidemo();


describe('should read the title and click on "introducere date" field', function(){

    beforeAll(async()=>{
        await browser.get('http......');

    });

    it('should click on "IBC" after reading the title', async()=>{
        await arvidemo.dataE.click();
        browser.manage().timeouts().implicitlyWait(10000);
        await expect(arv.IBC.isDisplayed()).toBe(true);
        await expect(arv.IBC.getText()).toMatch('Incarca Balanta Contabila');
        await arv.IBC.getText().then(function(text){
            console.log(text);
        });
    });

       it('should upload B file', async()=>{
            let StartDate = element(by.css('input[type="month"]'));
            await StartDate.sendKeys('2016-12');
            
            await element(by.id('accountCell')).sendKeys('B');
            await element(by.id('initialDebitAmountCell')).sendKeys('N');
            await element(by.id('initialCreditAmountCell')).sendKeys('O');
    
            var fileToUpload = 'xlsx-data/balanta_analitica_12.2016.xlsx';
            var absolutePath = path.resolve(__dirname, fileToUpload);
            
            console.log(absolutePath);
            await element(by.id('file')).sendKeys(absolutePath).then(function(){
                browser.sleep(4000);
            });
            //browser.manage().timeouts().implicitlyWait(10000);
            await element(by.id('upload')).click().then(function(){
                browser.sleep(4000);
            });         
        //});

        let XLSX = require('xlsx');

        var wb = new Workbook();

        wb.xlsx.readFile('C:\\balanta_analitica_12.2016.xlsx').then(function(){
            let wksheet: Worksheet = wb.getWorksheet('Balance_Sum_X');            

            let totalRowsIncludingEmptyRows: number = wksheet.rowCount;
            console.log('Total number of rows: '+totalRowsIncludingEmptyRows);
            //should fail: expect 243 to be 243
            expect(totalRowsIncludingEmptyRows).toBe('243');

            for(let i=1; i<= totalRowsIncludingEmptyRows; i++){
                let cellValue =wksheet.getRow(i).getCell(15).toString();
                console.log('Column O value from the row ' +i+ ': ' +cellValue);
            }; 

            console.log(wb.getWorksheet('Balance_Sum_X').getRow(2).getCell(2).value);
            console.log(wb.getWorksheet('Balance_Sum_X').getColumn(15).values);
            
            //number of rows with values
            console.log('--------- actualRowCount: ' +wksheet.actualRowCount);
            console.log('--------- rowCount: ' +wksheet.rowCount);
            console.log('--------- columnCount: ' +wksheet.columnCount);
            wksheet.eachRow({includeEmpty: false}, function(row, rowNumber){
                console.log('Row '+ rowNumber + '=' +row.values);
            });
        });
    });
>>>>>>> 40a7c51c3a02f0e334e8f8d614a241f90d63393a
});