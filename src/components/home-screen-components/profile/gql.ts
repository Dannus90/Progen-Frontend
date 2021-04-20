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
          profileImagePublicId
          updatedAt
          createdAt
        }
      }
    }
  }
`;

export const UPDATE_USERDATA = gql`
  mutation Mutation($updateUserDataInput: UserDataInput) {
    userData {
      updateUserData(input: $updateUserDataInput) {
        id
        userId
        firstName
        lastName
        phoneNumber
        emailCv
        citySv
        cityEn
        countryEn
        countrySv
        profileImage
        profileImagePublicId
        createdAt
        updatedAt
        statusCode
      }
    }
  }
`;
