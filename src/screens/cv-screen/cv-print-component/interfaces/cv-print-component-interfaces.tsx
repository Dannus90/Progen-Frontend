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

export interface SwedishData {
  educations: Array<EducationSv | undefined>;
  workExperiences: Array<WorkExperienceSv | undefined>;
  fullUserInformation: FullUserInformationSv;
  languages: Array<LanguageSv | undefined>;
  otherInformation: OtherInformationSv;
  userPresentation: UserPresentationSv;
}

export interface EnglishData {
  educations: Array<EducationEn | undefined>;
  workExperiences: Array<WorkExperienceEn | undefined>;
  fullUserInformation: FullUserInformationEn;
  languages: Array<LanguageEn | undefined>;
  otherInformation: OtherInformationEn;
  userPresentation: UserPresentationEn;
}

type EducationSv = {
  citySv: string;
  countrySv: string;
  descriptionSv: string;
  educationNameSv: string;
  examNameSv: string;
  grade: string;
  subjectAreaSv: string;
  dateStarted: Date | string;
  dateEnded: Date | string;
};

type WorkExperienceSv = {
  citySv: string;
  companyName: string;
  countrySv: string;
  descriptionSv: string;
  employmentRate: string;
  roleSv: string;
  dateStarted: Date | string;
  dateEnded: Date | string;
};

type FullUserInformationSv = {
  citySv: string;
  countrySv: string;
  emailCv: string;
  firstName: string;
  lastName: string;
  id: string;
  phoneNumber: string;
  profileImage: string;
  workTitleSv: string;
};

type LanguageSv = {
  languageSv: string;
};

type OtherInformationSv = {
  drivingLicenseSv: string;
};

type UserPresentationSv = {
  presentationSv: string;
};

type EducationEn = {
  cityEn: string;
  countryEn: string;
  descriptionEn: string;
  educationNameEn: string;
  examNameEn: string;
  grade: string;
  subjectAreaEn: string;
  dateStarted: Date | string;
  dateEnded: Date | string;
};

type WorkExperienceEn = {
  cityEn: string;
  companyName: string;
  countryEn: string;
  descriptionEn: string;
  employmentRate: string;
  roleEn: string;
  dateStarted: Date | string;
  dateEnded: Date | string;
};

type FullUserInformationEn = {
  cityEn: string;
  countryEn: string;
  emailCv: string;
  firstName: string;
  lastName: string;
  id: string;
  phoneNumber: string;
  profileImage: string;
  workTitleEn: string;
};

type LanguageEn = {
  languageEn: string;
};

type OtherInformationEn = {
  drivingLicenseEn: string;
};

type UserPresentationEn = {
  presentationEn: string;
};
