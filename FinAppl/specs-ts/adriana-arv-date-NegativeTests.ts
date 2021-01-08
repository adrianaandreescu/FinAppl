<<<<<<< HEAD
import { browser, by, element } from "protractor";
import { A } from '../../pageObjects/a-PO';
import { Workbook, Worksheet, Column } from 'exceljs';
import path from "path";



let arvidemo = new A();


describe('should read the title and click on "introducere date" field', function(){

    beforeAll(async()=>{
        await browser.get('http.......');

    });

    it('should read the title of "introducere date" field', async()=>{
        await arvidemo.dataE.getText();
        await expect(arvidemo.dataE.getText()).toMatch('Introducere Date');
        await arvidemo.dataE.getText().then(function(text){
            console.log(text);
            browser.sleep(3000);
        });
    });

    it('should click on "incarca balanta contabila" after reading the title', async()=>{
        await arvidemo.dataE.click();
        browser.manage().timeouts().implicitlyWait(10000);
        await expect(arvidemo.IncarcaBalanta.isDisplayed()).toBe(true);
        await expect(arvidemo.IncarcaBalanta.getText()).toMatch('Incarca Balanta Contabila');
        await arvidemo.IncarcaBalanta.getText().then(function(text){
            console.log(text);
        });

    });

    it('should upload the BalanceSheet data from columns B, N and O', async()=>{
        await arvidemo.IncarcaBalanta.click().then(function(){
            browser.manage().timeouts().implicitlyWait(10000);
        });

        let StartDate = element(by.css('input[type="month"]'));
        await StartDate.sendKeys('2016-12');
        
        await element(by.id('accountCell')).sendKeys('B');
        await element(by.id('initialDebitAmountCell')).sendKeys('N');
        await element(by.id('initialCreditAmountCell')).sendKeys('O');

        var fileToUpload = 'xlsx-data/balanta_analitica_12.2016.xlsx';
        //to validate that you upload the correct file
        var absolutePath = path.resolve(__dirname, fileToUpload);
        console.log(absolutePath);

        await element(by.id('file')).sendKeys(absolutePath).then(function(){
            browser.sleep(4000);
        });
        
        await element(by.id('upload')).click();         


        var wb = new Workbook();

        wb.xlsx.readFile('C:\\\\xlsx-data\\balanta_analitica_12.2016.xlsx').then(function(){
            let wksheet: Worksheet = wb.getWorksheet('Balance_Sum_X');

            let totalRowsIncludingEmptyRows: number = wksheet.rowCount;
            console.log('Total number of rows: '+totalRowsIncludingEmptyRows);
            //should fail: expect 243 to be 242
            expect(totalRowsIncludingEmptyRows).toBe('242');

            /*for(let i=1; i<= totalRowsIncludingEmptyRows; i++){
                let cellValue =wksheet.getRow(i).getCell(15).toString();
                console.log('Column O value from the row ' +i+ ': ' +cellValue);
            };*/

            


            //console.log(wb.getWorksheet('Balance_Sum_X').getRow(2).getCell(2).value);
            //console.log(wb.getWorksheet('Balance_Sum_X').getColumn(15).values);
            //console.log('--------- actualRowCount: ' +wksheet.actualRowCount);
            //console.log('--------- rowCount: ' +wksheet.rowCount);
            //console.log('--------- columnCount: ' +wksheet.columnCount);
            //wksheet.eachRow({includeEmpty: false}, function(row, rowNumber){
                //console.log('Row '+ rowNumber + '=' +row.values);
            //});        
        });
    });
=======
import { browser, by, element } from "protractor";
import { A } from '../../pageObjects/a-PO';
import { Workbook, Worksheet, Column } from 'exceljs';
import path from "path";



let arvidemo = new A();


describe('should read the title and click on "introducere date" field', function(){

    beforeAll(async()=>{
        await browser.get('http.......');

    });

    it('should read the title of "introducere date" field', async()=>{
        await arvidemo.dataE.getText();
        await expect(arvidemo.dataE.getText()).toMatch('Introducere Date');
        await arvidemo.dataE.getText().then(function(text){
            console.log(text);
            browser.sleep(3000);
        });
    });

    it('should click on "incarca balanta contabila" after reading the title', async()=>{
        await arvidemo.dataE.click();
        browser.manage().timeouts().implicitlyWait(10000);
        await expect(arvidemo.IncarcaBalanta.isDisplayed()).toBe(true);
        await expect(arvidemo.IncarcaBalanta.getText()).toMatch('Incarca Balanta Contabila');
        await arvidemo.IncarcaBalanta.getText().then(function(text){
            console.log(text);
        });

    });

    it('should upload the BalanceSheet data from columns B, N and O', async()=>{
        await arvidemo.IncarcaBalanta.click().then(function(){
            browser.manage().timeouts().implicitlyWait(10000);
        });

        let StartDate = element(by.css('input[type="month"]'));
        await StartDate.sendKeys('2016-12');
        
        await element(by.id('accountCell')).sendKeys('B');
        await element(by.id('initialDebitAmountCell')).sendKeys('N');
        await element(by.id('initialCreditAmountCell')).sendKeys('O');

        var fileToUpload = 'xlsx-data/balanta_analitica_12.2016.xlsx';
        //to validate that you upload the correct file
        var absolutePath = path.resolve(__dirname, fileToUpload);
        console.log(absolutePath);

        await element(by.id('file')).sendKeys(absolutePath).then(function(){
            browser.sleep(4000);
        });
        
        await element(by.id('upload')).click();         


        var wb = new Workbook();

        wb.xlsx.readFile('C:\\\\xlsx-data\\balanta_analitica_12.2016.xlsx').then(function(){
            let wksheet: Worksheet = wb.getWorksheet('Balance_Sum_X');

            let totalRowsIncludingEmptyRows: number = wksheet.rowCount;
            console.log('Total number of rows: '+totalRowsIncludingEmptyRows);
            //should fail: expect 243 to be 242
            expect(totalRowsIncludingEmptyRows).toBe('242');

            /*for(let i=1; i<= totalRowsIncludingEmptyRows; i++){
                let cellValue =wksheet.getRow(i).getCell(15).toString();
                console.log('Column O value from the row ' +i+ ': ' +cellValue);
            };*/

            


            //console.log(wb.getWorksheet('Balance_Sum_X').getRow(2).getCell(2).value);
            //console.log(wb.getWorksheet('Balance_Sum_X').getColumn(15).values);
            //console.log('--------- actualRowCount: ' +wksheet.actualRowCount);
            //console.log('--------- rowCount: ' +wksheet.rowCount);
            //console.log('--------- columnCount: ' +wksheet.columnCount);
            //wksheet.eachRow({includeEmpty: false}, function(row, rowNumber){
                //console.log('Row '+ rowNumber + '=' +row.values);
            //});        
        });
    });
>>>>>>> 40a7c51c3a02f0e334e8f8d614a241f90d63393a
});