import { gql } from "@apollo/client";

export const CREATE_CERTIFICATE = gql`
  mutation UpdateCertificateMutation($createCertificateInput: CreateCertificateInput!) {
    certificate {
      createCertificate(input: $createCertificateInput) {
        certificateId
        statusCode
      }
    }
  }
`;

export const DELETE_CERTIFICATE = gql`
  mutation Mutation($deleteCertificateInput: DeleteCertificateInput!) {
    certificate {
      deleteCertificate(input: $deleteCertificateInput) {
        message
        statusCode
      }
    }
  }
`;

export const UPDATE_CERTIFICATE = gql`
  mutation UpdateCertificateMutation($updateCertificateInput: UpdateCertificateInput!) {
    certificate {
      updateCertificate(input: $updateCertificateInput) {
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
        statusCode
      }
    }
  }
`;
