import { describe, expect, test } from "vitest";
import { isActivePath } from "js/utils/userInterface.js";

describe(isActivePath, () => {
  test("testing that the function returns true when current path matches href exactly", () => {
    const href = "/index.html";
    const currentPath = "/index.html";
    const expectedOutput = true;

    const result = isActivePath(href, currentPath);

    expect(result).toBe(expectedOutput);
  });

  test(`testing if the function returns true for root path ("/") when path is "/index.html"`, () => {
    const href = "/";
    const currentPath = "/index.html";
    const expectedOutput = true;

    const result = isActivePath(href, currentPath);

    expect(result).toBe(expectedOutput);
  });

  test(`testing if the function returns true for root path ("/") when path is "/"`, () => {
    const href = "/";
    const currentPath = "/";
    const expectedOutput = true;

    const result = isActivePath(href, currentPath);

    expect(result).toBe(expectedOutput);
  });

  test(`testing if the function returns true if the current path includes the href`, () => {
    const href = "/about";
    const currentPath = "/about/index.html";
    const expectedOutput = true;

    const result = isActivePath(href, currentPath);

    expect(result).toBe(expectedOutput);
  });

  test(`testing if the function returns false for when paths do not match`, () => {
    const href = "/about.html";
    const currentPath = "/contact.html";
    const expectedOutput = false;

    const result = isActivePath(href, currentPath);

    expect(result).toBe(expectedOutput);
  });
});
