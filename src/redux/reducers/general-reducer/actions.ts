export const { accountClicked, profileClicked } = generalSlice.actions;
export const accountIsClicked = (state: RootState): boolean => state.generalState.accountClicked;
export const profileIsClicked = (state: RootState): boolean => state.generalState.profileClicked;