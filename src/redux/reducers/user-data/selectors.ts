export const selectFullName = (state: RootState): string =>
  `${state.userDataState.firstName} ${state.userDataState.lastName}`;

export const selectUserData = (state: RootState): UserDataState => state.userDataState;
