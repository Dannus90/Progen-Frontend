import { gql } from "@apollo/client";

export const GET_EDUCATIONS = gql`
  query Query {
    education {
      getEducations {
        statusCode
        educations {
          id
          userId
          educationNameSv
          educationNameEn
          examNameSv
          examNameEn
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
          createdAt
          updatedAt
        }
      }
    }
  }
`;
