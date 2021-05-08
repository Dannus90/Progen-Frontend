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
