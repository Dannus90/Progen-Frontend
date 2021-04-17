import counterReducer from "./example/exampleReducer";
import userDataReducer from "./user-data/userDataReducer";

export const rootReducer = {
  counter: counterReducer,
  userData: userDataReducer
};
