import { gql } from "@apollo/client";

export const GET_OTHER_INFORMATION = gql`
  query Query {
    otherInformation {
      getOtherInformation {
        otherInformation {
          id
          userId
          drivingLicenseSv
          drivingLicenseEn
          createdAt
          updatedAt
        }
        statusCode
      }
    }
  }
`;

export const UPDATE_OTHER_INFORMATION = gql`
  mutation Mutation($updateOtherInformationInput: OtherInformationInput!) {
    otherInformation {
      updateOtherInformation(input: $updateOtherInformationInput) {
        otherInformation {
          drivingLicenseEn
          drivingLicenseSv
          userId
          id
          createdAt
          updatedAt
        }
        statusCode
      }
    }
  }
`;
