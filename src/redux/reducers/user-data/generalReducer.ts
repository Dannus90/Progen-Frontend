import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export interface GeneralState {
  accountClicked: boolean;
  profileClicked: boolean;
}

const initialState: GeneralState = {
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

export const { accountClicked, profileClicked } = generalSlice.actions;
export const accountIsClicked = (state: RootState): boolean => state.generalState.accountClicked;
export const profileIsClicked = (state: RootState): boolean => state.generalState.profileClicked;

export const selectUserData = (state: RootState): GeneralState => state.generalState;

export default generalSlice.reducer;
