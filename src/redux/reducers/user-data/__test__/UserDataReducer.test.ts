import { userDataSlice } from './../userDataReducer';
import { rootReducer } from "../../rootReducer";
import { initialState } from "../userDataReducer";
import { setProfileImageData } from '../actions';

describe("UserData Redux", () => {
  describe("User data redux setup is correct", () => {
    it("Is defined correctly", () => {
      expect(rootReducer.userDataState).toBeDefined();
      expect(userDataSlice.name).toBe("userData");
    });
  });

  describe("Set profile image action is working", () => {
    it("Correctly updates the state", () => {
      const state = rootReducer.userDataState(initialState, setProfileImageData({ profileImagePublicId: "testId", profileImage: "testUrl"}));

      expect(state.profileImage).toBe("testUrl");
      expect(state.publicId).toBe("testId");
    });
  });
});
