export interface UpdateOtherInformationInput {
  drivingLicenseSv: string;
  drivingLicenseEn: string;
}

export interface OtherInformationResponse {
  otherInformatiion: {
    getOtherInformation: {
      statusCode: number;
      otherInformation: {
        id: string;
        userId: string;
        driverLicenseSv: string;
        driverLicenseEn: string;
        createdAt: string;
        updatedAt: string;
      };
    };
  };
}
