import { gql } from "@apollo/client";

export const CREATE_WORK_EXPERIENCE = gql`
  mutation Mutation($createWorkExperienceInput: WorkExperienceInput!) {
    workExperience {
      createWorkExperience(input: $createWorkExperienceInput) {
        workExperienceId
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
