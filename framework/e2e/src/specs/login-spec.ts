import { browser, by, element } from 'protractor';
import { Helper } from '../common/common';
import { TestData } from '../common/testdata';
import { PageObject } from './pageobjects.po';
import { protractor } from 'protractor/built/ptor';
import { stringify } from 'querystring';
import{createWriteStream} from 'fs'







describe('Assignment', () => {
  const helper: Helper = new Helper();
  const ObjectRepo: PageObject = new PageObject();
  const testdata: TestData = new TestData();
  let input;


  var fs = require('fs');

    // abstract writing screen shot to a file
    function writeScreenShot(data, filename) {
        var stream = fs.createWriteStream(filename);
        stream.write(new Buffer(data, 'base64'));
        stream.end();
    }

// Remobing unwanted parameters from URL
function removeParam(key, sourceURL) {
  var rtn = sourceURL.split("?")[0],
      param,
      params_arr = [],
      queryString = (sourceURL.indexOf("?") !== -1) ? sourceURL.split("?")[1] : "";
  if (queryString !== "") {
      params_arr = queryString.split("&");
      for (var i = params_arr.length - 1; i >= 0; i -= 1) {
          param = params_arr[i].split("=")[0];
          if (param === key) {
              params_arr.splice(i, 1);
          }
      }
      rtn = rtn + "?" + params_arr.join("&");
  }
  return rtn;
}




  it('Homepage Loaded_', () => {
    browser.get(testdata.baseUrl)
    .then(() => expect(browser.getTitle()).toContain('Online Shopping site in India'));
    //browser.sleep(7000);
    //expect(browser.getTitle()).toContain('Online Shopping site in India');

}),


   
 // TestCase :1
 // Search for a n item in the search box

   it('Search item-', () => {
      helper.enterTextvalue(ObjectRepo.SearchBox, testdata.searchitemname);

      helper.clickbutton(ObjectRepo.Searchicon);
      browser.sleep(7000);
      browser.ignoreSynchronization = true; // for non-angular websites

      // Screenshot for the item that is being clicked
      var foo = element(by.xpath("//div/img[@class='s-image' and 1]"));
      foo.takeScreenshot().then((png) => {
      writeScreenShot(png, 'item being clicked.png');
      browser.sleep(4000);

      });

     helper.clickbutton(ObjectRepo.SearchLink);
     browser.sleep(4000);
     browser.getAllWindowHandles().then(function(handles) {
     browser.switchTo().window(handles[1]);
     browser.sleep(2000);
     var productname =helper.getTextValuee(element(by.xpath("//h1[@id='title']"))).then(console.log);
     var Price = helper.getTextValuee(element(by.xpath("//span[@id='priceblock_ourprice']"))).then(console.log);
     var discount = helper.getTextValuee(element(by.xpath("//td[@class='a-span12 a-color-price a-size-base priceBlockSavingsString']"))).then(console.log);
     var DeliveryTime = helper.getTextValuee(element(by.xpath("//div[@id='ddmDeliveryMessage']"))).then(console.log);
     var Rating = helper.getTextValuee(element(by.xpath("//div[@id='averageCustomerReviews' and 1]"))).then(console.log);
     var OriginalURL = browser.getCurrentUrl().then(console.log);
       // var alteredURL = removeParam("ref", OriginalURL).then(console.log);


   // Screenshot for the product images

   browser.actions().mouseMove(element(by.xpath("//*[@id='a-autoid-9']/span[@class='a-button-inner' and 1]/input[@class='a-button-input' and 1]"))).perform();
   var foo = element(by.xpath("//div[@id='imgTagWrapperId']"));
   foo.takeScreenshot().then((png) => {
   writeScreenShot(png, 'Product image1.png');
   browser.sleep(4000);
   });


    // // Screenshot for the product images
    // browser.actions().mouseMove(element(by.xpath("//*[@id='a-autoid-10']/span[@class='a-button-inner' and 1]/input[@class='a-button-input' and 1]"))).perform();
    // var foo = element(by.xpath("//div[@id='main-video-container']"));
    // foo.takeScreenshot().then((png) => {
    // writeScreenShot(png, 'Product image2.png');
    // browser.sleep(4000);
    // });
         
        // Screenshot for the product images
        browser.actions().mouseMove(element(by.xpath("//*[@id='a-autoid-11']/span[@class='a-button-inner' and 1]/input[@class='a-button-input' and 1]"))).perform();
        var foo = element(by.xpath("//span/div[@class='imgTagWrapper' and 1]"));
        foo.takeScreenshot().then((png) => {
        writeScreenShot(png, 'Product image3.png');
        browser.sleep(4000);
        });   

    // // Screenshot for the product images
    // browser.actions().mouseMove(element(by.xpath("//*[@id='a-autoid-12']/span[@class='a-button-inner' and 1]/input[@class='a-button-input' and 1]"))).perform();
    // var foo = element(by.xpath("//span/div[@class='imgTagWrapper' and 1]"));
    // foo.takeScreenshot().then((png) => {
    // writeScreenShot(png, 'Product image4.png');
    // browser.sleep(4000);
    // });

    
 
      });

});

    
});




