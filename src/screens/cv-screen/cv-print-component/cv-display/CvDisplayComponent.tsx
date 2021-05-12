import React from "react";
import { CvDisplayComponentClasses } from "./index";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import { useTranslation } from "react-i18next";
import { CvLanguageBasedData } from "../interfaces/cv-print-component-interfaces";
import { Avatar, Container, Typography } from "@material-ui/core";

interface Props {
  styles: ClassNameMap<CvDisplayComponentClasses>;
  data: CvLanguageBasedData;
}

const HomeScreen: React.FC<Props> = ({ styles, data }): JSX.Element => {
  const { t } = useTranslation("common");

  const resolveProfileImage = (): string => {
    return data.fullUserInformation.profileImage
      ? data.fullUserInformation.profileImage
      : "./assets/images/personPlaceholder.png";
  };

  const resolveFullName = (): string => {
    return `${data.fullUserInformation.firstName} ${data.fullUserInformation.lastName}`;
  };

  // CV INSPIRATION: https://www.etsy.com/in-en/listing/663855223/minimalist-resume-template-for-word

  const resolveCityAndCountry = (): string => {
    if (!data.fullUserInformation.city && data.fullUserInformation.country)
      return `${data.fullUserInformation.country}`;
    if (data.fullUserInformation.city && !data.fullUserInformation.country)
      return `${data.fullUserInformation.city}`;
    if (data.fullUserInformation.city && data.fullUserInformation.country)
      return `${data.fullUserInformation.city}, ${data.fullUserInformation.country}`;

    return "";
  };

  return (
    <div className={styles.cvDisplayComponentWrapperStyles}>
      <Container className={styles.sideInformationWrapper}>
        <div className={styles.avatarWorkTitleWrapper}>
          <Avatar className={styles.sizeAvatar} src={resolveProfileImage()} />
          <div className={styles.fullNameWrapper}>
            <p className={styles.name}>{data.fullUserInformation.firstName}</p>
            <p className={styles.name}>{data.fullUserInformation.lastName}</p>
          </div>
          <Typography className={styles.workTitle}>{data.fullUserInformation.workTitle}</Typography>
        </div>
      </Container>
      <Container className={styles.mainContent}>Hej</Container>
    </div>
  );
};

export default HomeScreen;
