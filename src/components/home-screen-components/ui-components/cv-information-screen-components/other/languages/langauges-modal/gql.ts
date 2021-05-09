import { gql } from "@apollo/client";

export const CREATE_LANGUAGE = gql`
  mutation Mutation($createWorkExperienceInput: WorkExperienceInput!) {
    workExperience {
      createWorkExperience(input: $createWorkExperienceInput) {
        workExperienceId
        statusCode
      }
    }
  }
`;

export const DELETE_LANGUAGE = gql`
  mutation Mutation($deleteLanguageInput: DeleteLanguageInput!) {
    language {
      deleteLanguage(input: $deleteLanguageInput) {
        languageId
        statusCode
      }
    }
  }
`;

export const UPDATE_LANGUAGE = gql`
  mutation Mutation($updateLanguageInput: UpdateLanguageInput!) {
    language {
      updateLanguage(input: $updateLanguageInput) {
        languageId
        statusCode
      }
    }
  }
`;
