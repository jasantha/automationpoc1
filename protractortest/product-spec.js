describe('testproducts', function() {
//UI_TESTS_TAGS:products
    var productid = element(by.id('id'));
    var productname = element(by.id('name'));
    var description = element(by.id('description'));
   // var state = element(by.id('state'));
    var button = element(by.buttonText('Add Product'));
    

    beforeEach(function() {
        browser.get('http://localhost:4200/products');
        
      });

    it('should have a title',()=>{

        expect(browser.getTitle()).toEqual('Automationdemo');
    })



    it('should add product', function() {
        productid.sendKeys(1);
        productname.sendKeys(2);
        description.sendKeys(3);
        //state.sendKeys(4);
    a();
        button.click();
        browser.driver.sleep(10000);
        });
    
    });
    
    function a (){
     console.log('tes');
    }

