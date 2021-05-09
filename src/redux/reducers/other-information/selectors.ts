import { RootState } from "../../store";

export const languageDataAddedOrDeleted = (state: RootState): boolean =>
  state.otherInformationState.languageModified;
