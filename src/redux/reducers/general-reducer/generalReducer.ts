import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface GeneralState {
  accountClicked: boolean;
  profileClicked: boolean;
}

export const initialState: GeneralState = {
  accountClicked: false,
  profileClicked: false
};

export const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    accountClicked: (state: GeneralState, action: PayloadAction<boolean>) => {
      state.accountClicked = action.payload;
    },
    profileClicked: (state: GeneralState, action: PayloadAction<boolean>) => {
      state.profileClicked = action.payload;
    }
  }
});

export default generalSlice.reducer;
