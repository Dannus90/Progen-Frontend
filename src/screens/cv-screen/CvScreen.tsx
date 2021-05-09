import React, { useRef } from "react";
import { CvScreenClasses, CvTypes } from "./index";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import CvPrintComponent from "./cv-print-component/index";
import ReactToPrint from "react-to-print";
import { Button } from "@material-ui/core";
import { useTranslation } from "react-i18next";

interface Props {
  styles: ClassNameMap<CvScreenClasses>;
  cvVersion: CvTypes;
}

const HomeScreen: React.FC<Props> = ({ styles, cvVersion }): JSX.Element => {
  const { t } = useTranslation("common");
  const printComponentRef = useRef<HTMLDivElement>(null);
  const cvToPrint = () => {
    return (
      <Button className={styles.printButton} variant="contained" color="primary">
        {t("printCv.printCv")}
      </Button>
    );
  };

  return (
    <div className={styles.cvScreenWrapperStyles}>
      <ReactToPrint trigger={cvToPrint} content={() => printComponentRef.current} />
      <div ref={printComponentRef}>
        <CvPrintComponent cvVersion={cvVersion} />
      </div>
    </div>
  );
};

export default HomeScreen;
