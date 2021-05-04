import { rootReducer } from "../../rootReducer";
import { accountClicked, profileClicked } from "../actions";
import { generalSlice, initialState } from "../generalReducer";

describe("General Redux", () => {
  describe("General redux setup is correct", () => {
    it("Is defined correctly", () => {
      expect(rootReducer.generalState).toBeDefined();
      expect(generalSlice.name).toBe("general");
    })
  })

  describe("It updates general account clicked state correctly", () => {
    it("Toggles between true and false correctly", () => {
      const state = rootReducer.generalState(initialState, accountClicked(true))

      expect(state.accountClicked).toBe(true);

      const updatedState = rootReducer.generalState(state, accountClicked(false))
      expect(updatedState.accountClicked).toBe(false);
    })
  })

  describe("It updates general profile clicked state correctly", () => {
    it("Toggles between true and false correctly", () => {
      const state = rootReducer.generalState(initialState, profileClicked(true))

      expect(state.profileClicked).toBe(true);

      const updatedState = rootReducer.generalState(state, profileClicked(false))
      expect(updatedState.profileClicked).toBe(false);
    })
  })
})