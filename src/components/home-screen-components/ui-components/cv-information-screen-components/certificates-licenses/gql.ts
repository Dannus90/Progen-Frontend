import { gql } from "@apollo/client";

export const GET_CERTIFICATES_LICENSES = gql`
  query Query {
    certificate {
      getCertificates {
        statusCode
        certificate {
          id
          userId
          certificateNameSv
          certificateNameEn
          organisation
          identificationId
          referenceAddress
          dateIssued
          updatedAt
          createdAt
        }
      }
    }
  }
`;
