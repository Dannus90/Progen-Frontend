import React, { useMemo, useState } from "react";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import { WorkExperienceModalComponentClasses } from "./index";
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
  MenuItem,
  TextareaAutosize,
  TextField,
  Typography
} from "@material-ui/core";
import {
  EditWorkExperienceData,
  WorkExperienceInput,
  WorkExperienceResponse
} from "../interfaces/work-experience-interfaces";
import { useWorkExperienceForm } from "../../../../../../custom-hooks/UseWorkExperienceForm";
import Select from "@material-ui/core/Select";
import { getDateStandardFormat } from "../../../../../../utils/dates/date-helper";
import { useMutation } from "@apollo/client";
import { CREATE_WORK_EXPERIENCE } from "./gql";
import { Alert } from "@material-ui/lab";

interface Props {
  styles: ClassNameMap<WorkExperienceModalComponentClasses>;
  isCreate: boolean;
  workExperience?: EditWorkExperienceData;
  handleClose: () => void;
  open: boolean;
  header: string;
}

const WorkExperienceModal: React.FC<Props> = ({
  styles,
  isCreate,
  workExperience,
  handleClose,
  open,
  header
}): JSX.Element => {
  const [t] = useTranslation("common");
  const [displayAlertMessage, setDisplayAlertMessage] = useState(false);

  const { formData, handleInputChange } = useWorkExperienceForm(
    workExperience ?? {
      companyName: "",
      cityEn: "",
      citySv: "",
      countryEn: "",
      countrySv: "",
      descriptionSv: "",
      descriptionEn: "",
      roleSv: "",
      roleEn: "",
      employmentRate: "",
      dateEnded: null,
      dateStarted: null
    }
  );

  const [createWorkExperience, { data: createData, loading: createLoading, error }] = useMutation<{
    userData: WorkExperienceResponse;
    createWorkExperienceInput: WorkExperienceInput;
  }>(CREATE_WORK_EXPERIENCE);

  const handleCreateWorkExperience = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    try {
      createWorkExperience({
        variables: {
          createWorkExperienceInput: {
            ...formData
          }
        }
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleEditWorkExperience = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
  };

  const removeAlertDisplay = (): void => {
    setDisplayAlertMessage(false);
  };

  useMemo(() => {
    if (error) {
      setDisplayAlertMessage(true);
    }
  }, [error]);

  return (
    <Dialog
      className={styles.workExperienceModalWrapperStyles}
      open={open}
      onClose={handleClose}
      aria-labelledby="draggable-dialog-title">
      <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
        {header}
      </DialogTitle>
      <DialogContent>
        <form onSubmit={isCreate ? handleCreateWorkExperience : handleEditWorkExperience}>
          <Grid container spacing={3} className={styles.formStyle}>
            <Grid item xs={12} sm={12}>
              <TextField
                id="companyName"
                aria-describedby="form-data"
                name="companyName"
                value={formData.companyName}
                variant="outlined"
                onChange={handleInputChange}
                inputProps={{ style: { fontSize: 14 } }}
                InputLabelProps={{ style: { fontSize: 14 } }}
                label={t("workExperienceForm.companyName")}
                autoFocus
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <Select
                labelId="employmentRate"
                id="employmentRate"
                name="employmentRate"
                className={styles.selectStyle}
                value={formData.employmentRate}
                label={t("workExperienceForm.employmentRate.header")}
                onChange={handleInputChange}>
                <MenuItem value={"FullTime"}>
                  {t("workExperienceForm.employmentRate.fullTime")}
                </MenuItem>
                <MenuItem value={"PartTime"}>
                  {t("workExperienceForm.employmentRate.partTime")}
                </MenuItem>
                <MenuItem value={"Internship"}>
                  {t("workExperienceForm.employmentRate.internShip")}
                </MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="roleSv"
                aria-describedby="form-data"
                name="roleSv"
                value={formData.roleSv}
                variant="outlined"
                onChange={handleInputChange}
                inputProps={{ style: { fontSize: 14 } }}
                InputLabelProps={{ style: { fontSize: 14 } }}
                label={t("workExperienceForm.roleSv")}
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="roleEn"
                aria-describedby="form-data"
                name="roleEn"
                value={formData.roleEn}
                variant="outlined"
                onChange={handleInputChange}
                inputProps={{ style: { fontSize: 14 } }}
                InputLabelProps={{ style: { fontSize: 14 } }}
                label={t("workExperienceForm.roleEn")}
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
                placeholder={t("workExperienceForm.descriptionSv")}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextareaAutosize
                className={styles.textAreaStyle}
                value={formData.descriptionEn ?? ""}
                onChange={handleInputChange}
                name="descriptionEn"
                aria-label="Presentation en"
                placeholder={t("workExperienceForm.descriptionEn")}
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
                label={t("workExperienceForm.citySv")}
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
                label={t("workExperienceForm.cityEn")}
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
                label={t("workExperienceForm.countrySv")}
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
                label={t("workExperienceForm.countryEn")}
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
                defaultValue={getDateStandardFormat()}
                value={formData.dateStarted}
                variant="outlined"
                onChange={handleInputChange}
                inputProps={{ style: { fontSize: 14 } }}
                InputLabelProps={{ style: { fontSize: 14 }, shrink: true }}
                label={t("workExperienceForm.dateStarted")}
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
                label={t("workExperienceForm.dateEnded")}
                size="small"
                fullWidth
              />
              <Typography className={styles.leaveEmpty}>
                {t("workExperienceForm.leaveEmpty")}
              </Typography>
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
          <Container className={styles.submitButtonWrapper}>
            <Button
              type="submit"
              color="primary"
              variant="contained"
              className={styles.submitButton}>
              {createLoading ? (
                <CircularProgress size={21} color="inherit" />
              ) : isCreate ? (
                t("workExperienceForm.saveWorkExperience")
              ) : (
                t("workExperienceForm.updateWorkExperience")
              )}
            </Button>
          </Container>
        </form>
      </DialogContent>
      <DialogActions className={isCreate ? styles.closeButtonWrapper : styles.buttonsContainer}>
        {!isCreate && (
          <Button autoFocus onClick={handleClose} color="secondary">
            {t("buttonText.delete")}
          </Button>
        )}
        <Button autoFocus onClick={handleClose} color="secondary">
          {t("buttonText.close")}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default WorkExperienceModal;