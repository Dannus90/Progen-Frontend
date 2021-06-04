import React, { useMemo, useState } from "react";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import { LanguageModalComponentClasses } from "./index";
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
  TextField
} from "@material-ui/core";
import { useMutation } from "@apollo/client";
import { Alert } from "@material-ui/lab";
import { UseLanguagesForm } from "../../../../../../../custom-hooks/UseLanguagesForm";
import {
  DeleteLanguageInput,
  LanguageData,
  LanguageInput,
  LanguageResponse
} from "../interfaces/languages-interfaces";
import { CREATE_LANGUAGE, DELETE_LANGUAGE, UPDATE_LANGUAGE } from "./gql";
import { notifyLanguageModified } from "../../../../../../../redux/reducers/other-information/actions";
import { useAppDispatch } from "../../../../../../../redux/hooks/hooks";

interface Props {
  styles: ClassNameMap<LanguageModalComponentClasses>;
  isCreate: boolean;
  language?: LanguageData;
  handleClose: () => void;
  open: boolean;
  header: string;
}

const initialFormState = {
  languageSv: "",
  languageEn: ""
};

const LanguageModal: React.FC<Props> = ({
  styles,
  isCreate,
  language,
  handleClose,
  open,
  header
}): JSX.Element => {
  const [t] = useTranslation("common");
  const [displayAlertMessage, setDisplayAlertMessage] = useState(false);
  const dispatch = useAppDispatch();

  const { formData, setFormData, handleInputChange } = UseLanguagesForm(
    !isCreate
      ? {
          languageId: language?.id ?? "",
          languageEn: language?.languageEn ?? "",
          languageSv: language?.languageSv ?? ""
        }
      : {
          ...initialFormState
        }
  );

  const [createLanguage, { loading: createLoading, error }] =
    useMutation<{
      createLanguage: LanguageResponse;
      createLanguageInput: LanguageInput;
    }>(CREATE_LANGUAGE);

  const [deleteLanguage, { loading: deleteLoading, error: deleteError }] =
    useMutation<{
      deleteLanguage: LanguageResponse;
      deleteLanguageInput: DeleteLanguageInput;
    }>(DELETE_LANGUAGE);

  const [updateLanguage, { loading: updateLoading, error: updateError }] =
    useMutation<{
      updateLanguage: LanguageResponse;
      updateLanguageInput: LanguageInput;
    }>(UPDATE_LANGUAGE);

  const handleCreateLanguage = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    try {
      await createLanguage({
        variables: {
          createLanguageInput: {
            ...formData
          }
        }
      });

      dispatch(notifyLanguageModified());

      setFormData({ ...initialFormState });

      handleClose();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteLanguage = async (): Promise<void> => {
    try {
      await deleteLanguage({
        variables: {
          deleteLanguageInput: {
            languageId: formData.languageId
          }
        }
      });

      dispatch(notifyLanguageModified());

      handleClose();
    } catch (err) {
      console.error(err);
    }
  };

  const handleEditLanguage = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    try {
      await updateLanguage({
        variables: {
          updateLanguageInput: {
            ...formData
          }
        }
      });

      dispatch(notifyLanguageModified());

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
      className={styles.languageModalWrapperStyles}
      open={open}
      onClose={handleClose}
      aria-labelledby="draggable-dialog-title">
      <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
        {header}
      </DialogTitle>
      <DialogContent>
        <form onSubmit={isCreate ? handleCreateLanguage : handleEditLanguage}>
          <Grid container spacing={3} className={styles.formStyle}>
            <Grid item xs={12} sm={6}>
              <TextField
                id="languageSv"
                aria-describedby="form-data"
                name="languageSv"
                value={formData.languageSv}
                variant="outlined"
                onChange={handleInputChange}
                inputProps={{ style: { fontSize: 14 } }}
                InputLabelProps={{ style: { fontSize: 14 } }}
                label={t("languagesForm.languageSv")}
                autoFocus
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="languageEn"
                aria-describedby="form-data"
                name="languageEn"
                variant="outlined"
                value={formData.languageEn}
                inputProps={{ style: { fontSize: 14 } }}
                InputLabelProps={{ style: { fontSize: 14 } }}
                label={t("languagesForm.languageEn")}
                autoFocus
                size="small"
                fullWidth
                onChange={handleInputChange}></TextField>
            </Grid>

            {error && displayAlertMessage && (
              <Alert
                className={`${styles.alertStyle}`}
                onClose={() => removeAlertDisplay()}
                severity="error">
                {error?.graphQLErrors.map(
                  (err) => `${err.message}`
                )}
              </Alert>
            )}
            {deleteError && displayAlertMessage && (
              <Alert
                className={`${styles.alertStyle}`}
                onClose={() => removeAlertDisplay()}
                severity="error">
                {deleteError?.graphQLErrors.map(
                  (err) => `${err.message}`
                )}
              </Alert>
            )}
            {updateError && displayAlertMessage && (
              <Alert
                className={`${styles.alertStyle}`}
                onClose={() => removeAlertDisplay()}
                severity="error">
                {updateError?.graphQLErrors.map(
                  (err) => `${err.message}`
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
                  t("languagesForm.saveLanguage")
                ) : (
                  t("languagesForm.updateLanguage")
                )}
              </Button>
            </Container>
          </Grid>
        </form>
      </DialogContent>
      <DialogActions className={isCreate ? styles.closeButtonWrapper : styles.buttonsContainer}>
        {!isCreate && !deleteLoading && (
          <Button autoFocus onClick={handleDeleteLanguage} color="secondary">
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

export default LanguageModal;
