import { rootReducer } from "../../rootReducer";
import { notifyWorkExperienceModified } from "../actions";
import { workExperienceSlice, initialState } from "../workExperienceReducer";

describe("WorkExperience Redux", () => {
  describe("WorkExperience redux setup is correct", () => {
    it("Is defined correctly", () => {
      expect(rootReducer.workExperienceState).toBeDefined();
      expect(workExperienceSlice.name).toBe("workExperience");
    });
  });

  describe("It updates workexperience modified state correctly", () => {
    it("Toggles between true and false correctly", () => {
      const state = rootReducer.workExperienceState(initialState, notifyWorkExperienceModified());

      expect(state.workExperienceModified).toBe(true);

      const updatedState = rootReducer.workExperienceState(state, notifyWorkExperienceModified());
      expect(updatedState.workExperienceModified).toBe(false);
    });
  });
});
