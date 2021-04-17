import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../store";

export interface UserDataState {
  firstName: string | null;
  lastName: string | null;
}

const initialState: UserDataState = {
  firstName: "",
  lastName: ""
};

export const userDataSlice = createSlice({
  name: "userData",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setName: (state, action: PayloadAction<UserDataState>) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
    }
  }
});

export const { setName } = userDataSlice.actions;
export const selectFullName = (state: RootState) =>
  `${state.userData.firstName} ${state.userData.lastName}`;

export default userDataSlice.reducer;
