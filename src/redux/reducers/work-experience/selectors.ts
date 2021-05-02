import { RootState } from "../../store";

export const dataAddedOrDeleted = (state: RootState): boolean =>
  state.workExperience.workExperienceModified;
