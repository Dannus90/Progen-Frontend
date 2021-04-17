import counterReducer from "./example/exampleReducer";
import userDataReducer from "./user-data/userDataReducer";

export const rootReducer = {
  counterState: counterReducer,
  userDataState: userDataReducer
};
