import { gql } from "@apollo/client";

export const UPDATE_USERSKILL = gql`
  mutation SkillMutation($updateUserSkillInput: UpdateUserSkillInput!) {
    userSkill {
      updateUserSkill(input: $updateUserSkillInput) {
        userSkillId
        statusCode
      }
    }
  }
`;
