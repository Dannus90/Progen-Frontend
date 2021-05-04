import { rootReducer } from "../../rootReducer";
import { notifyEducationModified } from "../actions";
import { educationSlice, initialState } from "../educationReducer";

describe("Education Redux", () => {
  describe("Education redux setup is correct", () => {
    it("Is defined correctly", () => {
      expect(rootReducer.education).toBeDefined();
      expect(educationSlice.name).toBe("education");

    })
  })

  describe("It updates education modified state correctly", () => {
    it("Toggles between true and false correctly", () => {
      const state = rootReducer.education(initialState, notifyEducationModified())

      expect(state.educationModified).toBe(true);

      const updatedState = rootReducer.education(state, notifyEducationModified())
      expect(updatedState.educationModified).toBe(false);
    })
  })
})