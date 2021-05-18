import { gql } from "@apollo/client";

export const DELETE_ACCOUNT = gql`
  mutation Mutation($deleteAccountInput: DeleteAccountInput) {
    authentication {
      deleteAccount(input: $deleteAccountInput) {
        statusCode
        message
      }
    }
  }
`;
