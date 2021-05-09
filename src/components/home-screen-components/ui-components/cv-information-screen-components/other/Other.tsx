import React, { useMemo, useState } from "react";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import { OtherComponentClasses } from "./index";
import {
  Button,
  CircularProgress,
  Container,
  TextareaAutosize,
  Typography
} from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { UseOtherInformationForm } from "../../../../../custom-hooks/UseOtherInformationForm";
import { Alert } from "@material-ui/lab";
import { useMutation, useQuery } from "@apollo/client";
import { GET_OTHER_INFORMATION, UPDATE_OTHER_INFORMATION } from "./gql";
import Languages from "./languages/index";
import {
  OtherInformationResponse,
  UpdateOtherInformationInput
} from "./interfaces/other-information-interfaces";

interface Props {
  styles: ClassNameMap<OtherComponentClasses>;
}

interface OtherInformationFormState {
  id: string;
  drivingLicenseSv: string;
  drivingLicenseEn: string;
}

const initialFormState: OtherInformationFormState = {
  id: "",
  drivingLicenseSv: "",
  drivingLicenseEn: ""
};

const OtherComponent: React.FC<Props> = ({ styles }): JSX.Element => {
  const [t] = useTranslation("cvInformation");
  const [displayAlertMessage, setDisplayAlertMessage] = useState(false);
  const { setFormData, formData, handleInputChange } = UseOtherInformationForm({
    ...initialFormState
  });
  const { error, data } = useQuery<OtherInformationResponse>(GET_OTHER_INFORMATION);
  const [
    updateOtherInformation,
    { loading: userPresentationLoading, error: updateError }
  ] = useMutation<{
    otherInformation: OtherInformationResponse;
    otherInformationInput: UpdateOtherInformationInput;
  }>(UPDATE_OTHER_INFORMATION);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    try {
      await updateOtherInformation({
        variables: {
          updateOtherInformationInput: {
            drivingLicenseSv: formData.drivingLicenseSv,
            drivingLicenseEn: formData.drivingLicenseEn
          }
        }
      });
      setDisplayAlertMessage(true);

      setTimeout((): void => {
        setDisplayAlertMessage(false);
      }, 3000);
    } catch (err) {
      setDisplayAlertMessage(true);
      console.error(err.message);
    }
  };

  const removeAlertDisplay = (): void => {
    setDisplayAlertMessage(false);
  };

  const clearSwedishFormFields = (): void => {
    setFormData({ ...formData, drivingLicenseSv: "" });
  };

  const clearEnglishFormFields = (): void => {
    setFormData({ ...formData, drivingLicenseEn: "" });
  };

  useMemo(() => {
    const otherInformation = data?.otherInformation.getOtherInformation.otherInformation;
    setFormData({
      id: otherInformation?.id,
      drivingLicenseEn: otherInformation?.drivingLicenseEn,
      drivingLicenseSv: otherInformation?.drivingLicenseSv
    });
  }, [data]);

  return (
    <div className={styles.otherWrapperStyles}>
      <Container className={styles.mainHeaderContainer}>
        <Typography className={styles.mainHeader}>{t("otherInformation.mainHeader")}</Typography>
      </Container>
      <form className={styles.formStyle} onSubmit={handleSubmit}>
        <Container className={styles.formContainerWrapper}>
          <Container className={styles.drivingLicenseTextContainer}>
            <Typography className={styles.drivingLicenseHeader}>
              {t("otherInformation.drivingLicensesSv")}
            </Typography>
            <TextareaAutosize
              className={styles.textAreaStyle}
              value={formData.drivingLicenseSv}
              onChange={handleInputChange}
              name="drivingLicenseSv"
              aria-label="Driving licenses sv"
              placeholder={t("otherInformation.drivingLicensesSv")}
            />
            <Button
              size="small"
              className={styles.cardButtonClearStyles}
              variant="contained"
              color="secondary"
              onClick={() => clearSwedishFormFields()}>
              {t("otherInformation.clearDrivingLicenseFields")}
            </Button>
          </Container>
          <Container className={styles.drivingLicenseTextContainer}>
            <Typography className={styles.drivingLicenseHeader}>
              {t("otherInformation.drivingLicensesEn")}
            </Typography>
            <TextareaAutosize
              className={styles.textAreaStyle}
              value={formData.drivingLicenseEn}
              onChange={handleInputChange}
              name="drivingLicenseEn"
              aria-label="Driving licenses en"
              placeholder={t("otherInformation.drivingLicensesEn")}
            />
            <Button
              size="small"
              className={styles.cardButtonClearStyles}
              variant="contained"
              color="secondary"
              onClick={() => clearEnglishFormFields()}>
              {t("otherInformation.clearDrivingLicenseFields")}
            </Button>
          </Container>
        </Container>
        {displayAlertMessage && data && (
          <Alert
            className={`${styles.alertStyle}`}
            onClose={() => removeAlertDisplay()}
            severity="success">
            {t("otherInformation.successfulUpdate")}
          </Alert>
        )}
        {displayAlertMessage && error && (
          <Alert
            className={`${styles.alertStyle}`}
            onClose={() => removeAlertDisplay()}
            severity="error">
            {error?.graphQLErrors.map(
              (err) => `${err.extensions?.exception.statusCode} ${error?.message}`
            )}
          </Alert>
        )}
        {displayAlertMessage && updateError && (
          <Alert
            className={`${styles.alertStyle}`}
            onClose={() => removeAlertDisplay()}
            severity="error">
            {updateError?.graphQLErrors.map(
              (err) => `${err.extensions?.exception.statusCode} ${error?.message}`
            )}
          </Alert>
        )}
        <Button
          size="small"
          color="primary"
          className={styles.cardButtonSubmitStyles}
          type="submit"
          variant="contained">
          {userPresentationLoading ? (
            <CircularProgress size={20} color="inherit" />
          ) : (
            t("otherInformation.submit")
          )}
        </Button>
      </form>
      <Languages />
    </div>
  );
};

export default OtherComponent;
