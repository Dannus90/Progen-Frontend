import { userDataSlice } from "./userDataReducer";

export const { setName, setUserData, setHasLoaded, setProfileImageData, setHasNotLoaded } =
  userDataSlice.actions;
