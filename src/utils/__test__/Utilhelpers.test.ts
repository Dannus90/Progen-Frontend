import { setTokens, getToken } from "./../auth-helper";

import {
  createDate,
  getCurrentMonth,
  getDate,
  getDateStandardFormat,
  transformDate
} from "../dates/date-helper";

describe("Token management works", () => {
  describe("Set and retrieve token from localstorage works", () => {
    it("Is works correclty", () => {
      const tokenData = getToken();

      expect(tokenData).toStrictEqual({ accessToken: "", refreshToken: "" });

      const newTokenData = {
        accessToken: "wrwqettqwegqwetqwetqwet",
        refreshToken: "4wergwrgqwrogwergwerg"
      };

      setTokens(newTokenData);
      const updatedTokenData = getToken();

      expect(updatedTokenData.accessToken).toEqual(newTokenData.accessToken);
      expect(updatedTokenData.refreshToken).toEqual(newTokenData.refreshToken);
    });
  });
});

describe("Date helper works", () => {
  describe("Gets standard date format correctly", () => {
    it("Is works", () => {
      const currentDate = getDateStandardFormat();

      expect(currentDate.includes(new Date().getFullYear().toString())).toBe(true);
      expect(currentDate.includes(String(new Date().getMonth() + 1).padStart(2, "0"))).toBe(true);
      expect(currentDate.includes(String(new Date().getDate()).padStart(2, "0"))).toBe(true);
    });
  });

  describe("Date transform transforms date correctly", () => {
    it("Transformation works correctly", () => {
      const transformedNullDate = transformDate(null);

      expect(transformedNullDate).toEqual("-");

      const transformedDate = transformDate("2020-05-1412355ergwefgwegwergwerg");

      expect(transformedDate).toEqual("2020-05-14");
    });
  });

  describe("Create date works as intended.", () => {
    it("Correctly creates the date", () => {
      const currentDate = createDate();

      expect(currentDate).toEqual(new Date());
    });
  });

  describe("Get date works as intended.", () => {
    it("Correctly gets the date", () => {
      const currentDate = getDate();

      expect(currentDate).toEqual(new Date().getDate());
    });
  });

  describe("Get current month works as expected.", () => {
    it("Correctly gets the date", () => {
      const monthData = getCurrentMonth();

      expect(monthData.enMonth !== null).toBe(true);
      expect(monthData.svMonth !== null).toBe(true);
    });
  });
});
