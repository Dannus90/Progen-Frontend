import { gql } from "@apollo/client";

export const GET_LANGUAGES = gql`
  query Query {
    language {
      getLanguages {
        languages {
          id
          userId
          languageSv
          languageEn
        }
        statusCode
      }
    }
  }
`;
