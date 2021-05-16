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
          zipCode
          profileImage
          profileImagePublicId
          workTitleSv
          workTitleEn
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
        zipCode
        profileImage
        profileImagePublicId
        workTitleSv
        workTitleEn
        createdAt
        updatedAt
        statusCode
      }
    }
  }
`;
