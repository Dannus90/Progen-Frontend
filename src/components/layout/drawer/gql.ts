import { gql } from "@apollo/client";

export const LOGOUT_USER = gql`
  mutation Mutation {
    authentication {
      logoutUser {
        statusCode
        message
      }
    }
  }
`;
