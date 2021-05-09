import { gql } from "@apollo/client";

export const CREATE_WORK_EXPERIENCE = gql`
  mutation Mutation($createLanguageInput: LanguageInput!) {
    language {
      createLanguage(input: $createLanguageInput) {
        languageId
        statusCode
      }
    }
  }
`;

export const DELETE_WORK_EXPERIENCE = gql`
  mutation Mutation($deleteWorkExperienceInput: DeleteWorkExperienceInput!) {
    workExperience {
      deleteWorkExperience(input: $deleteWorkExperienceInput) {
        workExperienceId
        statusCode
      }
    }
  }
`;

export const UPDATE_WORK_EXPERIENCE = gql`
  mutation Mutation($updateWorkExperienceInput: UpdateWorkExperienceInput!) {
    workExperience {
      updateWorkExperience(input: $updateWorkExperienceInput) {
        workExperience {
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
          statusCode
        }
      }
    }
  }
`;
