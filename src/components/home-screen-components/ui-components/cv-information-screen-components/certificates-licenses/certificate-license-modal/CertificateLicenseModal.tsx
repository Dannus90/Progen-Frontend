import React, { useMemo, useState } from "react";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import { useTranslation } from "react-i18next";
import {
  Button,
  CircularProgress,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  makeStyles,
  TextField
} from "@material-ui/core";
import { useMutation } from "@apollo/client";
import { CREATE_CERTIFICATE, DELETE_CERTIFICATE, UPDATE_CERTIFICATE } from "./gql";
import { Alert } from "@material-ui/lab";
import { useAppDispatch } from "../../../../../../redux/hooks/hooks";
import {
  CreateCertificateInput,
  CreateCertificateResponse,
  DeleteCertificateInput,
  DeleteCertificateResponse,
  EditCertificateLicenseData,
  UpdateCertificateInput,
  UpdateCertificateResponse
} from "../interfaces/certificate-licenses-interfaces";
import { useCertificateLicenseForm } from "../../../../../../custom-hooks/UseCertificateForm";
import { CertificateLicenseModalComponentClasses } from ".";
import { notifyCertificateLicenseModified } from "../../../../../../redux/reducers/certificates-licenses/actions";
import { getDateStandardFormat } from "../../../../../../utils/dates/date-helper";

interface Props {
  styles: ClassNameMap<CertificateLicenseModalComponentClasses>;
  isCreate: boolean;
  certificateLicense?: EditCertificateLicenseData;
  handleClose: () => void;
  open: boolean;
  header: string;
}

const initialFormState = {
  id: "",
  certificateNameEn: "",
  certificateNameSv: "",
  organisation: "",
  identificationId: "",
  referenceAddress: "",
  dateIssued: getDateStandardFormat()
};

const useStyles = makeStyles({
  root: {
    padding: "0.6rem 1.2rem"
  }
});

