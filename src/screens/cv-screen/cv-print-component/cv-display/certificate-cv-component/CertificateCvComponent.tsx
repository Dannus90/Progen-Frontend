import React from "react";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import { Typography } from "@material-ui/core";
import { CertificateData } from "../../interfaces/cv-print-component-interfaces";
import { CertificateCvComponentClasses } from ".";
import { transformDate } from "../../../../../utils/dates/date-helper";

interface Props {
  styles: ClassNameMap<CertificateCvComponentClasses>;
  certificateData: CertificateData;
  isSwedishCv: boolean;
}

const CertificateDisplayComponent: React.FC<Props> = ({
  styles,
  certificateData,
  isSwedishCv
}): JSX.Element => {
  const certificateName = certificateData.certificateName;
  const referenceAddress = certificateData.referenceAddress;
  const organisation = certificateData.organisation;
  const identificationId = certificateData.identificationId;

  const resolveDate = (): string => {
    if (certificateData.dateIssued === "0001-01-01T00:00:00") {
      return "";
    }

    return transformDate(`${transformDate(certificateData.dateIssued)}`);
  };

  return (
    <div className={styles.certificateCvComponentWrapperStyles}>
      <div className={styles.certificateContainer}>
        <div className={styles.headingWrapper}>
          <Typography className={styles.certificate}>{certificateName}</Typography>
        </div>
        <Typography className={styles.organisation}>{organisation}</Typography>
        <Typography className={styles.referenceAddress}>{referenceAddress}</Typography>
        <Typography className={styles.date}>
          {isSwedishCv ? "Utfärdat: " : "Issued: "}
          {resolveDate()}
        </Typography>
        <Typography className={styles.identificationId}>
          {isSwedishCv ? "Legitimerings-ID: " : "Identification ID: "}
          {identificationId}
        </Typography>
      </div>
    </div>
  );
};

export default CertificateDisplayComponent;
