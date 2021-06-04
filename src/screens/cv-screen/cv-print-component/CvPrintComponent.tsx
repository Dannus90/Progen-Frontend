import React, { useEffect, useState } from "react";
import { CvPrintComponentClasses, CvTypes } from "./index";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import { Button, CircularProgress, Paper } from "@material-ui/core";
import { useQuery } from "@apollo/client";
import { GET_FULL_CV_INFORMATION } from "./gql";
import {
  CvLanguageBasedData,
  GetFullCvInformationResponse
} from "./interfaces/cv-print-component-interfaces";
import { getEnglishData, getSwedishData } from "./transformers";
import { Alert, AlertTitle } from "@material-ui/lab";
import { useTranslation } from "react-i18next";
import CvDisplay from "./cv-display/index";

interface Props {
  styles: ClassNameMap<CvPrintComponentClasses>;
  cvVersion: CvTypes;
}

const CvPrintComponent: React.FC<Props> = ({ styles, cvVersion }): JSX.Element => {
  const isSwedishCv = cvVersion === CvTypes.Swedish;
  const { t } = useTranslation("common");
  const { refetch, loading, error, data } =
    useQuery<GetFullCvInformationResponse>(GET_FULL_CV_INFORMATION);
  const [swedishData, setSwedishData] = useState<CvLanguageBasedData>();
  const [englishData, setEnglishData] = useState<CvLanguageBasedData>();

  useEffect(() => {
    if (data) {
      setSwedishData(getSwedishData(data));
      setEnglishData(getEnglishData(data));
    }
  }, [data]);

  if (loading) {
    return (
      <div className={styles.errorLoaderWrapper}>
        <CircularProgress size={100} />
      </div>
    );
  }

  if (!loading && error) {
    return (
      <div className={styles.errorLoaderWrapper}>
        <Alert
          className={`${styles.alertStyle}`}
          severity="error"
          action={
            <Button color="primary" variant="contained" size="small" onClick={() => refetch()}>
              {t("buttonText.tryAgain")}
            </Button>
          }>
          <AlertTitle>{t("fullCvInformation.loadFail")}</AlertTitle>
          {error &&
            error?.graphQLErrors.map(
              (err) => `${err.message}`
            )}
          {error &&
            error?.graphQLErrors.map(
              (err) => `${err.message}`
            )}
        </Alert>
      </div>
    );
  }

  return (
    <div className={styles.cvPrintComponentWrapperStyles}>
      <Paper className={styles.cvPaperWrapperStyles}>
        {isSwedishCv && swedishData && <CvDisplay data={swedishData} isSwedishCv={isSwedishCv} />}
        {!isSwedishCv && englishData && <CvDisplay data={englishData} isSwedishCv={isSwedishCv} />}
      </Paper>
    </div>
  );
};

export default CvPrintComponent;
