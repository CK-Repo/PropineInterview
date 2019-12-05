import { browser, by, element, promise } from 'protractor';
import { Helper } from '../common/common';
import { ObjectLocator } from '../common/objectLocator';

const Locator: ObjectLocator = new ObjectLocator();


export class PageObject {

    // tslint:disable: quotemark
    readonly HomePagetext = ['xpath', "//h1[contains(.,'Propine Addition Calculator')]"];
    readonly Firstnumber = ['name', 'firstNumber'];
    readonly SecondNumber = ['name', 'secondNumber'];
    readonly submitbutton = ['xpath', "//input[@type='submit']"];
    readonly result = ['xpath', "//div/div[2]/div"];
    readonly result1 = ['css', ".col-md-6 > div"]
    readonly result2 = '//div/div[2]/div';




}
