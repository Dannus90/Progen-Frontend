import { createSlice } from "@reduxjs/toolkit";

export interface WorkExperienceState {
  educationModified: boolean;
}

const initialState: WorkExperienceState = {
  educationModified: false
};

export const educationSlice = createSlice({
  name: "education",
  initialState,
  reducers: {
    notifyEducationModified: (state) => {
      state.educationModified = !state.educationModified;
    }
  }
});

export default educationSlice.reducer;
