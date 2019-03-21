describe('testproductlocation', function() {

    var productid = element(by.id('productid'));
    var aisle = element(by.id('aisle'));
    var bay = element(by.id('bay'));
    var button = element(by.buttonText('Add Product Location'));
    

    beforeEach(function() {
        browser.get('http://localhost:4200/productlocation');
        
      });

    it('should have a title',()=>{

        expect(browser.getTitle()).toEqual('Automationdemo');
    })



    it('should add product location', function() {
        productid.sendKeys('1234');
        aisle.sendKeys('A01');
        bay.sendKeys('2');
        //state.sendKeys(4);
    a();
        button.click();
        browser.driver.sleep(10000);
        });
    
    });
    
    function a (){
     console.log('tes');
    }

