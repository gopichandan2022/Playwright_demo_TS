import { test, expect, type Page } from '@playwright/test';
//import {LoginPage} from '../../e2e/page-objects/login-page';
import { LoginPage } from '../../page-objects/login-page';
// import data from "../../utils/LoginTestData.json";
import {loginInfo} from "../../playwright.config"

test.beforeEach(async ({ page }) => {
  const loginPage=new LoginPage(page);
  await loginPage.goTo(loginInfo.url);
});

test.describe("Validate login functionality", () => {
  test("User can be able to login by providing valid credentials", async ({
  page,
  }, testInfo) => {
    testInfo.annotations.push({
      type: "zephyr",
      description:"",// fill Zephyr Link
    });
     const loginpage = new LoginPage(page);
    await loginpage.validLogin(loginInfo.userName,loginInfo.password);
    await expect(page.locator(".create-center-button")).toContainText(" Create Customer ");
 })});
