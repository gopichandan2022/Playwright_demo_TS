import { test, expect, type Page } from '@playwright/test';
import { LogoutPage } from '../../page-objects/logout-page';
import { LoginPage } from '../../page-objects/login-page';
import {loginInfo} from "../../playwright.config"

test.describe("Validate logout functionality", () => {
  test("To check Logout", async ({
  page,
  }, testInfo) => {
    testInfo.annotations.push({
      type: "zephyr",
      description:"",//Fill Zephyr link
    });
  const loginPage=new LoginPage(page);
  const logoutpage = new LogoutPage(page);
  await loginPage.goTo(loginInfo.url);
  await loginPage.validLogin(loginInfo.userName,loginInfo.password);
  await expect(page.locator(".create-center-button")).toContainText(" Create Customer ");
  await logoutpage.Logout();
  await expect(page.locator("#username")).toContainText("  ");
})});

