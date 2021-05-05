import educationReducer from "./education/educationReducer";
import generalReducer from "./general-reducer/generalReducer";
import userDataReducer from "./user-data/userDataReducer";
import workExperienceReducer from "./work-experience/workExperienceReducer";

export const rootReducer = {
  userDataState: userDataReducer,
  generalState: generalReducer,
  workExperienceState: workExperienceReducer,
  educationState: educationReducer
};
