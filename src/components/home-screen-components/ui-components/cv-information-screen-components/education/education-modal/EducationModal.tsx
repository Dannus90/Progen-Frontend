import React, { useMemo, useState } from "react";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import { EducationModalComponentClasses } from "./index";
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
  TextareaAutosize,
  TextField,
  Typography
} from "@material-ui/core";
import { getDateStandardFormat } from "../../../../../../utils/dates/date-helper";
import { useMutation } from "@apollo/client";
import { CREATE_EDUCATION, DELETE_EDUCATION, UPDATE_EDUCATION } from "./gql";
import { Alert } from "@material-ui/lab";
import { useAppDispatch } from "../../../../../../redux/hooks/hooks";
import {
  DeleteEducationInput,
  EditEducationData,
  EditEducationInput,
  EducationInput,
  EducationResponse
} from "../interfaces/education-interfaces";
import { useEducationForm } from "../../../../../../custom-hooks/UseEducationForm";
import { notifyEducationModified } from "../../../../../../redux/reducers/education/actions";

interface Props {
  styles: ClassNameMap<EducationModalComponentClasses>;
  isCreate: boolean;
  educationData?: EditEducationData;
  handleClose: () => void;
  open: boolean;
  header: string;
}

const initialFormState = {
  educationName: "",
  examName: "",
  subjectAreaSv: "",
  subjectAreaEn: "",
  grade: "",
  cityEn: "",
  citySv: "",
  countryEn: "",
  countrySv: "",
  descriptionSv: "",
  descriptionEn: "",
  dateEnded: null,
  dateStarted: getDateStandardFormat()
};

