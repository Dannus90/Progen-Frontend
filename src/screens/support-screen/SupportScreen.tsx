import React from "react";
import { SupportScreenClasses } from "./index";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import { Container, Paper, Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";

interface Props {
  styles: ClassNameMap<SupportScreenClasses>;
}

const SupportScreen: React.FC<Props> = ({ styles }): JSX.Element => {
  const { t } = useTranslation("support");

  return (
    <div className={styles.pageWrapperStyles}>
      <Paper className={styles.supportContainer}>
        <Container className={styles.howToUseContactInfo}>
          <div className={styles.howToUse}>
            <Typography className={styles.howToUseHeader}>{t("howToUse.header")}</Typography>
            <Typography className={styles.howToUseP1}>{t("howToUse.p1")}</Typography>
            <br />
            <Typography className={styles.howToUseP2}>{t("howToUse.p2")}</Typography>
          </div>
          <div className={styles.contactInfo}>
            <Typography className={styles.contactHeader}>{t("contact.header")}</Typography>
            <div className={styles.iconContactContainer}>
              <EmailIcon className={styles.iconStyle} />
              <Typography className={styles.contactInfoPart}>
                {"persson.daniel.1990@gmail.com"}
              </Typography>
            </div>
            <div className={styles.iconContactContainer}>
              <PhoneIcon className={styles.iconStyle} />
              <Typography className={styles.contactInfoPart}>{"073-3249826"}</Typography>
            </div>
          </div>
        </Container>
        <Container className={styles.faqContainer}>
          <Typography className={styles.faqHeader}>{t("faq.header")}</Typography>
        </Container>
      </Paper>
    </div>
  );
};

export default SupportScreen;
