import { AnyAction, Reducer } from "redux";
import certificateLicensesReducer, {
  CertificateLicenseState
} from "./certificates-licenses/certificateLicensesReducer";
import educationReducer, { EducationState } from "./education/educationReducer";
import generalReducer, { GeneralState } from "./general-reducer/generalReducer";
import otherInformationReducer, {
  OtherInformationState
} from "./other-information/otherInformationReducer";
import skillsReducer, { SkillsState } from "./skills/skillsReducer";
import userDataReducer, { UserDataState } from "./user-data/userDataReducer";
import workExperienceReducer, {
  WorkExperienceState
} from "./work-experience/workExperienceReducer";

interface RootReducer {
  userDataState: Reducer<UserDataState, AnyAction>;
  generalState: Reducer<GeneralState, AnyAction>;
  workExperienceState: Reducer<WorkExperienceState, AnyAction>;
  educationState: Reducer<EducationState, AnyAction>;
  otherInformationState: Reducer<OtherInformationState, AnyAction>;
  certificateLicenseState: Reducer<CertificateLicenseState, AnyAction>;
  skillState: Reducer<SkillsState, AnyAction>;
}

export const rootReducer: RootReducer = {
  userDataState: userDataReducer,
  generalState: generalReducer,
  workExperienceState: workExperienceReducer,
  educationState: educationReducer,
  otherInformationState: otherInformationReducer,
  certificateLicenseState: certificateLicensesReducer,
  skillState: skillsReducer
};
