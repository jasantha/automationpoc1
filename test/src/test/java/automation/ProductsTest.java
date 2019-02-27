package automation;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

import pages.productPage;

public class ProductsTest extends BaseTest
{
	
	@Test (groups = { "products"})
	public void testProducts() throws InterruptedException{
		try{
		productPage pr = new productPage(driver);
        //Searching text in google text box
		pr.productslink.click();
        pr.searchText.sendKeys("5");
        //Searching text in google text box
        pr.searchText1.sendKeys("product5");
        //Searching text in google text box
        pr.searchText2.sendKeys("description5");
        //Searching text in google text box
        pr.addButton.click();
        Thread.sleep(1000);
		}
		catch(Exception e){
			System.out.println("e"+e);
		}
	}
	
	

}
