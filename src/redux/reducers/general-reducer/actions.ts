import { RootState } from "../../store";
import { generalSlice } from "./generalReducer";

export const { accountClicked, profileClicked } = generalSlice.actions;