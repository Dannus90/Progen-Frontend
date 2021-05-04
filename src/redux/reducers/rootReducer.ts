import educationReducer from "./education/educationReducer";
import counterReducer from "./example/exampleReducer";
import generalReducer from "./general-reducer/generalReducer";
import userDataReducer from "./user-data/userDataReducer";
import workExperienceReducer from "./work-experience/workExperienceReducer";

export const rootReducer = {
  counterState: counterReducer,
  userDataState: userDataReducer,
  generalState: generalReducer,
  workExperienceState: workExperienceReducer,
  educationState: educationReducer
};
