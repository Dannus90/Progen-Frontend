import { RootState } from "../../store";

export const skillDataAddedOrDeleted = (state: RootState): boolean =>
  state.skillState.skillModified;
