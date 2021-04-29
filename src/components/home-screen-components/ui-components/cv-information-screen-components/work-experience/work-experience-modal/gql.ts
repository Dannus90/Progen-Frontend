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
