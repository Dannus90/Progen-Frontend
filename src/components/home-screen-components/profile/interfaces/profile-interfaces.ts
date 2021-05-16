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
        zipCode?: string;
        profileImage?: string;
        profileImagePublicId?: string;
        workTitleSv?: string;
        workTitleEn?: string;
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
    zipCode: string | null;
    createdAt: Date;
    emailCv: string | null;
    id: string;
    phoneNumber: string | null;
    profileImage: string | null;
    profileImagePublicId: string | null;
    workTitleSv: string | null;
    workTitleEn: string | null;
    statusCode: number;
    updatedAt: Date;
    userId: string;
  };
}
