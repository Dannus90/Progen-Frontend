import React from "react";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import { CertificatesLicensesComponentClasses } from "./index";

interface Props {
  styles: ClassNameMap<CertificatesLicensesComponentClasses>;
}

const CertificatesLicensesComponent: React.FC<Props> = ({ styles }): JSX.Element => {
  return (
    <div className={styles.certificatesLicensesWrapperStyles}>
      CERTIFICATES AND LICENSES - NOT IMPLEMENTED
    </div>
  );
};

export default CertificatesLicensesComponent;
