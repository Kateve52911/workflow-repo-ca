import { expect, test } from "@playwright/test";

test.describe("Navigation of venue list", () => {
  test("Navigate to venue list and click on first venue", async ({ page }) => {
    await page.goto("/");

    await expect(page.locator("#venue-container a").first()).toBeVisible();

    await page.locator("#venue-container a").first().click();

    await expect(page.locator("h1")).toContainText("Venue details");
  });
});
