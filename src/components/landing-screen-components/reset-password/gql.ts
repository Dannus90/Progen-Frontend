import { gql } from "@apollo/client";

export const RESET_PASSWORD = gql`
  mutation Mutation($resetPasswordByTokenInput: ResetPasswordByTokenInput) {
    authentication {
      resetPasswordByToken(input: $resetPasswordByTokenInput) {
        message
        statusCode
      }
    }
  }
`;
