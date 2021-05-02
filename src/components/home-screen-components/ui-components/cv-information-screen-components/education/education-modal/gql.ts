import { gql } from "@apollo/client";

export const CREATE_EDUCATION = gql`
  mutation Mutation($createEducationInput: CreateEducationInput!) {
    education {
      createEducation(input: $createEducationInput) {
        educationId
        statusCode
      }
    }
  }
`;

export const DELETE_EDUCATION = gql`
  mutation Mutation($deleteEducationInput: DeleteEducationInput!) {
    education {
      deleteEducation(input: $deleteEducationInput) {
        educationId
        statusCode
      }
    }
  }
`;

export const UPDATE_EDUCATION = gql`
  mutation Mutation($updateEducationInput: UpdateEducationInput!) {
    education {
      updateEducation(input: $updateEducationInput) {
        statusCode
        education {
          id
          userId
          educationName
          examName
          subjectAreaSv
          subjectAreaEn
          descriptionSv
          descriptionEn
          grade
          citySv
          cityEn
          countrySv
          countryEn
          dateStarted
          dateEnded
        }
      }
    }
  }
`;
