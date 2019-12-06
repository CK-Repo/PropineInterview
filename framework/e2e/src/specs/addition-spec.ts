import { browser, by, element } from 'protractor';
import { Helper } from '../common/common';
import { TestData } from '../common/testdata';
import { PageObject } from './pageobjects.po';
import { protractor } from 'protractor/built/ptor';
import { stringify } from 'querystring';



describe('Positive Scenarios', () => {
  const helper: Helper = new Helper();
  const ObjectRepo: PageObject = new PageObject();
  const testdata: TestData = new TestData();
  let input;

  it('Url Launched-', () => {
    browser.get(testdata.baseUrl);
    browser.sleep(7000);
    expect(browser.getTitle()).toEqual('Propine Addition Calculator');

    }),

 // TestCase :1
 // Should be able to add two positive integers numbers

   it('add two positive integers-', () => {
      helper.enterTextvalue(ObjectRepo.Firstnumber, testdata.int1);
      helper.enterTextvalue(ObjectRepo.SecondNumber, testdata.int2);
      helper.clickbutton(ObjectRepo.submitbutton);
      const integer = testdata.int1 + testdata.int2 ;
      console.log('Firstnumber = ', testdata.int1 , 'SecondNumber = ', testdata.int2 , 'Result = ', integer );
      browser.sleep(500);
      input = helper.GetElement(ObjectRepo.result);
      expect(input.getText()).toContain(integer);
  });

  // TestCase :2
  // Should be able to add a negative integer to a positive floating point number
  it('negative integer to a positive floating-', () => {
    helper.enterTextvalue(ObjectRepo.Firstnumber, testdata.negativeint3);
    helper.enterTextvalue(ObjectRepo.SecondNumber, testdata.Float1);
    helper.clickbutton(ObjectRepo.submitbutton);
    const integer = testdata.negativeint3 + testdata.Float1 ;
    console.log('Firstnumber = ', testdata.negativeint3 , 'SecondNumber = ', testdata.Float1 , 'Result = ', integer );
    browser.sleep(500);
    input = helper.GetElement(ObjectRepo.result);
    expect(input.getText()).toContain(integer);
});

// TestCase :3
// Should be able to add a floating[Decimal] point number to an integer
  it('Float Decimal Value to integer-', () => {
  helper.enterTextvalue(ObjectRepo.Firstnumber, testdata.Float1);
  helper.enterTextvalue(ObjectRepo.SecondNumber, testdata.int2);
  helper.clickbutton(ObjectRepo.submitbutton);
  const integer = testdata.Float1 + testdata.int2 ;
  console.log('Firstnumber = ', testdata.Float1 , 'SecondNumber = ', testdata.int2 , 'Result = ', integer );
  browser.sleep(500);
  input = helper.GetElement(ObjectRepo.result);
  expect(input.getText()).toContain(integer);
});

// TestCase :4
// Should be able to add an integer to a floating point number
  it('Integer to Floating Decimal numbers-', () => {
  helper.enterTextvalue(ObjectRepo.Firstnumber, testdata.int1);
  helper.enterTextvalue(ObjectRepo.SecondNumber, testdata.Float1);
  helper.clickbutton(ObjectRepo.submitbutton);
  const integer = testdata.int1 + testdata.Float1;
  console.log('Firstnumber = ', testdata.int1 , 'SecondNumber = ', testdata.Float1 , 'Result = ', integer );
  browser.sleep(500);
  input = helper.GetElement(ObjectRepo.result);
  expect(input.getText()).toContain(integer);
});

// TestCase :5
// Should be able to add two floating[Decimal] point numbers
  it('Add two Floating point numbers -', () => {
  helper.enterTextvalue(ObjectRepo.Firstnumber, testdata.Float1);
  helper.enterTextvalue(ObjectRepo.SecondNumber, testdata.Float2);
  helper.clickbutton(ObjectRepo.submitbutton);
  const integer = testdata.Float1 + testdata.Float2;
  console.log('Firstnumber = ', testdata.Float1 , 'SecondNumber = ', testdata.Float2 , 'Result = ', integer );
  browser.sleep(500);
  input = helper.GetElement(ObjectRepo.result);
  expect(input.getText()).toContain(integer);
});

// TestCase :6
// Should be able to add two large 32bit positive integers
  it('Add two large 32bit Positive integers -', () => {
  helper.enterTextvalue(ObjectRepo.Firstnumber, testdata.largeint32bit);
  helper.enterTextvalue(ObjectRepo.SecondNumber, testdata.largeint32bit);
  helper.clickbutton(ObjectRepo.submitbutton);
  const integer = testdata.largeint32bit + testdata.largeint32bit;
  console.log('Firstnumber = ', testdata.largeint32bit , 'SecondNumber = ', testdata.largeint32bit , 'Result = ', integer );
  browser.sleep(500);
  input = helper.GetElement(ObjectRepo.result);
  expect(input.getText()).toContain(integer);
});

// TestCase :7
// Should be able to add a negative integer and zero
  it('Add a negative integer and zero-', () => {
  helper.enterTextvalue(ObjectRepo.Firstnumber, testdata.negativeint3);
  helper.enterTextvalue(ObjectRepo.SecondNumber, testdata.zero);
  helper.clickbutton(ObjectRepo.submitbutton);
  const integer = testdata.negativeint3 + testdata.zero;
  console.log('Firstnumber = ', testdata.negativeint3 , 'SecondNumber = ', testdata.zero , 'Result = ', integer );
  browser.sleep(500);
  input = helper.GetElement(ObjectRepo.result);
  expect(input.getText()).toContain(integer);
});

// TestCase :8
// Should be able to add two large 64 bit positive integers
  it('Add two large 64bit integers ', () => {
  helper.enterTextvalue(ObjectRepo.Firstnumber, testdata.largeint64bit);
  helper.enterTextvalue(ObjectRepo.SecondNumber, testdata.largeint64bit);
  helper.clickbutton(ObjectRepo.submitbutton);
  const integer = testdata.largeint64bit + testdata.largeint64bit;
  console.log('Firstnumber = ', testdata.largeint64bit , 'SecondNumber = ', testdata.largeint64bit , 'Result = ', integer );
  browser.sleep(500);
  input = helper.GetElement(ObjectRepo.result);
  expect(input.getText()).toContain(integer);
});

});
