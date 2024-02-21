import {expect, Page} from "@playwright/test";
import { loginInfo } from "../playwright.config";
export class LoginPage {
   page:any;
   userName:any;
   userbutton:any;
   password:any;
   passwordbutton:any;
   wait:any;

constructor(page)
{
   this.page = page ;
   this.userName= page.locator("#username");
   this.userbutton = page.locator("[type='submit']");
   this.password= page.locator("#password");
   this.passwordbutton= page.locator("[type='submit']");
   this.wait= page.locator(".create-center-button");
}

async goTo(url)

{
   await this.page.goto(url);
}

async validLogin(userName,password)
 {
   await this.userName.type(userName);
   await this.userbutton.click();
   await this.password.type(password);
   await this.passwordbutton.click();
   await this.wait.waitFor();
 }
 }