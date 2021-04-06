import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation Mutation($loginUserInput: LoginInput) {
    authentication {
      loginUser(input: $loginUserInput) {
        statusCode
        accessToken
        refreshToken
      }
    }
  }
`;
