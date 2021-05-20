import { gql } from "@apollo/client";

export const REQUEST_RESET_PASSWORD = gql`
  mutation AuthenticationMutation(
    $requestPasswordResetByEmailInput: RequestPasswordResetByEmailInput
  ) {
    authentication {
      requestPasswordResetByEmail(input: $requestPasswordResetByEmailInput) {
        message
        statusCode
      }
    }
  }
`;
