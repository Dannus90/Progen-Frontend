import { createSlice } from "@reduxjs/toolkit";

export interface WorkExperienceState {
  workExperienceAdded: boolean;
}

const initialState: WorkExperienceState = {
  workExperienceAdded: false
};

export const userDataSlice = createSlice({
  name: "workExperience",
  initialState,
  reducers: {
    notifyWorkExperienceAdded: (state) => {
      state.workExperienceAdded = !state.workExperienceAdded;
    }
  }
});

export default userDataSlice.reducer;
