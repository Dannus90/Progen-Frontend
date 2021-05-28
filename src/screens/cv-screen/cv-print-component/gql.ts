import { gql } from "@apollo/client";

export const GET_FULL_CV_INFORMATION = gql`
  query Query {
    fullCvInformation {
      getFullCvInformation {
        fullUserInformation {
          firstName
          id
          lastName
          phoneNumber
          emailCv
          citySv
          cityEn
          countrySv
          countryEn
          addressZipCode
          profileImage
          workTitleSv
          workTitleEn
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
          cityEn
          citySv
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
        userSkillsAndSkills {
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
        certificates {
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
