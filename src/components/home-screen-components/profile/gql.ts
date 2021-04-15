import { gql } from "@apollo/client";

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
      }
    }
  }
`;
