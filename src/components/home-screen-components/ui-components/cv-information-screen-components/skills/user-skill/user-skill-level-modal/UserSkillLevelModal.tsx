import React, { ChangeEvent, useEffect, useState } from "react";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import { UserSkillLevelModalComponentClasses } from "./index";
import { useTranslation } from "react-i18next";
import {
  Button,
  CircularProgress,
  Dialog,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  NativeSelect
} from "@material-ui/core";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { BootstrapInput } from "../../ui-components/BootStrapInput";
import AddIcon from "@material-ui/icons/Add";
import { useMutation } from "@apollo/client";
import { UPDATE_USERSKILL } from "./gql";
import { UpdateUserSkillInput, UpdateUserSkillResponse } from "../../interfaces/skill-interfaces";
import { notifyUserSkillModified } from "../../../../../../../redux/reducers/skills/actions";
import { UpdateUserSkillData } from "../UserSkill";
import { useAppDispatch } from "../../../../../../../redux/hooks/hooks";
import { Alert } from "@material-ui/lab";

interface Props {
  styles: ClassNameMap<UserSkillLevelModalComponentClasses>;
  handleClose: () => void;
  open: boolean;
  updateUserSkillData: UpdateUserSkillData;
}

const selectedValues: Array<number> = [1, 2, 3, 4, 5];

const UserSkillLevelModal: React.FC<Props> = ({
  styles,
  handleClose,
  open,
  updateUserSkillData
}): JSX.Element => {
  const [t] = useTranslation("cvInformation");
  const dispatch = useAppDispatch();
  const { skillLevel, userSkillId } = updateUserSkillData;
  const [displayAlertMessage, setDisplayAlertMessage] = useState<boolean>(false);
  const [levelSelected, setLevelSelected] = useState<number>(skillLevel);

  const removeAlertDisplay = (): void => {
    setDisplayAlertMessage(false);
  };

  const [updateUserSkill, { loading, error, data }] =
    useMutation<{
      userSkill: UpdateUserSkillResponse;
      updateUserSkillInput: UpdateUserSkillInput;
    }>(UPDATE_USERSKILL);

  const handleValueChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setLevelSelected(Number(e.target.value));
  };

  const handleSkillUpdate = async (): Promise<void> => {
    try {
      await updateUserSkill({
        variables: {
          updateUserSkillInput: {
            userSkillId,
            skillLevel: levelSelected
          }
        }
      });

      dispatch(notifyUserSkillModified());
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    console.log(error);
    if (error) {
      setDisplayAlertMessage(true);
    }
  }, [error]);

  useEffect(() => {
    if (data) {
      setDisplayAlertMessage(true);
    }
  }, [data]);

  return (
    <Dialog
      className={styles.userSkillLevelStyles}
      open={open}
      onClose={handleClose}
      aria-labelledby="draggable-dialog-title">
      <HighlightOffIcon className={styles.exitIcon} onClick={handleClose} />
      <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
        {t("skills.updateUserSkillTitle")}
      </DialogTitle>
      <DialogContent className={styles.dialogContent}>
        <FormControl className={styles.selectContainer}>
          <InputLabel htmlFor="custom-select-label">
            {t("skills.inputUserSkillLevelLabel")}
          </InputLabel>
          <NativeSelect
            id="custom-select"
            value={levelSelected}
            onChange={handleValueChange}
            input={<BootstrapInput />}>
            <option aria-label="None" value="" />
            {selectedValues.map((sv) => (
              <option key={sv} value={sv}>
                {sv}
              </option>
            ))}
          </NativeSelect>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSkillUpdate}
            className={styles.updateUserSkillButton}>
            {loading ? (
              <CircularProgress size={25} />
            ) : (
              <>
                <AddIcon className={styles.addIcon} />
                {t("skills.updateUserSkill")}
              </>
            )}
          </Button>
          {error && displayAlertMessage && (
            <Alert
              className={`${styles.alertStyle}`}
              onClose={() => removeAlertDisplay()}
              severity="error">
              {`${error?.message}`}
            </Alert>
          )}
          {data && displayAlertMessage && (
            <Alert
              className={`${styles.alertStyle}`}
              onClose={() => removeAlertDisplay()}
              severity="success">
              {t("skills.updateUserSkillSuccess")}
            </Alert>
          )}
        </FormControl>
      </DialogContent>
    </Dialog>
  );
};

export default UserSkillLevelModal;
