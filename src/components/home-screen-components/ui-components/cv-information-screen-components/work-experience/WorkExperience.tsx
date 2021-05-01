import React, { useMemo, useState } from "react";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import { WorkExperienceComponentClasses } from "./index";
import { Button, Container } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import WorkExperienceModal from "./work-experience-modal/index";
import { useQuery } from "@apollo/client";
import { GET_WORK_EXPERIENCES } from "./gql";
import {
  GetWorkExperienceResponse,
  GetWorkExperiencesResponse
} from "./interfaces/work-experience-interfaces";
import WorkExperienceDisplay from "./work-experience-display/index";
import { useAppSelector } from "../../../../../redux/hooks/hooks";

interface Props {
  styles: ClassNameMap<WorkExperienceComponentClasses>;
}

const WorkExperienceComponent: React.FC<Props> = ({ styles }): JSX.Element => {
  const [t] = useTranslation("cvInformation");
  const [createOpen, setCreateOpen] = useState<boolean>(false);
  const [experienceData, setExperienceData] = useState<Array<GetWorkExperienceResponse>>([]);
  const { workExperience } = useAppSelector((state) => state);
  const { refetch, error, loading, data } = useQuery<GetWorkExperiencesResponse>(
    GET_WORK_EXPERIENCES
  );

  const handleCreateModalClose = (): void => {
    setCreateOpen(false);
  };

  useMemo(() => {
    refetch();
  }, [workExperience]);

  useMemo(() => {
    if (data?.workExperience.getWorkExperiences.workExperiences) {
      setExperienceData(data?.workExperience.getWorkExperiences.workExperiences);
    }
  }, [data]);

  return (
    <div className={styles.workExperienceWrapperStyles}>
      <Container className={styles.createWorkExperienceButtonContainer}>
        <Button
          size="small"
          color="primary"
          className={styles.createWorkExperienceButton}
          type="submit"
          onClick={() => setCreateOpen(true)}
          variant="contained">
          {t("workExperience.createNew")}
        </Button>
        <WorkExperienceModal
          isCreate={true}
          handleClose={handleCreateModalClose}
          open={createOpen}
          header={t("workExperience.modal.createNew")}
        />
      </Container>
      <Container>
        {experienceData &&
          experienceData.map((ed) => {
            return <WorkExperienceDisplay key={ed.id} workExperienceData={ed} />;
          })}
      </Container>
    </div>
  );
};

export default WorkExperienceComponent;
