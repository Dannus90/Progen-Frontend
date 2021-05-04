import { RootState } from "../../store";

export const educationDataAddedOrDeleted = (state: RootState): boolean =>
  state.educationState.educationModified;
