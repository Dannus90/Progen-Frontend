import { RootState } from "../../store";

export const workExperiencedataAddedOrDeleted = (state: RootState): boolean =>
  state.workExperienceState.workExperienceModified;
