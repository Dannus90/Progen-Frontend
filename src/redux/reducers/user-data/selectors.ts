import { RootState } from "../../store";
import { UserDataState } from "./userDataReducer";

export const selectFullName = (state: RootState): string =>
  `${state.userDataState.firstName} ${state.userDataState.lastName}`;

export const selectUserData = (state: RootState): UserDataState => state.userDataState;

export const selectWorkTitleSv = (state: RootState): string => `${state.userDataState.workTitleSv}`;
export const selectWorkTitleEn = (state: RootState): string => `${state.userDataState.workTitleEn}`;
