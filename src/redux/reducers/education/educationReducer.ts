import { createSlice } from "@reduxjs/toolkit";

export interface EducationState {
  educationModified: boolean;
}

export const initialState: EducationState = {
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
