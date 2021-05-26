import React, { useState } from "react";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import { CertificateLicenseDisplayComponentClasses } from "./index";
import { Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { transformDate } from "../../../../../../utils/dates/date-helper";
import EditIcon from "@material-ui/icons/Edit";
import {
  EditCertificateLicenseData,
  GetCertificateResponse
} from "../interfaces/certificate-licenses-interfaces";
import CertificateLicenseModal from "../certificate-license-modal/index";

interface Props {
  styles: ClassNameMap<CertificateLicenseDisplayComponentClasses>;
  certificateLicenseData: GetCertificateResponse;
}

const CertificateLicenseDisplayComponent: React.FC<Props> = ({
  styles,
  certificateLicenseData
}): JSX.Element => {
  const [t, i18n] = useTranslation("cvInformation");
  const [editModalOpen, setEditModalOpen] = useState<boolean>(false);

  const certificateNameSv = certificateLicenseData.certificateNameSv;
  const certificateNameEn = certificateLicenseData.certificateNameEn;
  const identificationId = certificateLicenseData.identificationId;
  const organisation = certificateLicenseData.organisation;
  const referenceAddress = certificateLicenseData.referenceAddress;

  const resolveDate = (): string => {
    if (certificateLicenseData.dateIssued === "0001-01-01T00:00:00") {
      const lng = i18n.language;

      return `$${lng === "sv" ? "Inte satt" : "Not set"}`;
    }

    return `${transformDate(certificateLicenseData.dateIssued)}`;
  };

  const handleEditModalClose = () => {
    setEditModalOpen(false);
  };

  const editData = { ...certificateLicenseData };
  editData.dateIssued = transformDate(editData.dateIssued);

  return (
    <div className={styles.certificateLicenseDisplayWrapperStyles}>
      <div className={styles.certificateLicenseContainer}>
        <Typography className={styles.versionHeader}>
          {t("certificateLicenseDisplay.swedishVersion")}
        </Typography>
        <div className={styles.headingIconWrapper}>
          <Typography className={styles.certificateName}>{certificateNameSv}</Typography>
        </div>
        <Typography className={styles.information}>
          {t("certificateLicenseDisplay.organisation")}: {organisation}
        </Typography>

        <Typography className={styles.information}>
          {t("certificateLicenseDisplay.referenceAddress")}: {referenceAddress}
        </Typography>

        <Typography className={styles.information}>
          {t("certificateLicenseDisplay.identificationId")}: {identificationId}
        </Typography>

        <Typography className={styles.date}>
          {t("certificateLicenseDisplay.dateIssued")}: {resolveDate()}
        </Typography>
      </div>
      <div className={styles.certificateLicenseContainer}>
        <div className={styles.headingIconWrapper}>
          <Typography className={styles.versionHeader}>
            {t("certificateLicenseDisplay.englishVersion")}
          </Typography>
          <EditIcon
            color="action"
            className={styles.editIcon}
            onClick={() => setEditModalOpen(true)}
          />
        </div>
        <Typography className={styles.certificateName}>{certificateNameEn}</Typography>
        <Typography className={styles.information}>
          {t("certificateLicenseDisplay.organisation")}: {organisation}
        </Typography>

        <Typography className={styles.information}>
          {t("certificateLicenseDisplay.referenceAddress")}: {referenceAddress}
        </Typography>

        <Typography className={styles.information}>
          {t("certificateLicenseDisplay.identificationId")}: {identificationId}
        </Typography>

        <Typography className={styles.date}>
          {t("certificateLicenseDisplay.dateIssued")}: {resolveDate()}
        </Typography>
        <CertificateLicenseModal
          isCreate={false}
          handleClose={handleEditModalClose}
          open={editModalOpen}
          header={t("certificate.modal.edit")}
          certificateLicense={editData as EditCertificateLicenseData}
        />
      </div>
    </div>
  );
};

export default CertificateLicenseDisplayComponent;
