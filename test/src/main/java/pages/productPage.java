package pages;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class productPage {
	WebDriver driver;
	@FindBy(xpath="//a[@href = '/products']")
	public WebElement productslink;
	@FindBy(id ="id")
	public WebElement searchText;
	
	@FindBy(id ="name")
	public WebElement searchText1;
	
	@FindBy(id ="description")
	public WebElement searchText2;
	
	@FindBy(xpath ="//button[contains(text(),'Add Product')]")
	public WebElement addButton;
	@FindBy(xpath ="//button[contains(text(),'Add Store')]")
	public WebElement addStore;
	@FindBy(xpath = "//a[contains(text(),'Stores')]")
	public WebElement storebutton;
	public productPage(WebDriver driver) {
		PageFactory.initElements(driver, this);

	}
}
