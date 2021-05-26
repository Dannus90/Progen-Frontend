import { gql } from "@apollo/client";

export const GET_SKILLS = gql`
  query Query {
    skill {
      getSkills {
        skills {
          id
          skillName
        }
        statusCode
      }
    }
  }
`;

export const GET_USER_SKILLS = gql`
  query Query {
    userSkill {
      getUserSkills {
        statusCode
        userSkills {
          skill {
            id
            skillName
          }
          userSkill {
            id
            userId
            skillId
            skillLevel
          }
        }
      }
    }
  }
`;
