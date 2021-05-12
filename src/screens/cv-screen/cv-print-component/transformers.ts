import {
  EnglishData,
  GetFullCvInformationResponse,
  SwedishData
} from "./interfaces/cv-print-component-interfaces";

export const getSwedishData = (fullResponse: GetFullCvInformationResponse): SwedishData => {
  const data = fullResponse.fullCvInformation.getFullCvInformation;
  return {
    userPresentation: {
      presentationSv: data?.userPresentation.presentationSv ?? ""
    },
    educations: data
      ? data?.educations.map((ed) => {
          return {
            citySv: ed?.citySv ?? "",
            countrySv: ed?.countrySv ?? "",
            descriptionSv: ed?.descriptionSv ?? "",
            educationNameSv: ed?.educationNameSv ?? "",
            examNameSv: ed?.examNameSv ?? "",
            subjectAreaSv: ed?.subjectAreaSv ?? "",
            grade: ed?.grade ?? "",
            dateEnded: ed?.dateEnded ?? "",
            dateStarted: ed?.dateStarted ?? ""
          };
        })
      : [],
    fullUserInformation: {
      id: data?.fullUserInformation.id ?? "",
      firstName: data?.fullUserInformation.firstName ?? "",
      lastName: data?.fullUserInformation.lastName ?? "",
      citySv: data?.fullUserInformation.citySv ?? "",
      countrySv: data?.fullUserInformation.countrySv ?? "",
      emailCv: data?.fullUserInformation.emailCv ?? "",
      phoneNumber: data?.fullUserInformation.phoneNumber ?? "",
      profileImage: data?.fullUserInformation.profileImage ?? "",
      workTitleSv: data?.fullUserInformation.workTitleSv ?? ""
    },
    otherInformation: {
      drivingLicenseSv: data?.otherInformation.drivingLicenseSv ?? ""
    },
    languages: data
      ? data?.languages.map((lng) => {
          return {
            languageSv: lng?.languageSv ?? ""
          };
        })
      : [],
    workExperiences: data
      ? data.workExperiences.map((we) => {
          return {
            citySv: we?.citySv ?? "",
            companyName: we?.companyName ?? "",
            countrySv: we?.countrySv ?? "",
            descriptionSv: we?.descriptionSv ?? "",
            employmentRate: we?.employmentRate ?? "",
            roleSv: we?.roleSv ?? "",
            dateEnded: we?.dateEnded ?? "",
            dateStarted: we?.dateStarted ?? ""
          };
        })
      : []
  };
};

export const getEnglishData = (fullResponse: GetFullCvInformationResponse): EnglishData => {
  const data = fullResponse.fullCvInformation.getFullCvInformation;
  return {
    userPresentation: {
      presentationEn: data?.userPresentation.presentationEn ?? ""
    },
    educations: data
      ? data?.educations.map((ed) => {
          return {
            cityEn: ed?.cityEn ?? "",
            countryEn: ed?.countryEn ?? "",
            descriptionEn: ed?.descriptionEn ?? "",
            educationNameEn: ed?.educationNameEn ?? "",
            examNameEn: ed?.examNameEn ?? "",
            subjectAreaEn: ed?.subjectAreaEn ?? "",
            grade: ed?.grade ?? "",
            dateEnded: ed?.dateEnded ?? "",
            dateStarted: ed?.dateStarted ?? ""
          };
        })
      : [],
    fullUserInformation: {
      id: data?.fullUserInformation.id ?? "",
      firstName: data?.fullUserInformation.firstName ?? "",
      lastName: data?.fullUserInformation.lastName ?? "",
      cityEn: data?.fullUserInformation.cityEn ?? "",
      countryEn: data?.fullUserInformation.countryEn ?? "",
      emailCv: data?.fullUserInformation.emailCv ?? "",
      phoneNumber: data?.fullUserInformation.phoneNumber ?? "",
      profileImage: data?.fullUserInformation.profileImage ?? "",
      workTitleEn: data?.fullUserInformation.workTitleEn ?? ""
    },
    otherInformation: {
      drivingLicenseEn: data?.otherInformation.drivingLicenseEn ?? ""
    },
    languages: data
      ? data?.languages.map((lng) => {
          return {
            languageEn: lng?.languageEn ?? ""
          };
        })
      : [],
    workExperiences: data
      ? data.workExperiences.map((we) => {
          return {
            cityEn: we?.cityEn ?? "",
            companyName: we?.companyName ?? "",
            countryEn: we?.countryEn ?? "",
            descriptionEn: we?.descriptionEn ?? "",
            employmentRate: we?.employmentRate ?? "",
            roleEn: we?.roleEn ?? "",
            dateEnded: we?.dateEnded ?? "",
            dateStarted: we?.dateStarted ?? ""
          };
        })
      : []
  };
};
