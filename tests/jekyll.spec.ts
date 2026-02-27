import { test, expect } from "@playwright/test";

test("homepage loads correctly", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/.*Lanz.*/);
  await page.screenshot({ path: "screenshots/homepage.png", fullPage: true });
});

test("about page loads", async ({ page }) => {
  await page.goto("/about");
  await expect(page.locator("main")).toBeVisible();
});

test("404 page exists", async ({ page }) => {
  await page.goto("/nonexistent-page");
  await expect(page.locator(".page-content")).toBeVisible();
});
