import React, { useCallback, useMemo } from "react";
import { CvDisplayComponentClasses } from "./index";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import { useTranslation } from "react-i18next";
import { CvLanguageBasedData } from "../interfaces/cv-print-component-interfaces";
import { Avatar, Container, Typography } from "@material-ui/core";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import WorkExperienceCvComponent from "./work-experience-cv-component/index";
import EducationCvComponent from "./education-cv-component/index";
import CertificateCvComponent from "./certificate-cv-component/index";
import UserSkillsCvComponent from "./user-skills-cv-component/index";

interface Props {
  styles: ClassNameMap<CvDisplayComponentClasses>;
  data: CvLanguageBasedData;
  isSwedishCv: boolean;
}

const CvDisplayComponent: React.FC<Props> = ({ styles, data, isSwedishCv }): JSX.Element => {
  const { t } = useTranslation("common");

  const resolveProfileImage = (): string => {
    return data.fullUserInformation.profileImage
      ? data.fullUserInformation.profileImage
      : "./assets/images/personPlaceholder.png";
  };

  // CV INSPIRATION: https://www.etsy.com/in-en/listing/663855223/minimalist-resume-template-for-word

  const resolveCityAndCountry = useCallback((): string => {
    if (
      data.fullUserInformation.addressZipCode &&
      data.fullUserInformation.city &&
      data.fullUserInformation.country
    )
      return `${data.fullUserInformation.addressZipCode}, ${data.fullUserInformation.city}, ${data.fullUserInformation.country}`;
    if (
      data.fullUserInformation.addressZipCode &&
      data.fullUserInformation.city &&
      !data.fullUserInformation.country
    )
      return `${data.fullUserInformation.addressZipCode}, ${data.fullUserInformation.city}`;
    if (
      data.fullUserInformation.addressZipCode &&
      !data.fullUserInformation.city &&
      data.fullUserInformation.country
    )
      return `${data.fullUserInformation.addressZipCode}, ${data.fullUserInformation.country}`;
    if (!data.fullUserInformation.city && data.fullUserInformation.country)
      return `${data.fullUserInformation.country}`;
    if (data.fullUserInformation.city && !data.fullUserInformation.country)
      return `${data.fullUserInformation.city}`;
    if (data.fullUserInformation.city && data.fullUserInformation.country)
      return `${data.fullUserInformation.city}, ${data.fullUserInformation.country}`;

    return "";
  }, [data]);

  const sortedWorkExperiences = useMemo(() => {
    return data.workExperiences.sort((a, b) => {
      if (a.dateStarted > b.dateStarted) return -1;
      if (a.dateStarted === b.dateStarted) return 0;

      return 1;
    });
  }, [data.workExperiences]);

  const sortedEducations = useMemo(() => {
    return data.educations.sort((a, b) => {
      if (a.dateStarted > b.dateStarted) return -1;
      if (a.dateStarted === b.dateStarted) return 0;

      return 1;
    });
  }, [data.educations]);

  const sortedCertificates = useMemo(() => {
    return data.certificates.sort((a, b) => {
      if (a.dateIssued > b.dateIssued) return -1;
      if (a.dateIssued === b.dateIssued) return 0;

      return 1;
    });
  }, [data.certificates]);

  const userSkills = data.userSkillsAndSkills;

  return (
    <div className={styles.cvDisplayComponentWrapperStyles}>
      <Container className={styles.sideInformationContainer}>
        <div className={styles.avatarWorkTitleContainer}>
          <Avatar className={styles.sizeAvatar} src={resolveProfileImage()} />
          <div className={styles.fullNameContainer}>
            <p className={styles.name}>{data.fullUserInformation.firstName}</p>
            <p className={styles.name}>{data.fullUserInformation.lastName}</p>
          </div>
          <Typography className={styles.workTitle}>{data.fullUserInformation.workTitle}</Typography>
        </div>
        <div className={styles.userPresentationContainer}>
          <Typography className={styles.userPresentationText}>
            {data.userPresentation.presentation}
          </Typography>
        </div>
        <div className={styles.contactInformationContainer}>
          <Typography className={styles.contactInformationHeader}>
            {t("fullCvInformation.generateCv.contact")}
          </Typography>
          {data.fullUserInformation.phoneNumber && (
            <div className={styles.iconContactContainer}>
              <PhoneIcon className={styles.iconStyle} />
              <Typography className={styles.contactInfo}>
                {data.fullUserInformation.phoneNumber}
              </Typography>
            </div>
          )}
          {data.fullUserInformation.emailCv && (
            <div className={styles.iconContactContainer}>
              <EmailIcon className={styles.iconStyle} />
              <Typography className={styles.contactInfo}>
                {data.fullUserInformation.emailCv}
              </Typography>
            </div>
          )}
          {(data.fullUserInformation.country || data.fullUserInformation.city) && (
            <div className={styles.iconContactContainer}>
              <LocationOnIcon className={styles.iconStyle} />
              <Typography className={styles.contactInfo}>{resolveCityAndCountry()}</Typography>
            </div>
          )}
        </div>
      </Container>
      <Container className={styles.mainContent}>
        {data.workExperiences.length > 0 && (
          <div className={styles.workExperienceWrapper}>
            <Typography className={styles.workExperienceHeader}>
              {isSwedishCv ? "Arbetslivserfarenhet".toUpperCase() : "Work experience".toUpperCase()}
            </Typography>
            {sortedWorkExperiences.map((we, index) => (
              <WorkExperienceCvComponent
                isSwedishCv={isSwedishCv}
                workExperienceData={we}
                key={index}
              />
            ))}
          </div>
        )}
        {data.educations.length > 0 && (
          <div className={styles.educationsContainer}>
            {sortedEducations.map((ed, index) => (
              <EducationCvComponent
                isFirstCvComponent={index === 0}
                isSwedishCv={isSwedishCv}
                educationData={ed}
                key={index}
              />
            ))}
          </div>
        )}
        {data.certificates.length > 0 && (
          <div className={styles.certificatesContainer}>
            {sortedCertificates.map((sc, index) => (
              <CertificateCvComponent
                isFirstCvComponent={index === 0}
                certificateData={sc}
                key={index}
                isSwedishCv={isSwedishCv}
              />
            ))}
          </div>
        )}
        {data.userSkillsAndSkills.length > 0 && (
          <div className={styles.userSkillsAndSkillsContainer}>
            <UserSkillsCvComponent isSwedishCv={isSwedishCv} userSkillsData={userSkills} />
          </div>
        )}
        {(data.languages.length || data.otherInformation.drivingLicense) && (
          <div className={styles.otherInformationContainer}>
            <Typography className={styles.educationHeader}>
              {isSwedishCv ? "??vrig information".toUpperCase() : "Other information".toUpperCase()}
            </Typography>
            {data.languages.length && (
              <div className={styles.languagesContainer}>
                <Typography className={styles.languagesHeader}>
                  {isSwedishCv ? "Spr??k".toUpperCase() : "Languages".toUpperCase()}
                </Typography>
                <ul className={styles.languageList}>
                  {data.languages.map((lng, index) => (
                    <li key={`${lng}-${index}`}>{lng.language}</li>
                  ))}
                </ul>
              </div>
            )}
            {data.otherInformation.drivingLicense && (
              <div className={styles.driverLicenseWrapper}>
                <Typography className={styles.drivingLicencesHeader}>
                  {isSwedishCv ? "K??rkort".toUpperCase() : "Driving licences".toUpperCase()}
                </Typography>
                <p>{data.otherInformation.drivingLicense}</p>
              </div>
            )}
          </div>
        )}
      </Container>
    </div>
  );
};

export default CvDisplayComponent;
