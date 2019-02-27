package automation;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.AfterTest;
import org.testng.annotations.Test;

import pages.StorePage;
import pages.productPage;

public class StoresTest extends BaseTest
{	
	
	@Test (groups = { "stores"})
	public void testStores() throws InterruptedException{
		try{
		productPage pr = new productPage(driver);
		pr.storebutton.click();
		StorePage st = new StorePage(driver);

        //Searching text in google text box
        st.searchText.sendKeys("595");
        //Searching text in google text box
        st.searchText1.sendKeys("mooresville store");
        //Searching text in google text box
        st.searchText2.sendKeys("mooresville");
        //Searching text in google text box
        st.addStore.click();
        Thread.sleep(1000);
		}
		catch(Exception e){
			System.out.println("e"+e);
		}
	}
}
