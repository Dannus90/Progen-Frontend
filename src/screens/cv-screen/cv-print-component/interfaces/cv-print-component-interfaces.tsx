export interface GetFullCvInformationResponse {
  fullCvInformation: {
    getFullCvInformation: FullCvInformation;
  };
}

export interface FullCvInformation {
  educations: Array<Education>;
  workExperiences: Array<WorkExperience>;
  fullUserInformation: FullUserInformation;
  languages: Array<Language>;
  otherInformation: OtherInformation;
  userPresentation: UserPresentation;
}

type Education = {
  cityEn: string;
  citySv: string;
  countrySv: string;
  countryEn: string;
  descriptionSv: string;
  descriptionEn: string;
  educationNameSv: string;
  educationNameEn: string;
  examNameSv: string;
  examNameEn: string;
  grade: string;
  subjectAreaSv: string;
  subjectAreaEn: string;
  dateStarted: Date | string;
  dateEnded: Date | string;
};

type WorkExperience = {
  citySv: string;
  cityEn: string;
  companyName: string;
  countrySv: string;
  countryEn: string;
  descriptionSv: string;
  descriptionEn: string;
  employmentRate: string;
  roleEn: string;
  roleSv: string;
  dateStarted: Date | string;
  dateEnded: Date | string;
};

type FullUserInformation = {
  cityEn: string;
  citySv: string;
  countryEn: string;
  countrySv: string;
  emailCv: string;
  firstName: string;
  lastName: string;
  id: string;
  phoneNumber: string;
  profileImage: string;
  workTitleSv: string;
  workTitleEn: string;
};

type Language = {
  languageSv: string;
  languageEn: string;
};

type OtherInformation = {
  drivingLicenseSv: string;
  drivingLicenseEn: string;
};

type UserPresentation = {
  presentationSv: string;
  presentationEn: string;
};

export interface CvLanguageBasedData {
  educations: Array<EducationData>;
  workExperiences: Array<WorkExperienceData>;
  fullUserInformation: FullUserInformationData;
  languages: Array<LanguageData>;
  otherInformation: OtherInformationData;
  userPresentation: UserPresentationData;
}

export type EducationData = {
  city: string;
  country: string;
  description: string;
  educationName: string;
  examName: string;
  grade: string;
  subjectArea: string;
  dateStarted: Date | string;
  dateEnded: Date | string;
};

export type WorkExperienceData = {
  city: string;
  companyName: string;
  country: string;
  description: string;
  employmentRate: string;
  role: string;
  dateStarted: Date | string;
  dateEnded: Date | string;
};

export type FullUserInformationData = {
  city: string;
  country: string;
  emailCv: string;
  firstName: string;
  lastName: string;
  id: string;
  phoneNumber: string;
  profileImage: string;
  workTitle: string;
};

export type LanguageData = {
  language: string;
};

export type OtherInformationData = {
  drivingLicense: string;
};

export type UserPresentationData = {
  presentation: string;
};
