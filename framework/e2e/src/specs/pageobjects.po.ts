import { browser, by, element, promise } from 'protractor';
import { Helper } from '../common/common';
import { ObjectLocator } from '../common/objectLocator';

const Locator: ObjectLocator = new ObjectLocator();


export class PageObject {

    // tslint:disable: quotemark
    readonly HomePagetext = ['xpath', "//h1[contains(.,'Propine Addition Calculator')]"];
    

}
