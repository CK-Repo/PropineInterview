import { browser, by, element } from 'protractor';
import { Helper } from '../common/common';
import { TestData } from '../common/testdata';
import { PageObject } from './pageobjects.po';
import { protractor } from 'protractor/built/ptor';
import { stringify } from 'querystring';



describe('Propine Automation', () => {
  const helper: Helper = new Helper();
  const ObjectRepo: PageObject = new PageObject();
  const testdata: TestData = new TestData();
  let input;

  it('Positive Scenarios', () => {
    browser.get(testdata.baseUrl);
    browser.sleep(7000);
    expect(browser.getTitle()).toEqual('Propine Addition Calculator');

    }),

    it('add two positive integers', () => {
      helper.enterTextvalue(ObjectRepo.Firstnumber, testdata.int1);
      helper.enterTextvalue(ObjectRepo.SecondNumber, testdata.int2);
      helper.clickbutton(ObjectRepo.submitbutton);
      const integer = testdata.int1 + testdata.int2 ;
      console.log(integer);
      browser.sleep(3000);
      input = helper.GetElement(ObjectRepo.result);
      expect(input.getText()).toContain(integer);
  });

  it('negative integer to a positive floating', () => {
    helper.enterTextvalue(ObjectRepo.Firstnumber, testdata.int3);
    helper.enterTextvalue(ObjectRepo.SecondNumber, testdata.Float1);
    helper.clickbutton(ObjectRepo.submitbutton);
    const integer = testdata.int3 + testdata.Float1 ;
    console.log(integer);
    browser.sleep(3000);
    input = helper.GetElement(ObjectRepo.result);
    expect(input.getText()).toContain(integer);
});

});
