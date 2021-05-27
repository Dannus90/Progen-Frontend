import { gql } from "@apollo/client";

export const DELETE_USERSKILL = gql`
  mutation SkillMutation($deleteUserSkillInput: DeleteUserSkillInput!) {
    userSkill {
      deleteUserSkill(input: $deleteUserSkillInput) {
        message
        statusCode
      }
    }
  }
`;
