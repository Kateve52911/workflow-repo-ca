import { expect, describe, test, beforeEach } from "vitest";
import { getUsername, saveUser } from "/js/utils/storage.js";

describe("storage functions for username", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  describe(saveUser, () => {
    test("save username to localStorage", () => {
      const testUser = { name: "testUser" };
      saveUser(testUser);
      expect(localStorage.getItem("user")).toBe(JSON.stringify(testUser));
    });
  });

  describe(getUsername, () => {
    test("testing that the function returns username from storage", () => {
      const testUser = { name: "testUser" };
      localStorage.setItem("user", JSON.stringify(testUser));
      const retrievedUsername = getUsername();
      expect(retrievedUsername).toBe("testUser");
    });

    test("testing that the function returns null when there are no users in storage", () => {
      const retrievedUsername = getUsername();
      expect(retrievedUsername).toBe(null);
    });
  });
});
