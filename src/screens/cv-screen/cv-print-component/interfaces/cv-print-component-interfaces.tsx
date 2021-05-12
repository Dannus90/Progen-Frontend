export interface GetFullCvInformationResponse {
  fullCvInformation: {
    getFullCvInformation: FullCvInformation;
  };
}

export interface FullCvInformation {
  educations: Array<Education | undefined>;
  workExperiences: Array<WorkExperience | undefined>;
  fullUserInformation: FullUserInformation;
  languages: Array<Language | undefined>;
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
  educations: Array<EducationData | undefined>;
  workExperiences: Array<WorkExperienceData | undefined>;
  fullUserInformation: FullUserInformationData;
  languages: Array<LanguageData | undefined>;
  otherInformation: OtherInformationData;
  userPresentation: UserPresentationData;
}

type EducationData = {
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

type WorkExperienceData = {
  city: string;
  companyName: string;
  country: string;
  description: string;
  employmentRate: string;
  role: string;
  dateEnded: Date | string;
};

type FullUserInformationData = {
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

type LanguageData = {
  language: string;
};

type OtherInformationData = {
  drivingLicense: string;
};

type UserPresentationData = {
  presentation: string;
};
