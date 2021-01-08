<<<<<<< HEAD
import { browser, by, element } from "protractor";
import { protractor } from "protractor/built/ptor";
import { Arvidemo } from '../../pageObjects/arvidemo-PO';


describe('should test arvidemo dashboard', async function(){
    browser.get('http.....'); 

    let arv = new Arvidemo();
    
    it('select "panou control" section', async () => {
        //let pan = element(by.css('a[href="#!/dashboard"]')); not using POM concepts
        await arv.dashboardName.getText().then(function (text) {
            console.log(text);
        });
        await expect(arv.dashboardName.getText()).toEqual('Panou control');
    });
   
    describe('test "ID" field with all its sections', function(){
        it('select "ID', async () => {
            //let intr = element(by.css('a[href="#data-entry"]'));
            await arv.dataE.getText().then(function (text) {
                console.log(text);
            });
            await expect(arv.dataE.getText()).toEqual('Introducere Date');
        });
        
        it('should click on "IB" field', async () => {
            await arv.dataE.click();
            browser.manage().timeouts().implicitlyWait(10000);
            let IncarcaBalanta = element(by.xpath('//*[@id="main-menu"]/li[3]/ul/li[1]/a'));
            await expect(IncarcaBalanta.isDisplayed()).toBe(true);
            await expect(IncarcaBalanta.getText()).toBe('Incarca Balanta Contabila');
            await IncarcaBalanta.getText().then(function (text) {
                console.log(text);
            });
        });


        it('should click on "Informatii disponibile" field', async () => {
            await arv.dataE.click();
            browser.manage().timeouts().implicitlyWait(10000);
            let InfoDisponibile = element(by.xpath('//*[@id="main-menu"]/li[3]/ul/li[3]/a'));
            await expect(InfoDisponibile.isDisplayed()).toBe(true);
            await expect(InfoDisponibile.getText()).toBe('Informatii Disponibile');
            await InfoDisponibile.getText().then(function (text) {
                console.log(text);
            });  
        }); 

        it('should click on "Ajustari" field', async () => {
            await arv.dataE.click();
            browser.manage().timeouts().implicitlyWait(10000);
            let Ajustari = element(by.xpath('//*[@id="main-menu"]/li[3]/ul/li[4]/a'));
            await expect(Ajustari.isDisplayed()).toBe(true);
            await expect(Ajustari.getText()).toBe('Ajustari');
            await Ajustari.getText().then(function (text) {
                console.log(text);
            });
        });
    });

    describe('should test "Reporting" functionalities', function() {
    
       it('should click on "Balance sheet" field', async () => {
            await arv.rpt.click();
            browser.manage().timeouts().implicitlyWait(10000);
            let BS = element(by.xpath('//*[@id="main-menu"]/li[4]/ul/li[1]/a'));
            await expect(BS.isDisplayed()).toBe(true);
            await expect(BS.getText()).toMatch('Bilant');
            await BS.getText().then(function (text) {
                console.log(text);
            });
        });

        it('should click on "Cash-flow" field', async () => {
            await arv.rpt.click();
            browser.manage().timeouts().implicitlyWait(10000);
            let CF = element(by.xpath('//*[@id="main-menu"]/li[4]/ul/li[3]/a'));
            await expect(CF.isDisplayed()).toBe(true);
            await expect(CF.getText()).toMatch('Flux numerar');
            await CF.getText().then(function (text) {
                console.log(text);
            });
        });
    });

    describe('should test the "Cmp" functionalities', function () {
        it('select "Cmp" section', async () => {
            //let intr = element(by.css('a[href="#data-entry"]'));
            await arv.cmp.getText().then(function (text) {
                console.log(text);
            });
            await expect(arv.cmp.getText()).toEqual('Compute');
        });

       it('should click on "Manual cmp" field', async () => {
            await arv.compute.click();
            browser.manage().timeouts().implicitlyWait(10000);
            let ManualCmp = element(by.xpath('//*[@id="main-menu"]/li[5]/ul/li[1]/a'));
            await expect(ManualCmp.isDisplayed()).toBe(true);
            await expect(ManualCmp.getText()).toMatch('Compute Manual')
            await ManualCmp.getText().then(function (text) {
                console.log(text);
            });
        });
    });

    describe('should test "Editing" functionalities', function(){
        it('select "Editing" section', async () => {
            //let intr = element(by.css('a[href="#data-entry"]'));
            await arv.editing.getText().then(function (text) {
                console.log(text);
            });
            await expect(arv.editing.getText()).toEqual('Editoare');
        });

        it('should click on "indicators" field', async()=>{
            await arv.editing.click();
            browser.manage().timeouts().implicitlyWait(10000);
            let Indicators = element(by.xpath('//*[@id="main-menu"]/li[6]/ul/li[1]/a'));
            await expect(Indicators.isDisplayed()).toBe(true);
            await expect(Indicators.getText()).toMatch('Indicatori');
            await Indicators.getText().then(function(text){
                console.log(text);
            });
        });

        it('should click on "Data view editor" field', async()=>{
            await arv.editing.click();
            browser.manage().timeouts().implicitlyWait(10000);
            let DataViewEditor = element(by.xpath('//*[@id="main-menu"]/li[6]/ul/li[2]/a'));
            await expect(DataViewEditor.isDisplayed()).toBe(true);
            await expect(DataViewEditor.getText()).toMatch('Data View');
            await DataViewEditor.getText().then(function(text){
                console.log(text);
            });
        });

        it('should click on "Alert templates" field', async()=>{
            await arv.editing.click();
            browser.manage().timeouts().implicitlyWait(10000);
            let AlertTemplates = element(by.xpath('//*[@id="main-menu"]/li[6]/ul/li[3]/a'));
            await expect(AlertTemplates.isDisplayed()).toBe(true);
            await expect(AlertTemplates.getText()).toMatch('Mesaje de alerta');
            await AlertTemplates.getText().then(function(text){
                console.log(text);
            });
        });

        it('should click on "Score" field', async()=>{
            await arv.editing.click();
            browser.manage().timeouts().implicitlyWait(10000);
            let Score = element(by.xpath('//*[@id="main-menu"]/li[6]/ul/li[4]/a'));
            await expect(Score.isDisplayed()).toBe(true);
            await expect(Score.getText()).toMatch('Index');
            await Score.getText().then(function(text){
                console.log(text);
            });
        });

        it('should click on "Index view editor" field', async()=>{
            await arv.editing.click();
            browser.manage().timeouts().implicitlyWait(10000);
            let IndexViewEditor = element(by.xpath('//*[@id="main-menu"]/li[6]/ul/li[5]/a'));
            await expect(IndexViewEditor.isDisplayed()).toBe(true);
            await expect(IndexViewEditor.getText()).toMatch('Index View');
            await IndexViewEditor.getText().then(function(text){
                console.log(text);
            });
        });

        it('should click on "Raport view editor" field', async()=>{
            await arv.editing.click();
            browser.manage().timeouts().implicitlyWait(10000);
            let RaportViewEditor = element(by.xpath('//*[@id="main-menu"]/li[6]/ul/li[6]/a'));
            await expect(RaportViewEditor.isDisplayed()).toBe(true);
            await expect(RaportViewEditor.getText()).toMatch('Rapoarte');
            await RaportViewEditor.getText().then(function(text){
                console.log(text);
            });
        }); 
        

        it('should click on "Dashboard editor" field', async()=>{
            await arv.editing.click();
            browser.manage().timeouts().implicitlyWait(10000);
            let DashboardEditor = element(by.xpath('//*[@id="main-menu"]/li[6]/ul/li[7]/a'));
            await expect(DashboardEditor.isDisplayed()).toBe(true);
            await expect(DashboardEditor.getText()).toMatch('Panouri Control');
            await DashboardEditor.getText().then(function(text){
                console.log(text);
            });
        });
    });

    describe('should test "OM" field with its functionalities', function(){
        it('select "OM" section', async () => {
            //let or = element(by.css('a[href="#org-management"]'));
            await arv.myOr.getText().then(function (text) {
                console.log(text);
            });
            await expect(arv.myOr.getText()).toEqual('Organizatia mea');
        });

        it('click on "UL" field', async()=> {
            await arv.myOr.click();
            browser.manage().timeouts().implicitlyWait(10000);
            let UL = element(by.xpath('//*[@id="main-menu"]/li[7]/ul/li[1]/a'));
            //await UL.getText();
            await expect(UL.getText()).toMatch('Utilizatori');
            await UL.getText().then(function(text){
                console.log(text);
            });
        });

        
        it('click on "OM" field', async()=> {
            await arv.myOr.click();
            browser.manage().timeouts().implicitlyWait(10000);
            //let OM = element(by.xpath('//*[@id="main-menu"]/li[7]/ul/li[4]/a'));
            let OM = element(by.css('a[href="#!/organization-management"]'));
            //await OM.getText();
            await expect(OM.getText()).toMatch('Organizatii');
            await OM.getText().then(function(text){
                console.log(text);
            });
        });

    }); 

    describe('should perform actions on user name field', function(){
        it('select name of user', async()=> {
            await arv.uName.click();
            await expect(arv.uName.getText()).toMatch('....');
            await arv.uName.getText().then(function(text){
                console.log(text);
            });
        });
        
        it('should count all the companies', async()=>{
            let SelecteazaCompania = element(by.id('companyCui'));
            await SelecteazaCompania.click();
            browser.manage().timeouts().implicitlyWait(10000);
            await element.all(by.repeater('rows in row')).count().then(function(count){
                console.log(count);
            });
        });

        it('should display each company name', async()=>{
            let elm = element.all(by.repeater('rows in row'));
            await elm.each(function (company, index) {
                company.getText().then(function (text) {
                    console.log(index, text);
                });
            });
        });

        it('selectez o companie anume', async()=> {
            await element(by.model('formData.companyCui')).element(by.css('option[value="string:0000000"]')).click();
            //browser.findElement(by.cssContainingText('option', 'string:0000000')).click();
            await element(by.css('[type="submit"]')).click().then(function () {       
            });

            let randomC = element(by.xpath('//*[@id="left-sidebar"]/div/div[2]/ul/li[2]/a')).click();
            browser.manage().timeouts().implicitlyWait(10000);
            let ChangeCmp = element(by.xpath('//*[@id="left-sidebar"]/div/div[2]/ul/li[2]/div/a'));
            await ChangeCmp.click().then(function(){
            });
        }); 

        it('should logout', async()=>{
            await arv.uName.click();
            browser.manage().timeouts().implicitlyWait(10000);
            let logOut = element(by.xpath('//*[@id="left-sidebar"]/div/div[2]/ul/li[5]/div/ul/li[4]/a'));
            await expect(logOut.isDisplayed()).toBe(true);
            await expect(logOut.getText()).toMatch('Logout');
            await logOut.click();
        });
    });       
=======
import { browser, by, element } from "protractor";
import { protractor } from "protractor/built/ptor";
import { Arvidemo } from '../../pageObjects/arvidemo-PO';


describe('should test arvidemo dashboard', async function(){
    browser.get('http.....'); 

    let arv = new Arvidemo();
    
    it('select "panou control" section', async () => {
        //let pan = element(by.css('a[href="#!/dashboard"]')); not using POM concepts
        await arv.dashboardName.getText().then(function (text) {
            console.log(text);
        });
        await expect(arv.dashboardName.getText()).toEqual('Panou control');
    });
   
    describe('test "ID" field with all its sections', function(){
        it('select "ID', async () => {
            //let intr = element(by.css('a[href="#data-entry"]'));
            await arv.dataE.getText().then(function (text) {
                console.log(text);
            });
            await expect(arv.dataE.getText()).toEqual('Introducere Date');
        });
        
        it('should click on "IB" field', async () => {
            await arv.dataE.click();
            browser.manage().timeouts().implicitlyWait(10000);
            let IncarcaBalanta = element(by.xpath('//*[@id="main-menu"]/li[3]/ul/li[1]/a'));
            await expect(IncarcaBalanta.isDisplayed()).toBe(true);
            await expect(IncarcaBalanta.getText()).toBe('Incarca Balanta Contabila');
            await IncarcaBalanta.getText().then(function (text) {
                console.log(text);
            });
        });


        it('should click on "Informatii disponibile" field', async () => {
            await arv.dataE.click();
            browser.manage().timeouts().implicitlyWait(10000);
            let InfoDisponibile = element(by.xpath('//*[@id="main-menu"]/li[3]/ul/li[3]/a'));
            await expect(InfoDisponibile.isDisplayed()).toBe(true);
            await expect(InfoDisponibile.getText()).toBe('Informatii Disponibile');
            await InfoDisponibile.getText().then(function (text) {
                console.log(text);
            });  
        }); 

        it('should click on "Ajustari" field', async () => {
            await arv.dataE.click();
            browser.manage().timeouts().implicitlyWait(10000);
            let Ajustari = element(by.xpath('//*[@id="main-menu"]/li[3]/ul/li[4]/a'));
            await expect(Ajustari.isDisplayed()).toBe(true);
            await expect(Ajustari.getText()).toBe('Ajustari');
            await Ajustari.getText().then(function (text) {
                console.log(text);
            });
        });
    });

    describe('should test "Reporting" functionalities', function() {
    
       it('should click on "Balance sheet" field', async () => {
            await arv.rpt.click();
            browser.manage().timeouts().implicitlyWait(10000);
            let BS = element(by.xpath('//*[@id="main-menu"]/li[4]/ul/li[1]/a'));
            await expect(BS.isDisplayed()).toBe(true);
            await expect(BS.getText()).toMatch('Bilant');
            await BS.getText().then(function (text) {
                console.log(text);
            });
        });

        it('should click on "Cash-flow" field', async () => {
            await arv.rpt.click();
            browser.manage().timeouts().implicitlyWait(10000);
            let CF = element(by.xpath('//*[@id="main-menu"]/li[4]/ul/li[3]/a'));
            await expect(CF.isDisplayed()).toBe(true);
            await expect(CF.getText()).toMatch('Flux numerar');
            await CF.getText().then(function (text) {
                console.log(text);
            });
        });
    });

    describe('should test the "Cmp" functionalities', function () {
        it('select "Cmp" section', async () => {
            //let intr = element(by.css('a[href="#data-entry"]'));
            await arv.cmp.getText().then(function (text) {
                console.log(text);
            });
            await expect(arv.cmp.getText()).toEqual('Compute');
        });

       it('should click on "Manual cmp" field', async () => {
            await arv.compute.click();
            browser.manage().timeouts().implicitlyWait(10000);
            let ManualCmp = element(by.xpath('//*[@id="main-menu"]/li[5]/ul/li[1]/a'));
            await expect(ManualCmp.isDisplayed()).toBe(true);
            await expect(ManualCmp.getText()).toMatch('Compute Manual')
            await ManualCmp.getText().then(function (text) {
                console.log(text);
            });
        });
    });

    describe('should test "Editing" functionalities', function(){
        it('select "Editing" section', async () => {
            //let intr = element(by.css('a[href="#data-entry"]'));
            await arv.editing.getText().then(function (text) {
                console.log(text);
            });
            await expect(arv.editing.getText()).toEqual('Editoare');
        });

        it('should click on "indicators" field', async()=>{
            await arv.editing.click();
            browser.manage().timeouts().implicitlyWait(10000);
            let Indicators = element(by.xpath('//*[@id="main-menu"]/li[6]/ul/li[1]/a'));
            await expect(Indicators.isDisplayed()).toBe(true);
            await expect(Indicators.getText()).toMatch('Indicatori');
            await Indicators.getText().then(function(text){
                console.log(text);
            });
        });

        it('should click on "Data view editor" field', async()=>{
            await arv.editing.click();
            browser.manage().timeouts().implicitlyWait(10000);
            let DataViewEditor = element(by.xpath('//*[@id="main-menu"]/li[6]/ul/li[2]/a'));
            await expect(DataViewEditor.isDisplayed()).toBe(true);
            await expect(DataViewEditor.getText()).toMatch('Data View');
            await DataViewEditor.getText().then(function(text){
                console.log(text);
            });
        });

        it('should click on "Alert templates" field', async()=>{
            await arv.editing.click();
            browser.manage().timeouts().implicitlyWait(10000);
            let AlertTemplates = element(by.xpath('//*[@id="main-menu"]/li[6]/ul/li[3]/a'));
            await expect(AlertTemplates.isDisplayed()).toBe(true);
            await expect(AlertTemplates.getText()).toMatch('Mesaje de alerta');
            await AlertTemplates.getText().then(function(text){
                console.log(text);
            });
        });

        it('should click on "Score" field', async()=>{
            await arv.editing.click();
            browser.manage().timeouts().implicitlyWait(10000);
            let Score = element(by.xpath('//*[@id="main-menu"]/li[6]/ul/li[4]/a'));
            await expect(Score.isDisplayed()).toBe(true);
            await expect(Score.getText()).toMatch('Index');
            await Score.getText().then(function(text){
                console.log(text);
            });
        });

        it('should click on "Index view editor" field', async()=>{
            await arv.editing.click();
            browser.manage().timeouts().implicitlyWait(10000);
            let IndexViewEditor = element(by.xpath('//*[@id="main-menu"]/li[6]/ul/li[5]/a'));
            await expect(IndexViewEditor.isDisplayed()).toBe(true);
            await expect(IndexViewEditor.getText()).toMatch('Index View');
            await IndexViewEditor.getText().then(function(text){
                console.log(text);
            });
        });

        it('should click on "Raport view editor" field', async()=>{
            await arv.editing.click();
            browser.manage().timeouts().implicitlyWait(10000);
            let RaportViewEditor = element(by.xpath('//*[@id="main-menu"]/li[6]/ul/li[6]/a'));
            await expect(RaportViewEditor.isDisplayed()).toBe(true);
            await expect(RaportViewEditor.getText()).toMatch('Rapoarte');
            await RaportViewEditor.getText().then(function(text){
                console.log(text);
            });
        }); 
        

        it('should click on "Dashboard editor" field', async()=>{
            await arv.editing.click();
            browser.manage().timeouts().implicitlyWait(10000);
            let DashboardEditor = element(by.xpath('//*[@id="main-menu"]/li[6]/ul/li[7]/a'));
            await expect(DashboardEditor.isDisplayed()).toBe(true);
            await expect(DashboardEditor.getText()).toMatch('Panouri Control');
            await DashboardEditor.getText().then(function(text){
                console.log(text);
            });
        });
    });

    describe('should test "OM" field with its functionalities', function(){
        it('select "OM" section', async () => {
            //let or = element(by.css('a[href="#org-management"]'));
            await arv.myOr.getText().then(function (text) {
                console.log(text);
            });
            await expect(arv.myOr.getText()).toEqual('Organizatia mea');
        });

        it('click on "UL" field', async()=> {
            await arv.myOr.click();
            browser.manage().timeouts().implicitlyWait(10000);
            let UL = element(by.xpath('//*[@id="main-menu"]/li[7]/ul/li[1]/a'));
            //await UL.getText();
            await expect(UL.getText()).toMatch('Utilizatori');
            await UL.getText().then(function(text){
                console.log(text);
            });
        });

        
        it('click on "OM" field', async()=> {
            await arv.myOr.click();
            browser.manage().timeouts().implicitlyWait(10000);
            //let OM = element(by.xpath('//*[@id="main-menu"]/li[7]/ul/li[4]/a'));
            let OM = element(by.css('a[href="#!/organization-management"]'));
            //await OM.getText();
            await expect(OM.getText()).toMatch('Organizatii');
            await OM.getText().then(function(text){
                console.log(text);
            });
        });

    }); 

    describe('should perform actions on user name field', function(){
        it('select name of user', async()=> {
            await arv.uName.click();
            await expect(arv.uName.getText()).toMatch('....');
            await arv.uName.getText().then(function(text){
                console.log(text);
            });
        });
        
        it('should count all the companies', async()=>{
            let SelecteazaCompania = element(by.id('companyCui'));
            await SelecteazaCompania.click();
            browser.manage().timeouts().implicitlyWait(10000);
            await element.all(by.repeater('rows in row')).count().then(function(count){
                console.log(count);
            });
        });

        it('should display each company name', async()=>{
            let elm = element.all(by.repeater('rows in row'));
            await elm.each(function (company, index) {
                company.getText().then(function (text) {
                    console.log(index, text);
                });
            });
        });

        it('selectez o companie anume', async()=> {
            await element(by.model('formData.companyCui')).element(by.css('option[value="string:0000000"]')).click();
            //browser.findElement(by.cssContainingText('option', 'string:0000000')).click();
            await element(by.css('[type="submit"]')).click().then(function () {       
            });

            let randomC = element(by.xpath('//*[@id="left-sidebar"]/div/div[2]/ul/li[2]/a')).click();
            browser.manage().timeouts().implicitlyWait(10000);
            let ChangeCmp = element(by.xpath('//*[@id="left-sidebar"]/div/div[2]/ul/li[2]/div/a'));
            await ChangeCmp.click().then(function(){
            });
        }); 

        it('should logout', async()=>{
            await arv.uName.click();
            browser.manage().timeouts().implicitlyWait(10000);
            let logOut = element(by.xpath('//*[@id="left-sidebar"]/div/div[2]/ul/li[5]/div/ul/li[4]/a'));
            await expect(logOut.isDisplayed()).toBe(true);
            await expect(logOut.getText()).toMatch('Logout');
            await logOut.click();
        });
    });       
>>>>>>> 40a7c51c3a02f0e334e8f8d614a241f90d63393a
});