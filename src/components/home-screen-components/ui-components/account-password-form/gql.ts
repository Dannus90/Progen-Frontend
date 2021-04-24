import { gql } from "@apollo/client";

export const CHANGE_PASSWORD = gql`
  mutation Mutation($changePasswordInput: ChangePasswordInput) {
    authentication {
      changePassword(input: $changePasswordInput) {
        statusCode
        message
      }
    }
  }
`;
