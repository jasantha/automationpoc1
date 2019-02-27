package automation;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.AfterSuite;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.BeforeSuite;
import org.testng.annotations.BeforeTest;


public class BaseTest {
	public WebDriver driver ;
	    static{
			System.setProperty("webdriver.chrome.driver", "/Users/jasantha/Downloads/chromedriver");			  
	   }

	   @BeforeMethod(alwaysRun = true)
	   public  void initializeDriver(){
		   driver= new ChromeDriver();
			driver.manage().timeouts().implicitlyWait(50, TimeUnit.SECONDS);
			driver.get("http://localhost:4200");
	   }
	   
	   @AfterMethod(alwaysRun = true)
	   public void tearDown(){

	       if (driver != null) {
	           driver.quit();
	       }
	   }
}
