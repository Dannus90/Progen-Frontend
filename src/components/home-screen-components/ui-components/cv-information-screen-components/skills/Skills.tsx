import React, { ChangeEvent, Fragment, useEffect, useMemo, useState } from "react";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import {
  Button,
  CircularProgress,
  Container,
  FormControl,
  InputLabel,
  NativeSelect,
  TextField
} from "@material-ui/core";
import { useTranslation } from "react-i18next";
import AddIcon from "@material-ui/icons/Add";
import { CREATE_SKILL, GET_SKILLS, GET_USER_SKILLS, CREATE_USERSKILL } from "./gql";
import { useMutation, useQuery, NetworkStatus } from "@apollo/client";
import { Alert } from "@material-ui/lab";
import CachedIcon from "@material-ui/icons/Cached";
import { useAppSelector } from "../../../../../redux/hooks/hooks";
import { SkillComponentClasses } from ".";
import {
  CreateSkillInput,
  CreateSkillResponse,
  GetSkillsResponse,
  GetUserSkillsResponse
} from "./interfaces/skill-interfaces";
import { BootstrapInput } from "./ui-components/BootStrapInput";
import UserSkill from "./user-skill/index";

interface Props {
  styles: ClassNameMap<SkillComponentClasses>;
}

interface SkillData {
  id: string;
  name: string;
  fullIdForSelect: string;
}

const selectedValues: Array<number> = [1, 2, 3, 4, 5];

