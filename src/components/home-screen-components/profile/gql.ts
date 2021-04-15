import { gql } from "@apollo/client";

export const GET_USERDATA = gql`
  query GetUserData {
    userData {
      getFullUserInformation {
        user {
          id
          email
          lastLogin
          lastName
          firstName
          createdAt
          updatedAt
        }
        userData {
          id
          userId
          phoneNumber
          emailCv
          citySv
          cityEn
          countrySv
          countryEn
          profileImage
          updatedAt
          createdAt
        }
        statusCode
      }
    }
  }
`;
