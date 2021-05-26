import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export interface SkillsState {
  skillModified: boolean;
  userSkillModified: boolean;
}

export const initialState: SkillsState = {
  skillModified: false,
  userSkillModified: false
};

export const skillsSlice = createSlice({
  name: "skills",
  initialState,
  reducers: {
    notifySkillModified: (state: SkillsState) => {
      state.skillModified = !state.skillModified;
    },
    notifyUserSkillModified: (state: SkillsState) => {
      state.userSkillModified = !state.userSkillModified;
    }
  }
});

export default skillsSlice.reducer;
