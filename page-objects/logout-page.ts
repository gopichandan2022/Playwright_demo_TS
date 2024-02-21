import {expect, Page} from "@playwright/test";
export class LogoutPage {
   page:any;
   icon:any;
   logout:any;
   wait:any;

constructor(page)
{
   this.page = page;
   this.icon= page.locator(".user-icon");
   this.logout= page.locator(".logout-btn");
   this.wait= page.locator("#username"); 
}
 async Logout()
 {
   await this.icon.click();
   await this.logout.click();
   await this.wait.waitFor(); 
 }
 }
