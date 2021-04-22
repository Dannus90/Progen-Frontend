import counterReducer from "./example/exampleReducer";
import generalReducer from "./user-data/generalReducer";
import userDataReducer from "./user-data/userDataReducer";

export const rootReducer = {
  counterState: counterReducer,
  userDataState: userDataReducer,
  generalState: generalReducer
};
