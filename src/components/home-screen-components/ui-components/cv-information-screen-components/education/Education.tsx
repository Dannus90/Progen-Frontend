import React, { useMemo, useState } from "react";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import { EducationComponentClasses } from "./index";
import { Button, Container } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import EducationModal from "./education-modal/index";
import { useAppSelector } from "../../../../../redux/hooks/hooks";
import { GetEducationResponse, GetEducationsResponse } from "./interfaces/education-interfaces";
import { useQuery } from "@apollo/client";
import { GET_EDUCATIONS } from "./gql";
import EducationDisplay from "./education-display/index";

interface Props {
  styles: ClassNameMap<EducationComponentClasses>;
}

const EducationComponent: React.FC<Props> = ({ styles }): JSX.Element => {
  const [t] = useTranslation("cvInformation");
  const [createOpen, setCreateOpen] = useState<boolean>(false);
  const { education } = useAppSelector((state) => state);
  const [educationData, setEducationData] = useState<Array<GetEducationResponse>>([]);
  const { refetch, error, loading, data } = useQuery<GetEducationsResponse>(GET_EDUCATIONS);

  const handleCreateModalClose = (): void => {
    setCreateOpen(false);
  };

  useMemo(() => {
    refetch();
  }, [education.educationModified]);

  useMemo(() => {
    if (data?.education.getEducations.educations) {
      setEducationData(data.education.getEducations.educations);
    }
  }, [data]);

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
      <Container>
        {educationData &&
          educationData.map((ed) => {
            return <EducationDisplay key={ed.id} educationData={ed} />;
          })}
      </Container>
    </div>
  );
};

export default EducationComponent;
