import { RootState } from "../../store";

export const certificateLicenseAddedOrDeleted = (state: RootState): boolean =>
  state.certificateLicenseState.certificateLicenseModified;
