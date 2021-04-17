import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

type acceptedTypes = string | null;

export interface UserDataState {
  firstName: acceptedTypes;
  lastName: acceptedTypes;
  emailCv: acceptedTypes;
  phoneNumber: acceptedTypes;
  countrySv: acceptedTypes;
  citySv: acceptedTypes;
  countryEn: acceptedTypes;
  cityEn: acceptedTypes;
}

interface UserNameData {
  firstName: acceptedTypes;
  lastName: acceptedTypes;
}

const initialState: UserDataState = {
  firstName: "",
  lastName: "",
  emailCv: "",
  phoneNumber: "",
  countrySv: "",
  citySv: "",
  countryEn: "",
  cityEn: ""
};

export const userDataSlice = createSlice({
  name: "userData",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setName: (state, action: PayloadAction<UserNameData>) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
    },
    setUserData: (state, action: PayloadAction<UserDataState>) => {
      state = action.payload
    },
  }
});

export const { setName } = userDataSlice.actions;
export const selectFullName = (state: RootState): string =>
  `${state.userDataState.firstName} ${state.userDataState.lastName}`;

export const selectUserData = (state: RootState): UserDataState => state.userDataState

export default userDataSlice.reducer;
