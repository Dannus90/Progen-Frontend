import { createSlice } from "@reduxjs/toolkit";

export interface SkillsState {
  skillModified: boolean;
}

export const initialState: SkillsState = {
  skillModified: false
};

export const skillsSlice = createSlice({
  name: "skills",
  initialState,
  reducers: {
    notifySkillModified: (state) => {
      state.skillModified = !state.skillModified;
    }
  }
});

export default skillsSlice.reducer;
