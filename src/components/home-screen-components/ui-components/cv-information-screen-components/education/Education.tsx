import React, { useMemo, useState } from "react";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import { EducationComponentClasses } from "./index";
import { Button, CircularProgress, Container } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import EducationModal from "./education-modal/index";
import { useAppSelector } from "../../../../../redux/hooks/hooks";
import { GetEducationsResponse } from "./interfaces/education-interfaces";
import { useQuery } from "@apollo/client";
import { GET_EDUCATIONS } from "./gql";
import EducationDisplay from "./education-display/index";
import { Alert } from "@material-ui/lab";
import CachedIcon from "@material-ui/icons/Cached";

interface Props {
  styles: ClassNameMap<EducationComponentClasses>;
}

const EducationComponent: React.FC<Props> = ({ styles }): JSX.Element => {
  const [t] = useTranslation("cvInformation");
  const [createOpen, setCreateOpen] = useState<boolean>(false);
  const { education } = useAppSelector((state) => state);
  const { refetch, error, loading, data } = useQuery<GetEducationsResponse>(GET_EDUCATIONS);

  const handleCreateModalClose = (): void => {
    setCreateOpen(false);
  };

  useMemo(async () => {
    try {
      await refetch();
    } catch (err) {
      console.error(err);
    }
  }, [education.educationModified]);

  let sortedEducations = data?.education.getEducations.educations;

  if (sortedEducations) {
    sortedEducations = [...sortedEducations].sort((a, b) => {
      if (a.dateStarted && b.dateStarted) {
        if (a.dateStarted < b.dateStarted) return -1;
        if (a.dateStarted > b.dateStarted) return 1;

        return 0;
      }

      return 0;
    });
  }

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
      {error && (
        <Alert
          className={`${styles.alertStyle}`}
          icon={<CachedIcon onClick={() => refetch()} className={styles.refetchIcon} />}
          severity="error">
          {error?.graphQLErrors.map(
            (err) => `${err.extensions?.exception.statusCode} ${error?.message}`
          )}
        </Alert>
      )}
      {loading && (
        <Container className={styles.loaderContainer}>
          <CircularProgress size={50} />
        </Container>
      )}
      {!loading && !error && data && (
        <Container>
          {data?.education.getEducations.educations &&
            data?.education.getEducations.educations.map((ed) => {
              return <EducationDisplay key={ed.id} educationData={ed} />;
            })}
        </Container>
      )}
    </div>
  );
};

export default EducationComponent;
