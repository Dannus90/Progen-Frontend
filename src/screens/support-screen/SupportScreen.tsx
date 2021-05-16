import React, { useState } from "react";
import { SupportScreenClasses } from "./index";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import { Container, Paper, Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import DraggableModal from "../../components/common/modals/DraggableModal";

interface Props {
  styles: ClassNameMap<SupportScreenClasses>;
}

const SupportScreen: React.FC<Props> = ({ styles }): JSX.Element => {
  const { t } = useTranslation("support");
  const [modalAgreementOpen, setModalAgreementOpen] = useState(false);
  const [modalPrivacyPolicyOpen, setHandlePrivacyPolicyModalOpen] = useState(false);

  const handleAgreementModalOpen = (): void => {
    setModalAgreementOpen(true);
  };

  const handleAgreementModalClose = (): void => {
    setModalAgreementOpen(false);
  };

  const handlePrivacyPolicyModalOpen = (): void => {
    setHandlePrivacyPolicyModalOpen(true);
  };

  const handlePrivacyPolicyModalClose = (): void => {
    setHandlePrivacyPolicyModalOpen(false);
  };

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
          <Typography className={styles.faqQuestion}>{t("faq.q1")}</Typography>
          <span
            className={`${styles.agreementButton}`}
            role="button"
            tabIndex={-1}
            onClick={() => handleAgreementModalOpen()}
            onKeyDown={() => handleAgreementModalOpen()}>
            {t("faq.a1part1")}
          </span>{" "}
          <span
            className={`${styles.agreementButton}`}
            role="button"
            tabIndex={-1}
            onClick={() => handlePrivacyPolicyModalOpen()}
            onKeyDown={() => handlePrivacyPolicyModalOpen()}>
            {t("faq.a1part2")}
          </span>
          <Typography className={styles.faqQuestion}>{t("faq.q2")}</Typography>
          <Typography className={styles.faqAnswer}>{t("faq.a2")}</Typography>
          <Typography className={styles.faqQuestion}>{t("faq.q3")}</Typography>
          <Typography className={styles.faqAnswer}>{t("faq.a3")}</Typography>
        </Container>
        <DraggableModal
          header={t("register:form.modalText.agreementModal.header")}
          p1={t("register:form.modalText.agreementModal.p1")}
          q1={t("register:form.modalText.policyModal.q2")}
          p2={t("register:form.modalText.policyModal.p2")}
          q2={t("register:form.modalText.policyModal.q2")}
          p3={t("register:form.modalText.policyModal.p3")}
          p4={t("register:form.modalText.policyModal.p4")}
          q3={t("register:form.modalText.policyModal.q3")}
          p5={t("register:form.modalText.policyModal.p5")}
          q4={t("register:form.modalText.policyModal.q4")}
          p6={t("register:form.modalText.policyModal.p6")}
          p7={t("register:form.modalText.policyModal.p7")}
          handleClose={handleAgreementModalClose}
          open={modalAgreementOpen}
        />
        <DraggableModal
          header={t("register:form.modalText.policyModal.header")}
          p1={t("register:form.modalText.policyModal.p1")}
          q1={t("register:form.modalText.policyModal.q2")}
          p2={t("register:form.modalText.policyModal.p2")}
          q2={t("register:form.modalText.policyModal.q2")}
          p3={t("register:form.modalText.policyModal.p3")}
          p4={t("register:form.modalText.policyModal.p4")}
          q3={t("register:form.modalText.policyModal.q3")}
          p5={t("register:form.modalText.policyModal.p5")}
          q4={t("register:form.modalText.policyModal.q4")}
          p6={t("register:form.modalText.policyModal.p6")}
          p7={t("register:form.modalText.policyModal.p7")}
          handleClose={handlePrivacyPolicyModalClose}
          open={modalPrivacyPolicyOpen}
        />
      </Paper>
    </div>
  );
};

export default SupportScreen;
