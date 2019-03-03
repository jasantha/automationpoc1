describe('teststores', function() {

    var storenumber = element(by.id('storenumber'));
    var storename = element(by.id('storename'));
    var city = element(by.id('city'));
   // var state = element(by.id('state'));
    var button = element(by.buttonText('Add Store'));
    

    beforeEach(function() {
        browser.get('http://localhost:4200/stores');
        
      });

    it('should have a title',()=>{

        expect(browser.getTitle()).toEqual('Automationdemo');
    })



    it('should add store', function() {
        storenumber.sendKeys(1);
        storename.sendKeys(2);
        city.sendKeys(3);
        //state.sendKeys(4);
    a();
        button.click();
        browser.driver.sleep(5000);
        });
    
    });
    
    function a (){
     console.log('tes');
    }

