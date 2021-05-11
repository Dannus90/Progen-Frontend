export interface LogoutUserResponseBackend {
  authentication: {
    refreshToken: {
      message: string;
      statusCode: number;
    };
  };
}

export interface PartialUserInformationResponse {
  userData: {
    getFullUserInformation: {
      user: {
        firstName: string;
        lastName: string;
        lastLogin: Date;
      };
      userData: {
        profileImage?: string;
        workTitle?: string;
      };
    };
  };
}
