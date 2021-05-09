export interface UpdateOtherInformationInput {
  drivingLicenseSv: string;
  drivingLicenseEn: string;
}

export interface OtherInformationResponse {
  otherInformation: {
    getOtherInformation: {
      statusCode: number;
      otherInformation: {
        id: string;
        userId: string;
        drivingLicenseSv: string;
        drivingLicenseEn: string;
        createdAt: string;
        updatedAt: string;
      };
    };
  };
}

export interface GetLanguageResponse {
  id: string;
  userId: string;
  languageSv: string;
  languageEn: string;
}

export interface GetLanguagesResponse {
  language: {
    getLanguages: {
      statusCode: number;
      languages: Array<GetLanguageResponse>;
    };
  };
}
