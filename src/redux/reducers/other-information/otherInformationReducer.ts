import { createSlice } from "@reduxjs/toolkit";

export interface OtherInformationState {
  languageModified: boolean;
}

export const initialState: OtherInformationState = {
  languageModified: false
};

export const otherInformationSlice = createSlice({
  name: "otherInformation",
  initialState,
  reducers: {
    notifyLanguageModified: (state) => {
      state.languageModified = !state.languageModified;
    }
  }
});

export default otherInformationSlice.reducer;
