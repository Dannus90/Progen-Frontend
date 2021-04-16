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

export interface UpdateUserResponse {
  updateUserData: {
    firstName: string | null;
    lastName: string | null;
    cityEn: string | null;
    citySv: string | null;
    countryEn: string | null;
    countrySv: string | null;
    createdAt: Date;
    emailCv: string | null;
    id: string;
    phoneNumber: "testmail123@gmail.com";
    profileImage: string | null;
    statusCode: number;
    updatedAt: Date;
    userId: string;
  };
}
