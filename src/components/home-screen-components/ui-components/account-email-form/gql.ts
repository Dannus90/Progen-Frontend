import { gql } from "@apollo/client";

export const CHANGE_EMAIL = gql`
  mutation Mutation($changeEmailInput: ChangeEmailInput) {
    authentication {
      changeEmail(input: $changeEmailInput) {
        statusCode
        message
      }
    }
  }
`;
