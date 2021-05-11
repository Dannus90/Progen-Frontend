import { gql } from "@apollo/client";

export const GET_FULL_CV_INFORMATION = gql`
  query Query {
    fullCvInformation {
      getFullCvInformation {
        fullUserInformation {
          id
          firstName
          lastName
          phoneNumber
          emailCv
          citySv
          cityEn
          countrySv
          countryEn
          workTitleSv
          workTitleEn
          profileImage
        }
        otherInformation {
          drivingLicenseSv
          drivingLicenseEn
        }
        educations {
          educationNameSv
          educationNameEn
          examNameSv
          examNameEn
          subjectAreaSv
          subjectAreaEn
          descriptionSv
          descriptionEn
          grade
          citySv
          cityEn
          countryEn
          countrySv
          dateStarted
          dateEnded
        }
        workExperiences {
          employmentRate
          companyName
          roleSv
          roleEn
          descriptionSv
          descriptionEn
          citySv
          cityEn
          countrySv
          countryEn
          dateStarted
          dateEnded
        }
        languages {
          languageSv
          languageEn
        }
        userPresentation {
          presentationSv
          presentationEn
        }
      }
    }
  }
`;
