import React, { useState } from "react";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import { WorkExperienceComponentClasses } from "./index";
import { Button, Container, Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import WorkExperienceModal from "./work-experience-modal/index";

interface Props {
  styles: ClassNameMap<WorkExperienceComponentClasses>;
}

const WorkExperienceComponent: React.FC<Props> = ({ styles }): JSX.Element => {
  const [t] = useTranslation("cvInformation");
  const [createOpen, setCreateOpen] = useState<boolean>(false);
  const [editOpen, setEditOpen] = useState<boolean>(false);

  const handleCreateModalClose = (): void => {
    setCreateOpen(false);
  };

  const handleEditModalClose = (): void => {
    setEditOpen(false);
  };

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
        <Typography>WorkExperiences here!</Typography>
        <Typography>WorkExperiences here!</Typography>
        <Typography>WorkExperiences here!</Typography>
        <Typography>WorkExperiences here!</Typography>
        <Typography>WorkExperiences here!</Typography>
        <Typography>WorkExperiences here!</Typography>
        <Typography>WorkExperiences here!</Typography>
        <Typography>WorkExperiences here!</Typography>
        <Typography>WorkExperiences here!</Typography>
        <Typography>WorkExperiences here!</Typography>
        <Typography>WorkExperiences here!</Typography>
        <Typography>WorkExperiences here!</Typography>
        <Typography>WorkExperiences here!</Typography>
        <Typography>WorkExperiences here!</Typography>
        <Typography>WorkExperiences here!</Typography>
        <Typography>WorkExperiences here!</Typography>
        <Typography>WorkExperiences here!</Typography>
        <Typography>WorkExperiences here!</Typography>
        <Typography>WorkExperiences here!</Typography>
        <Typography>WorkExperiences here!</Typography>
        <Typography>WorkExperiences here!</Typography>
        <Typography>WorkExperiences here!</Typography>
        <Typography>WorkExperiences here!</Typography>
        <Typography>WorkExperiences here!</Typography>
        <Typography>WorkExperiences here!</Typography>
        <Typography>WorkExperiences here!</Typography>
        <Typography>WorkExperiences here!</Typography>
        <Typography>WorkExperiences here!</Typography>
      </Container>
    </div>
  );
};

export default WorkExperienceComponent;
