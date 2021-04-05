import { gql } from "@apollo/client";

export const REGISTER_USER = gql`
  mutation Mutation($registerUserInput: RegisterInput) {
    authentication {
      registerUser(input: $registerUserInput) {
        statusCode
        message
      }
    }
  }
`;
