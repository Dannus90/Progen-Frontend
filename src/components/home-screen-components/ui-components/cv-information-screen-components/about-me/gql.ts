import { gql } from "@apollo/client";

export const GET_USER_PRESENTATION = gql`
  query Query {
    userPresentation {
      getUserPresentation {
        userPresentation {
          userId
          id
          presentationSv
          presentationEn
          createdAt
          updatedAt
        }
        statusCode
      }
    }
  }
`;

export const UPDATE_USER_PRESENTATION = gql`
  mutation Mutation($updateUserPresentationInput: UserPresentationInput) {
    userPresentation {
      updateUserPresentation(input: $updateUserPresentationInput) {
        statusCode
        userPresentation {
          updatedAt
          createdAt
          presentationEn
          presentationSv
          userId
          id
        }
      }
    }
  }
`;
