import React, { useEffect, useMemo, useState } from "react";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import {
  CircularProgress,
  Container,
  FormControl,
  InputLabel,
  NativeSelect,
  Typography
} from "@material-ui/core";
import { useTranslation } from "react-i18next";
import AddIcon from "@material-ui/icons/Add";
import { GET_SKILLS, GET_USER_SKILLS } from "./gql";
import { useQuery } from "@apollo/client";
import { Alert } from "@material-ui/lab";
import CachedIcon from "@material-ui/icons/Cached";
import { useAppSelector } from "../../../../../redux/hooks/hooks";
import { SkillComponentClasses } from ".";
import { GetSkillsResponse, GetUserSkillsResponse } from "./interfaces/skill-interfaces";
import { BootstrapInput } from "./ui-components/BootStrapInput";

interface Props {
  styles: ClassNameMap<SkillComponentClasses>;
}

interface SkillData {
  id: string;
  name: string;
  fullIdForSelect: string;
}

const SkillsComponent: React.FC<Props> = ({ styles }): JSX.Element => {
  const [t] = useTranslation("cvInformation");
  const { skillState } = useAppSelector((state) => state);
  const [skillDataSelected, setSkillDataSelected] = useState<SkillData>({
    id: "",
    name: "",
    fullIdForSelect: ""
  });
  const {
    refetch: refetchSkills,
    error: skillError,
    loading: skillLoading,
    data: skillData
  } = useQuery<GetSkillsResponse>(GET_SKILLS);
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

  const handleSkillDataChange = (e: React.BaseSyntheticEvent) => {
    const { value } = e.target;

    const [name, id] = value.split(":");

    setSkillDataSelected({
      id,
      name,
      fullIdForSelect: value
    });
  };

  useEffect(() => {
    refetchSkillsOnModify();
  }, [skillState.skillModified]);

  useEffect(() => {
    refetchUserSkillsOnModify();
  }, [skillState.userSkillModified]);

  const skillDataMemoized = useMemo(() => {
    return skillData?.skill.getSkills.skills;
  }, [skillData]);

  const userSkillDataMemoized = useMemo(() => {
    return userSkillData?.userSkill.getUserSkills.userSkills;
  }, [userSkillData]);

  return (
    <div className={styles.skillsWrapperStyles}>
      <Container>
        {skillError && (
          <Alert
            className={`${styles.alertStyle}`}
            icon={<CachedIcon onClick={() => refetchSkills()} className={styles.refetchIcon} />}
            severity="error">
            {skillError?.graphQLErrors.map(
              (err) => `${err.extensions?.exception.statusCode} ${skillError?.message}`
            )}
          </Alert>
        )}
        {userSkillError && (
          <Alert
            className={`${styles.alertStyle}`}
            icon={<CachedIcon onClick={() => refetchSkills()} className={styles.refetchIcon} />}
            severity="error">
            {userSkillError?.graphQLErrors.map(
              (err) => `${err.extensions?.exception.statusCode} ${userSkillError?.message}`
            )}
          </Alert>
        )}
        {userSkillLoading ||
          (skillLoading && (
            <Container className={styles.loaderContainer}>
              <CircularProgress size={50} />
            </Container>
          ))}
        {!skillLoading && !skillError && skillDataMemoized && (
          <Container className={styles.languagesContainer}>
            <FormControl>
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
          </Container>
        )}
      </Container>
    </div>
  );
};

export default SkillsComponent;
