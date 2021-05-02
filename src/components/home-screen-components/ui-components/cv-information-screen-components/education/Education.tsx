import React, { useState } from "react";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import { EducationComponentClasses } from "./index";
import { Button, Container } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import EducationModal from "./education-modal/index";

interface Props {
  styles: ClassNameMap<EducationComponentClasses>;
}

const EducationComponent: React.FC<Props> = ({ styles }): JSX.Element => {
  const [t] = useTranslation("cvInformation");
  const [createOpen, setCreateOpen] = useState<boolean>(false);

  const handleCreateModalClose = (): void => {
    setCreateOpen(false);
  };

  return (
    <div className={styles.educationWrapperStyles}>
      <Container className={styles.createEducationButtonContainer}>
        <Button
          size="small"
          color="primary"
          className={styles.createEducationButton}
          type="submit"
          onClick={() => setCreateOpen(true)}
          variant="contained">
          {t("education.createNew")}
        </Button>
        <EducationModal
          isCreate={true}
          handleClose={handleCreateModalClose}
          open={createOpen}
          header={t("education.modal.createNew")}
        />
      </Container>
      {/*       <Container>
        {experienceData &&
          experienceData.map((ed) => {
            return <WorkExperienceDisplay key={ed.id} workExperienceData={ed} />;
          })}
      </Container> */}
    </div>
  );
};

export default EducationComponent;
