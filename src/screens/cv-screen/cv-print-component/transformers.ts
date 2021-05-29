import {
  CvLanguageBasedData,
  GetFullCvInformationResponse
} from "./interfaces/cv-print-component-interfaces";

export const getSwedishData = (fullResponse: GetFullCvInformationResponse): CvLanguageBasedData => {
  const data = fullResponse.fullCvInformation.getFullCvInformation;
  return {
    userPresentation: {
      presentation: data?.userPresentation.presentationSv ?? ""
    },
    educations: data
      ? data?.educations.map((ed) => {
          return {
            city: ed?.citySv ?? "",
            country: ed?.countrySv ?? "",
            description: ed?.descriptionSv ?? "",
            educationName: ed?.educationNameSv ?? "",
            examName: ed?.examNameSv ?? "",
            subjectArea: ed?.subjectAreaSv ?? "",
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
      city: data?.fullUserInformation.citySv ?? "",
      country: data?.fullUserInformation.countrySv ?? "",
      emailCv: data?.fullUserInformation.emailCv ?? "",
      addressZipCode: data?.fullUserInformation.addressZipCode ?? "",
      phoneNumber: data?.fullUserInformation.phoneNumber ?? "",
      profileImage: data?.fullUserInformation.profileImage ?? "",
      workTitle: data?.fullUserInformation.workTitleSv ?? ""
    },
    otherInformation: {
      drivingLicense: data?.otherInformation.drivingLicenseSv ?? ""
    },
    languages: data
      ? data?.languages.map((lng) => {
          return {
            language: lng?.languageSv ?? ""
          };
        })
      : [],
    workExperiences: data
      ? data.workExperiences.map((we) => {
          return {
            city: we?.citySv ?? "",
            companyName: we?.companyName ?? "",
            country: we?.countrySv ?? "",
            description: we?.descriptionSv ?? "",
            employmentRate: we?.employmentRate ?? "",
            role: we?.roleSv ?? "",
            dateEnded: we?.dateEnded ?? "",
            dateStarted: we?.dateStarted ?? ""
          };
        })
      : [],
    certificates: data
      ? data.certificates.map((c) => {
          return {
            certificateName: c.certificateNameSv ?? "",
            dateIssued: c.dateIssued ?? "",
            id: c.id ?? "",
            identificationId: c.identificationId ?? "",
            organisation: c.organisation ?? "",
            referenceAddress: c.referenceAddress ?? "",
            userId: c.userId ?? ""
          };
        })
      : [],
    userSkillsAndSkills: data ? data.userSkillsAndSkills : []
  };
};

export const getEnglishData = (fullResponse: GetFullCvInformationResponse): CvLanguageBasedData => {
  const data = fullResponse.fullCvInformation.getFullCvInformation;
  return {
    userPresentation: {
      presentation: data?.userPresentation.presentationEn ?? ""
    },
    educations: data
      ? data?.educations.map((ed) => {
          return {
            city: ed?.cityEn ?? "",
            country: ed?.countryEn ?? "",
            description: ed?.descriptionEn ?? "",
            educationName: ed?.educationNameEn ?? "",
            examName: ed?.examNameEn ?? "",
            subjectArea: ed?.subjectAreaEn ?? "",
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
      city: data?.fullUserInformation.cityEn ?? "",
      country: data?.fullUserInformation.countryEn ?? "",
      addressZipCode: data?.fullUserInformation.addressZipCode ?? "",
      emailCv: data?.fullUserInformation.emailCv ?? "",
      phoneNumber: data?.fullUserInformation.phoneNumber ?? "",
      profileImage: data?.fullUserInformation.profileImage ?? "",
      workTitle: data?.fullUserInformation.workTitleEn ?? ""
    },
    otherInformation: {
      drivingLicense: data?.otherInformation.drivingLicenseEn ?? ""
    },
    languages: data
      ? data?.languages.map((lng) => {
          return {
            language: lng?.languageEn ?? ""
          };
        })
      : [],
    workExperiences: data
      ? data.workExperiences.map((we) => {
          return {
            city: we?.cityEn ?? "",
            companyName: we?.companyName ?? "",
            country: we?.countryEn ?? "",
            description: we?.descriptionEn ?? "",
            employmentRate: we?.employmentRate ?? "",
            role: we?.roleEn ?? "",
            dateEnded: we?.dateEnded ?? "",
            dateStarted: we?.dateStarted ?? ""
          };
        })
      : [],
    certificates: data
      ? data.certificates.map((c) => {
          return {
            certificateName: c.certificateNameEn ?? "",
            dateIssued: c.dateIssued ?? "",
            id: c.id ?? "",
            identificationId: c.identificationId ?? "",
            organisation: c.organisation ?? "",
            referenceAddress: c.referenceAddress ?? "",
            userId: c.userId ?? ""
          };
        })
      : [],
    userSkillsAndSkills: data ? data.userSkillsAndSkills : []
  };
};
