import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export interface GeneralState {
  accountClicked: boolean;
}

const initialState: GeneralState = {
  accountClicked: false
};

export const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    accountClicked: (state: GeneralState, action: PayloadAction<GeneralState>) => {
      state.accountClicked = !state.accountClicked;
    }
  }
});

export const { accountClicked } = generalSlice.actions;
export const accountIsClicked = (state: RootState): boolean => state.generalState.accountClicked;

export const selectUserData = (state: RootState): GeneralState => state.generalState;

export default generalSlice.reducer;