const CertificateLicenseModal: React.FC<Props> = ({
  styles,
  isCreate,
  certificateLicense,
  handleClose,
  open,
  header
}): JSX.Element => {
  const [t] = useTranslation("common");
  const [displayAlertMessage, setDisplayAlertMessage] = useState(false);
  const dispatch = useAppDispatch();

  const { formData, setFormData, handleInputChange } = useCertificateLicenseForm(
    certificateLicense
      ? {
          id: certificateLicense.id,
          certificateNameEn: certificateLicense.certificateNameEn,
          certificateNameSv: certificateLicense.certificateNameSv,
          organisation: certificateLicense.organisation,
          identificationId: certificateLicense.identificationId,
          referenceAddress: certificateLicense.referenceAddress,
          dateIssued: certificateLicense.dateIssued
        }
      : {
          ...initialFormState
        }
  );

  const [createCertificate, { loading: createLoading, error }] =
    useMutation<{
      createCertificate: CreateCertificateResponse;
      createCertificateInput: CreateCertificateInput;
    }>(CREATE_CERTIFICATE);

  const [deleteCertificate, { loading: deleteLoading, error: deleteError }] =
    useMutation<{
      deleteCertificate: DeleteCertificateResponse;
      deleteCertificateInput: DeleteCertificateInput;
    }>(DELETE_CERTIFICATE);

  const [updateCertificate, { loading: updateLoading, error: updateError }] =
    useMutation<{
      updateCertificate: UpdateCertificateResponse;
      updateCertificateInput: UpdateCertificateInput;
    }>(UPDATE_CERTIFICATE);

  const handleCreateCertificateLicense = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    try {
      await createCertificate({
        variables: {
          createCertificateInput: {
            ...formData
          }
        }
      });

      dispatch(notifyCertificateLicenseModified());

      setFormData({ ...initialFormState });

      handleClose();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteCertificate = async (): Promise<void> => {
    try {
      await deleteCertificate({
        variables: {
          deleteCertificateInput: {
            certificateId: formData.id
          }
        }
      });

      dispatch(notifyCertificateLicenseModified());

      handleClose();
    } catch (err) {
      console.error(err);
    }
  };

  const handleEditCertificate = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    try {
      await updateCertificate({
        variables: {
          updateCertificateInput: {
            ...formData
          }
        }
      });

      dispatch(notifyCertificateLicenseModified());

      handleClose();
    } catch (err) {
      console.error(err);
    }
  };

  const removeAlertDisplay = (): void => {
    setDisplayAlertMessage(false);
  };

  useMemo(() => {
    if (error || updateError || deleteError) {
      setDisplayAlertMessage(true);
    }
  }, [error, updateError, deleteError]);

  return (
    <Dialog
      className={styles.certificateLicenseModalWrapperStyles}
      open={open}
      onClose={handleClose}
      aria-labelledby="draggable-dialog-title">
      <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
        {header}
      </DialogTitle>
      <DialogContent>
        <form onSubmit={isCreate ? handleCreateCertificateLicense : handleEditCertificate}>
          <Grid container spacing={3} className={styles.formStyle}>
            <Grid item xs={12} sm={6}>
              <TextField
                id="certificateNameSv"
                aria-describedby="form-data"
                name="certificateNameSv"
                value={formData.certificateNameSv}
                variant="outlined"
                onChange={handleInputChange}
                inputProps={{ style: { fontSize: 14 } }}
                InputLabelProps={{ style: { fontSize: 14 } }}
                label={t("certificateLicenseForm.certificateNameSv")}
                autoFocus
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="certificateNameEn"
                aria-describedby="form-data"
                name="certificateNameEn"
                value={formData.certificateNameEn}
                variant="outlined"
                onChange={handleInputChange}
                inputProps={{ style: { fontSize: 14 } }}
                InputLabelProps={{ style: { fontSize: 14 } }}
                label={t("certificateLicenseForm.certificateNameEn")}
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="organisation"
                aria-describedby="form-data"
                name="organisation"
                value={formData.organisation}
                variant="outlined"
                onChange={handleInputChange}
                inputProps={{ style: { fontSize: 14 } }}
                InputLabelProps={{ style: { fontSize: 14 } }}
                label={t("certificateLicenseForm.organisation")}
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="referenceAddress"
                aria-describedby="form-data"
                name="referenceAddress"
                value={formData.referenceAddress}
                variant="outlined"
                onChange={handleInputChange}
                inputProps={{ style: { fontSize: 14 } }}
                InputLabelProps={{ style: { fontSize: 14 } }}
                label={t("certificateLicenseForm.referenceAddress")}
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="dateIssued"
                aria-describedby="form-data"
                name="dateIssued"
                type="date"
                value={formData.dateIssued}
                variant="outlined"
                onChange={handleInputChange}
                inputProps={{ style: { fontSize: 14 } }}
                InputLabelProps={{ style: { fontSize: 14 }, shrink: true }}
                label={t("certificateLicenseForm.dateIssued")}
                size="small"
                fullWidth
              />
            </Grid>
          </Grid>
          {error && displayAlertMessage && (
            <Alert
              className={`${styles.alertStyle}`}
              onClose={() => removeAlertDisplay()}
              severity="error">
              {error?.graphQLErrors.map(
                (err) => `${err.extensions?.exception.statusCode} ${error?.message}`
              )}
            </Alert>
          )}
          {deleteError && displayAlertMessage && (
            <Alert
              className={`${styles.alertStyle}`}
              onClose={() => removeAlertDisplay()}
              severity="error">
              {deleteError?.graphQLErrors.map(
                (err) => `${err.extensions?.exception.statusCode} ${error?.message}`
              )}
            </Alert>
          )}
          {updateError && displayAlertMessage && (
            <Alert
              className={`${styles.alertStyle}`}
              onClose={() => removeAlertDisplay()}
              severity="error">
              {updateError?.graphQLErrors.map(
                (err) => `${err.extensions?.exception.statusCode} ${error?.message}`
              )}
            </Alert>
          )}
          <Container className={styles.submitButtonWrapper}>
            <Button
              type="submit"
              color="primary"
              variant="contained"
              className={styles.submitButton}>
              {createLoading || updateLoading ? (
                <CircularProgress size={21} color="inherit" />
              ) : isCreate ? (
                t("certificateLicenseForm.saveCertificateLicense")
              ) : (
                t("certificateLicenseForm.saveCertificateLicense")
              )}
            </Button>
          </Container>
        </form>
      </DialogContent>
      <DialogActions className={isCreate ? styles.closeButtonWrapper : styles.buttonsContainer}>
        {!isCreate && !deleteLoading && (
          <Button autoFocus onClick={handleDeleteCertificate} color="secondary">
            {t("buttonText.delete")}
          </Button>
        )}
        {!isCreate && deleteLoading && (
          <CircularProgress size={21} color="inherit" style={{ marginLeft: "5px" }} />
        )}
        <Button autoFocus onClick={handleClose} color="secondary">
          {t("buttonText.close")}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CertificateLicenseModal;
