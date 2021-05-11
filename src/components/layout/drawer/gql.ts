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

export const GET_USERDATA = gql`
  query GetUserData {
    userData {
      getFullUserInformation {
        user {
          lastLogin
          lastName
          firstName
        }
        userData {
          profileImage
          workTitle
        }
      }
    }
  }
`;
