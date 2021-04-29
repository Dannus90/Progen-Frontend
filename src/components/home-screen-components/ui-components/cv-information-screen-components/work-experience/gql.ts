import { gql } from "@apollo/client";

export const GET_WORK_EXPERIENCES = gql`
  query Query {
    workExperience {
      getWorkExperiences {
        statusCode
        workExperiences {
          id
          userId
          employmentRate
          companyName
          roleSv
          roleEn
          descriptionSv
          descriptionEn
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
