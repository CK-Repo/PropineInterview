import { browser, by, element, promise } from 'protractor';
import { Helper } from '../common/common';
import { ObjectLocator } from '../common/objectLocator';

const Locator: ObjectLocator = new ObjectLocator();


export class PageObject {

    // tslint:disable: quotemark
    readonly SearchBox = ['id', "twotabsearchtextbox"];
    readonly Searchicon = ['css', '#nav-search-submit-text > .nav-input'];
    readonly SearchLink = ['xpath', "//div/img[@class='s-image' and 1]"];
    readonly Screenshot = ['xpath', "//div/img[@class='s-image' and 1]"];
    readonly result = ['xpath', "//div/div[2]/div"];
    readonly result1 = ['css', ".col-md-6 > div"]
    readonly result2 = '//div/div[2]/div';




}
