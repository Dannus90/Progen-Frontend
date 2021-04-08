import { gql } from "@apollo/client";

export const GET_REFRESH_TOKEN = gql`
  mutation Mutation($refreshTokenInput: RefreshTokenInput) {
    authentication {
      refreshToken(input: $refreshTokenInput) {
        statusCode
        accessToken
        refreshToken
      }
    }
  }
`;
