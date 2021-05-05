import { setTokens } from './../auth-helper';
import { getToken } from "../auth-helper";

describe("Token management works", () => {
  describe("Set and retrieve token from localstorage works", () => {
    it("Is works correclty", () => {
      const tokenData = getToken()

      expect(tokenData).toBe(undefined);
      
      const newTokenData = {
        accessToken: "wrwqettqwegqwetqwetqwet",
        refreshToken: "4wergwrgqwrogwergwerg"
      }

      setTokens(newTokenData);
      const updatedTokenData = getToken();

      expect(updatedTokenData.accessToken).toEqual(newTokenData.accessToken);
      expect(updatedTokenData.refreshToken).toEqual(newTokenData.refreshToken);
    });
  });
});
