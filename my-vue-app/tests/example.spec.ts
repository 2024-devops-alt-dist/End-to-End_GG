import { test, expect } from "@playwright/test";

test.describe("sum", () => {
  test("test", async ({ page }) => {
    await page.goto("http://localhost:5175/");
    await page.getByRole("button", { name: "1" }).click();
    await page.getByRole("button", { name: "sum" }).click();
    await page.getByRole("button", { name: "1" }).click();
    await page.getByRole("button", { name: "=" }).click();
    await expect(page.locator("#result")).toMatchAriaSnapshot(`- text: "2"`);
  });
});

test.describe("soustraction", () => {
  test("test", async ({ page }) => {
    await page.goto("http://localhost:5175/");
    await page.getByRole("button", { name: "1" }).click();
    await page.getByRole("button", { name: "0" }).click();
    await page.getByRole("button", { name: "soustraction" }).click();
    await page.getByRole("button", { name: "9" }).click();
    await page.getByRole("button", { name: "=" }).click();
    await page.getByRole("button", { name: "1" }).click();
  });
});