const SkillsComponent: React.FC<Props> = ({ styles }): JSX.Element => {
  const [t] = useTranslation("cvInformation");
  const { skillState } = useAppSelector((state) => state);
  const [levelSelected, setLevelSelected] = useState<number>(selectedValues[2]);
  const [displayCreateSkillAlertMessage, setDisplayCreateSkillAlertMessage] =
    useState<boolean>(false);
  const [displayCreateUserSkillAlertMessage, setDisplayCreateUserSkillAlertMessage] =
    useState<boolean>(false);
  const [skillDataSelected, setSkillDataSelected] = useState<SkillData>({
    id: "",
    name: "",
    fullIdForSelect: ""
  });

  const [skillCreationState, setSkillCreationState] = useState({
    newSkillName: ""
  });

  const [
    createSkill,
    { error: createSkillError, loading: createSkillLoading, data: createSkillData }
  ] = useMutation<{
    skill: CreateSkillResponse;
    createSkillInput: CreateSkillInput;
  }>(CREATE_SKILL, {
    variables: {
      createSkillInput: {
        skillName: skillCreationState.newSkillName
      }
    }
  });

  const [
    createUserSkill,
    { error: createUserSkillError, loading: createUserSkillLoading, data: createUserSkillData }
  ] = useMutation<{
    skill: CreateSkillResponse;
    createUserSkillInput: CreateSkillInput;
  }>(CREATE_USERSKILL, {
    variables: {
      createUserSkillInput: {
        skillId: skillDataSelected.id ?? "",
        skillLevel: levelSelected
      }
    }
  });

  const {
    refetch: refetchSkills,
    error: skillError,
    loading: skillLoading,
    data: skillData,
    networkStatus: skillsNetworkStatus
  } = useQuery<GetSkillsResponse>(GET_SKILLS, {
    notifyOnNetworkStatusChange: true
  });

  const {
    refetch: refetchUserSkills,
    error: userSkillError,
    loading: userSkillLoading,
    data: userSkillData
  } = useQuery<GetUserSkillsResponse>(GET_USER_SKILLS);

  const refetchSkillsOnModify = async () => {
    try {
      await refetchSkills();
    } catch (err) {
      console.error(err);
    }
  };

  const refetchUserSkillsOnModify = async () => {
    try {
      await refetchUserSkills();
    } catch (err) {
      console.error(err);
    }
  };

  const handleCreateSkill = async () => {
    await createSkill();
    setDisplayCreateSkillAlertMessage(true);

    refetchSkillsOnModify();

    setTimeout(() => {
      setDisplayCreateSkillAlertMessage(false);
    }, 4000);
  };

  const handleCreateUserSkill = async () => {
    await createUserSkill();
    setDisplayCreateUserSkillAlertMessage(true);

    refetchUserSkillsOnModify();

    setTimeout(() => {
      setDisplayCreateUserSkillAlertMessage(false);
    }, 4000);
  };

  const handleSkillLevelChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setLevelSelected(Number(e.target.value));
  };

  const removeAlertSkillDisplay = (): void => {
    setDisplayCreateSkillAlertMessage(false);
  };

  const removeAlertUserSkillDisplay = (): void => {
    setDisplayCreateUserSkillAlertMessage(false);
  };

  const handleSkillDataChange = (e: React.BaseSyntheticEvent) => {
    const { value } = e.target;

    const [name, id] = value.split(":");

    setSkillDataSelected({
      id,
      name,
      fullIdForSelect: value
    });
  };

  const handleNewSkillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSkillCreationState({
      ...skillCreationState,
      newSkillName: e.target.value
    });
  };

  useEffect(() => {
    refetchSkillsOnModify();
  }, [skillState.skillModified]);

  useEffect(() => {
    refetchUserSkillsOnModify();
  }, [skillState.userSkillModified]);

  const skillDataMemoized = useMemo(() => {
    return skillData?.skill.getSkills.skills.slice().sort((a, b) => {
      return a.skillName.localeCompare(b.skillName);
    });
  }, [skillData?.skill.getSkills.skills]);

  const userSkillDataMemoized = useMemo(() => {
    return userSkillData?.userSkill.getUserSkills.userSkills.slice().sort((a, b) => {
      return a.skill.skillName.localeCompare(b.skill.skillName);
    });
  }, [userSkillData?.userSkill.getUserSkills.userSkills]);

  const isRefetchingSkills = skillsNetworkStatus === NetworkStatus.refetch;

  return (
    <div className={styles.skillsWrapperStyles}>
      <Container className={styles.skillsContainer}>
        {skillError && (
          <Alert
            className={`${styles.alertStyle}`}
            icon={<CachedIcon onClick={() => refetchSkills()} className={styles.refetchIcon} />}
            severity="error">
            {`${skillError?.message}`}
          </Alert>
        )}
        {userSkillError && (
          <Alert
            className={`${styles.alertStyle}`}
            icon={<CachedIcon onClick={() => refetchSkills()} className={styles.refetchIcon} />}
            severity="error">
            {`${userSkillError?.message}`}
          </Alert>
        )}
        {userSkillLoading ||
          (skillLoading && (
            <Container className={styles.loaderContainer}>
              <CircularProgress size={50} />
            </Container>
          ))}
        {!skillLoading && !skillError && !isRefetchingSkills && skillDataMemoized ? (
          <div className={styles.skillsDataContainer}>
            <FormControl className={styles.selectContainer}>
              <InputLabel htmlFor="custom-select-label">{t("skills.inputSkillLabel")}</InputLabel>
              <NativeSelect
                id="custom-select"
                value={skillDataSelected.fullIdForSelect}
                onChange={handleSkillDataChange}
                input={<BootstrapInput />}>
                <option aria-label="None" value="" />
                {skillDataMemoized.map((sdm) => (
                  <option key={sdm.id} value={`${sdm.skillName}:${sdm.id}`}>
                    {sdm.skillName}
                  </option>
                ))}
              </NativeSelect>
            </FormControl>
            <FormControl className={styles.selectContainer}>
              <TextField
                id="skillName"
                aria-describedby="my-helper-text"
                name="skillName"
                value={skillCreationState.newSkillName}
                variant="outlined"
                onChange={handleNewSkillChange}
                inputProps={{ style: { fontSize: 14 } }}
                InputLabelProps={{ style: { fontSize: 14 } }}
                label={t("skills.newSkill")}
                autoFocus
                size="small"
                fullWidth
              />
              <Button
                variant="contained"
                color="primary"
                onClick={handleCreateSkill}
                className={styles.addNewSkillButton}>
                {createSkillLoading ? (
                  <CircularProgress size={25} />
                ) : (
                  <>
                    <AddIcon className={styles.addIcon} />
                    {t("skills.addNewSkill")}
                  </>
                )}
              </Button>
              {createSkillData && displayCreateSkillAlertMessage && (
                <Alert
                  className={`${styles.alertStyle}`}
                  onClose={() => removeAlertSkillDisplay()}
                  severity="success">
                  {t("skills.successfulUpdate")}
                </Alert>
              )}
              {createSkillError && displayCreateSkillAlertMessage && (
                <Alert
                  className={`${styles.alertStyle}`}
                  onClose={() => removeAlertSkillDisplay()}
                  severity="error">
                  {`${createSkillError?.message}`}
                </Alert>
              )}
            </FormControl>
            <FormControl className={styles.selectContainer}>
              <InputLabel htmlFor="custom-select-label">
                {t("skills.inputUserSkillLevelLabel")}
              </InputLabel>
              <NativeSelect
                id="custom-select"
                value={levelSelected}
                onChange={handleSkillLevelChange}
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
                onClick={handleCreateUserSkill}
                className={styles.addNewSkillButton}>
                {createUserSkillLoading ? (
                  <CircularProgress size={25} />
                ) : (
                  <>
                    <AddIcon className={styles.addIcon} />
                    {t("skills.addNewUserSkill")}
                  </>
                )}
              </Button>
              {createUserSkillError && displayCreateUserSkillAlertMessage && (
                <Alert
                  className={`${styles.alertStyle}`}
                  onClose={() => removeAlertUserSkillDisplay()}
                  severity="error">
                  {`${createUserSkillError?.message}`}
                </Alert>
              )}
              {createUserSkillData && displayCreateUserSkillAlertMessage && (
                <Alert
                  className={`${styles.alertStyle}`}
                  onClose={() => removeAlertUserSkillDisplay()}
                  severity="success">
                  {t("skills.createUserSkillSuccessful")}
                </Alert>
              )}
            </FormControl>
          </div>
        ) : (
          <CircularProgress size={50} />
        )}
      </Container>
      <Container className={styles.userSkillsContainer}>
        {!userSkillLoading && !userSkillError && !isRefetchingSkills && !!userSkillDataMemoized && (
          <>
            {userSkillDataMemoized.map((usdm) => (
              <Fragment key={usdm.userSkill.id}>
                <UserSkill userSkillData={usdm} />
              </Fragment>
            ))}
          </>
        )}
      </Container>
    </div>
  );
};

export default SkillsComponent;
