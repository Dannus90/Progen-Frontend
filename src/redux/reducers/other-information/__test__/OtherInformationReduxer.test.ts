import { rootReducer } from "../../rootReducer";
import { notifyLanguageModified } from "../actions";
import { otherInformationSlice, initialState } from "../otherInformationReducer";

describe("Other information Redux", () => {
  describe("Other information redux setup is correct", () => {
    it("Is defined correctly", () => {
      expect(rootReducer.workExperienceState).toBeDefined();
      expect(otherInformationSlice.name).toBe("otherInformation");
    });
  });

  describe("It updates other information modified state correctly", () => {
    it("Toggles between true and false correctly", () => {
      const state = rootReducer.otherInformationState(initialState, notifyLanguageModified());

      expect(state.languageModified).toBe(true);

      const updatedState = rootReducer.otherInformationState(state, notifyLanguageModified());
      expect(updatedState.languageModified).toBe(false);
    });
  });
});
