import { browser, by, element, ElementFinder, Key, promise, } from 'protractor';
import { ObjectLocator } from './ObjectLocator';
import { TestData } from './testdata';



// Helper class will have all the common functions
// i have created couple of functions needed for automation flows

export class Helper {
    // tslint:disable: quotemark
    // tslint:disable: ban-types

  private testdata: TestData = new TestData();
  public Locator: ObjectLocator = new ObjectLocator();

  public date = new Date();


  getTextValuee(elementFinder: ElementFinder) {
        return elementFinder.getText();
      }

    GetElement(ele) {
      const text = this.Locator.findLocator(ele);
      return text;
  }

    VerifyText(ele) {
      const text = this.Locator.findLocator(ele);
      return text;
      }

    enterTextvalue(ele, value) {
      const entertext = this.Locator.findLocator(ele);
      entertext.sendKeys(value);
  }

  clickbutton(ele) {
    const clickbtn = this.Locator.findLocator(ele);
    clickbtn.click();
}



}
