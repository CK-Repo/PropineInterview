import { browser, by, element } from 'protractor';
import { Helper } from '../common/common';
import { TestData } from '../common/testdata';
import { PageObject } from './pageobjects.po';



describe('NuvPropine Automattion', () => {
  const helper: Helper = new Helper();
  const NuvvenObjectRepoRepo: PageObject = new PageObject();
  const testdata: TestData = new TestData();




  it('Homepage Launched', () => {
    browser.get(testdata.baseUrl);
    browser.sleep(7000);
    expect(browser.getTitle()).toEqual('Propine Addition Calculator');

    });

});
