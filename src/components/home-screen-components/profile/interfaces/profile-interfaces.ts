export interface UserInformationResponse {
  userData: {
    getFullUserInformation: {
      user: {
        firstName: string;
        lastName: string;
        lastLogin: Date;
      };
      userData: {
        phoneNumber?: string;
        emailCv?: string;
        citySv?: string;
        cityEn?: string;
        countrySv?: string;
        countryEn?: string;
        profileImage?: string;
        updatedAt: Date;
        createdAt: Date;
      };
    };
  };
}
