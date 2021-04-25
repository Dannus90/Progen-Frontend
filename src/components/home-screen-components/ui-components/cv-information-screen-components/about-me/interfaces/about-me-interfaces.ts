export interface UserPresentationResponse {
  userPresentation: {
    getUserPresentation: {
      statusCode: number;
      userPresentation: {
        id: string;
        userId: string;
        presentationSv: string;
        presentationEn: string;
        createdAt: string;
        updatedAt: string;
      };
    };
  };
}

export interface UpdateUserPresentationInput {
  id: string;
  presentationSv: string;
  presentationEn: string;
}
