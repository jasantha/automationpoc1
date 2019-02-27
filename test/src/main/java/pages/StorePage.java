package pages;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class StorePage {
	WebDriver driver;
	@FindBy(id ="storenumber")
	public WebElement searchText;
	
	@FindBy(id ="storename")
	public WebElement searchText1;
	
	@FindBy(id ="city")
	public WebElement searchText2;
	
	@FindBy(xpath ="//button[contains(text(),'Add Store')]")
	public WebElement addStore;

	public StorePage(WebDriver driver) {
		PageFactory.initElements(driver, this);

	}
}
