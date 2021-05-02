import { gql } from "@apollo/client";

export const GET_EDUCATIONS = gql`
  query Query {
    education {
      getEducations {
        statusCode
        educations {
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
          createdAt
          updatedAt
        }
      }
    }
  }
`;