const EducationModal: React.FC<Props> = ({
  styles,
  isCreate,
  educationData,
  handleClose,
  open,
  header
}): JSX.Element => {
  const [t] = useTranslation("common");
  const [displayAlertMessage, setDisplayAlertMessage] = useState(false);
  const dispatch = useAppDispatch();

  const { formData, setFormData, handleInputChange } = useEducationForm(
    educationData
      ? {
          educationId: educationData.id,
          educationName: educationData.educationName,
          examName: educationData.examName,
          subjectAreaSv: educationData.subjectAreaSv,
          subjectAreaEn: educationData.subjectAreaEn,
          grade: educationData.grade,
          cityEn: educationData.cityEn,
          citySv: educationData.citySv,
          countryEn: educationData.countryEn,
          countrySv: educationData.countrySv,
          descriptionSv: educationData.descriptionSv,
          descriptionEn: educationData.descriptionEn,
          dateEnded: educationData.dateEnded,
          dateStarted: educationData.dateStarted
        }
      : {
          ...initialFormState
        }
  );

  const [createEducation, { loading: createLoading, error }] = useMutation<{
    createEducation: EducationResponse;
    createEducationInput: EducationInput;
  }>(CREATE_EDUCATION);

  const [deleteEducation, { loading: deleteLoading, error: deleteError }] = useMutation<{
    deleteEducation: EducationResponse;
    deleteEducationInput: DeleteEducationInput;
  }>(DELETE_EDUCATION);

  const [updateEducation, { loading: updateLoading, error: updateError }] = useMutation<{
    updateEducation: EditEducationData;
    updateEducationInput: EditEducationInput;
  }>(UPDATE_EDUCATION);

  const handleCreateEducation = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    try {
      createEducation({
        variables: {
          createEducationInput: {
            ...formData
          }
        }
      });

      dispatch(notifyEducationModified());

      setFormData({ ...initialFormState });

      handleClose();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteEducation = async (): Promise<void> => {
    try {
      deleteEducation({
        variables: {
          deleteEducationInput: {
            educationId: formData.educationId
          }
        }
      });

      dispatch(notifyEducationModified());

      handleClose();
    } catch (err) {
      console.error(err);
    }
  };

  const handleEditEducation = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    try {
      updateEducation({
        variables: {
          updateEducationInput: {
            ...formData
          }
        }
      });

      dispatch(notifyEducationModified());

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
      className={styles.educationModalWrapperStyles}
      open={open}
      onClose={handleClose}
      aria-labelledby="draggable-dialog-title">
      <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
        {header}
      </DialogTitle>
      <DialogContent>
        <form onSubmit={isCreate ? handleCreateEducation : handleEditEducation}>
          <Grid container spacing={3} className={styles.formStyle}>
            <Grid item xs={12} sm={12}>
              <TextField
                id="educationName"
                aria-describedby="form-data"
                name="educationName"
                value={formData.educationName}
                variant="outlined"
                onChange={handleInputChange}
                inputProps={{ style: { fontSize: 14 } }}
                InputLabelProps={{ style: { fontSize: 14 } }}
                label={t("educationForm.educationName")}
                autoFocus
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <Grid item xs={12} sm={12}>
                <TextField
                  id="examName"
                  aria-describedby="form-data"
                  name="examName"
                  value={formData.examName}
                  variant="outlined"
                  onChange={handleInputChange}
                  inputProps={{ style: { fontSize: 14 } }}
                  InputLabelProps={{ style: { fontSize: 14 } }}
                  label={t("educationForm.examName")}
                  autoFocus
                  size="small"
                  fullWidth
                />
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="subjectAreaSv"
                aria-describedby="form-data"
                name="subjectAreaSv"
                value={formData.subjectAreaSv}
                variant="outlined"
                onChange={handleInputChange}
                inputProps={{ style: { fontSize: 14 } }}
                InputLabelProps={{ style: { fontSize: 14 } }}
                label={t("educationForm.subjectAreaSv")}
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="subjectAreaEn"
                aria-describedby="form-data"
                name="subjectAreaEn"
                value={formData.subjectAreaEn}
                variant="outlined"
                onChange={handleInputChange}
                inputProps={{ style: { fontSize: 14 } }}
                InputLabelProps={{ style: { fontSize: 14 } }}
                label={t("educationForm.subjectAreaEn")}
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="grade"
                aria-describedby="form-data"
                name="grade"
                value={formData.grade}
                variant="outlined"
                onChange={handleInputChange}
                inputProps={{ style: { fontSize: 14 } }}
                InputLabelProps={{ style: { fontSize: 14 } }}
                label={t("educationForm.grade")}
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextareaAutosize
                className={styles.textAreaStyle}
                value={formData.descriptionSv ?? ""}
                onChange={handleInputChange}
                name="descriptionSv"
                aria-label="Presentation sv"
                placeholder={t("educationForm.descriptionSv")}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextareaAutosize
                className={styles.textAreaStyle}
                value={formData.descriptionEn ?? ""}
                onChange={handleInputChange}
                name="descriptionEn"
                aria-label="Presentation en"
                placeholder={t("educationForm.descriptionEn")}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="citySv"
                aria-describedby="form-data"
                name="citySv"
                value={formData.citySv}
                variant="outlined"
                onChange={handleInputChange}
                inputProps={{ style: { fontSize: 14 } }}
                InputLabelProps={{ style: { fontSize: 14 } }}
                label={t("educationForm.citySv")}
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="cityEn"
                aria-describedby="form-data"
                name="cityEn"
                value={formData.cityEn}
                variant="outlined"
                onChange={handleInputChange}
                inputProps={{ style: { fontSize: 14 } }}
                InputLabelProps={{ style: { fontSize: 14 } }}
                label={t("educationForm.cityEn")}
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="countrySv"
                aria-describedby="form-data"
                name="countrySv"
                value={formData.countrySv}
                variant="outlined"
                onChange={handleInputChange}
                inputProps={{ style: { fontSize: 14 } }}
                InputLabelProps={{ style: { fontSize: 14 } }}
                label={t("educationForm.countrySv")}
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="countryEn"
                aria-describedby="form-data"
                name="countryEn"
                value={formData.countryEn}
                variant="outlined"
                onChange={handleInputChange}
                inputProps={{ style: { fontSize: 14 } }}
                InputLabelProps={{ style: { fontSize: 14 } }}
                label={t("educationForm.countryEn")}
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="dateStarted"
                aria-describedby="form-data"
                name="dateStarted"
                type="date"
                value={formData.dateStarted}
                variant="outlined"
                onChange={handleInputChange}
                inputProps={{ style: { fontSize: 14 } }}
                InputLabelProps={{ style: { fontSize: 14 }, shrink: true }}
                label={t("educationForm.dateStarted")}
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="dateEnded"
                aria-describedby="form-data"
                name="dateEnded"
                type="date"
                value={formData.dateEnded}
                variant="outlined"
                onChange={handleInputChange}
                inputProps={{ style: { fontSize: 14 } }}
                InputLabelProps={{ style: { fontSize: 14 }, shrink: true }}
                label={t("educationForm.dateEnded")}
                size="small"
                fullWidth
              />
              <Typography className={styles.leaveEmpty}>{t("educationForm.leaveEmpty")}</Typography>
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
                t("educationForm.saveEducation")
              ) : (
                t("educationForm.updateEducation")
              )}
            </Button>
          </Container>
        </form>
      </DialogContent>
      <DialogActions className={isCreate ? styles.closeButtonWrapper : styles.buttonsContainer}>
        {!isCreate && !deleteLoading && (
          <Button autoFocus onClick={handleDeleteEducation} color="secondary">
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

export default EducationModal;
