import { createSlice } from "@reduxjs/toolkit";

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
