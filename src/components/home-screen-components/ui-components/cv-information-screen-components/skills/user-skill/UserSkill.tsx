import React, { useCallback, useEffect, useState } from "react";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import { UserSkillComponentClasses } from ".";
import {
  DeleteUserSkillInput,
  DeleteUserSkillResponse,
  UserSkillData
} from "../interfaces/skill-interfaces";
import { Avatar, Chip } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import { useMutation } from "@apollo/client";
import { DELETE_USERSKILL } from "./gql";
import { useAppDispatch } from "../../../../../../redux/hooks/hooks";
import { notifyUserSkillModified } from "../../../../../../redux/reducers/skills/actions";
import { Alert } from "@material-ui/lab";
import UserSkillLevelModal from "./user-skill-level-modal/index";

interface Props {
  styles: ClassNameMap<UserSkillComponentClasses>;
  userSkillData: UserSkillData;
}

export interface UpdateUserSkillData {
  userSkillId: string;
  skillLevel: number;
}

const UserSkillComponent: React.FC<Props> = ({ styles, userSkillData }): JSX.Element => {
  const dispatch = useAppDispatch();
  const [displayAlertMessage, setDisplayAlertMessage] = useState<boolean>(false);
  const [editModalOpen, setEditModalOpen] = useState<boolean>(false);
  const {
    skill: { skillName },
    userSkill: { id, skillLevel, skillId, userId }
  } = userSkillData;

  const [deleteUserSkill, { loading, error, data }] =
    useMutation<{
      userSkill: DeleteUserSkillResponse;
      deleteUserSkillInput: DeleteUserSkillInput;
    }>(DELETE_USERSKILL);

  const removeAlertDisplay = (): void => {
    setDisplayAlertMessage(false);
  };

  const handleEditClose = () => {
    setEditModalOpen(false);
  };

  const handleUserSkillDelete = async () => {
    try {
      await deleteUserSkill({
        variables: {
          deleteUserSkillInput: {
            userSkillId: id
          }
        }
      });

      dispatch(notifyUserSkillModified());
    } catch (err) {
      console.error(err);
    }
  };

  const updateUserSkillData = useCallback((): UpdateUserSkillData => {
    return {
      userSkillId: id,
      skillLevel
    };
  }, [id, skillLevel]);

  useEffect(() => {
    if (error) {
      setDisplayAlertMessage(true);
    }
  }, [error]);

  return (
    <div className={styles.userSkillWrapperStyles}>
      {!error && (
        <>
          <Chip
            avatar={<Avatar>{skillLevel}</Avatar>}
            label={skillName}
            clickable
            color="secondary"
            onDelete={handleUserSkillDelete}
            variant="outlined"
          />
          <EditIcon
            color="action"
            className={styles.editIcon}
            onClick={() => setEditModalOpen(true)}
          />
        </>
      )}
      {error && displayAlertMessage && (
        <Alert
          className={`${styles.alertStyle}`}
          onClose={() => removeAlertDisplay()}
          severity="error">
          {`${error?.message}`}
        </Alert>
      )}
      <UserSkillLevelModal
        open={editModalOpen}
        handleClose={handleEditClose}
        updateUserSkillData={updateUserSkillData()}
      />
    </div>
  );
};

export default UserSkillComponent;
