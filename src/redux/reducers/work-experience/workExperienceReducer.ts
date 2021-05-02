import { createSlice } from "@reduxjs/toolkit";

export interface WorkExperienceState {
  workExperienceModified: boolean;
}

const initialState: WorkExperienceState = {
  workExperienceModified: false
};

export const workExperienceSlice = createSlice({
  name: "workExperience",
  initialState,
  reducers: {
    notifyWorkExperienceModified: (state) => {
      state.workExperienceModified = !state.workExperienceModified;
    }
  }
});

export default workExperienceSlice.reducer;
