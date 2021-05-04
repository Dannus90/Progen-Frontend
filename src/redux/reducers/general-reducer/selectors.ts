import { RootState } from "../../store";
import { GeneralState } from "./generalReducer";

export const selectUserData = (state: RootState): GeneralState => state.generalState;
export const accountIsClicked = (state: RootState): boolean => state.generalState.accountClicked;
export const profileIsClicked = (state: RootState): boolean => state.generalState.profileClicked;
