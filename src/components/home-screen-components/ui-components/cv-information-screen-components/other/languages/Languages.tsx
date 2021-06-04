import React, { useEffect, useState } from "react";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import { LanguagesComponentClasses } from "./index";
import { CircularProgress, Container, Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import AddIcon from "@material-ui/icons/Add";
import LanguagesModal from "./languages-modal/index";
import { GET_LANGUAGES } from "./gql";
import { useQuery } from "@apollo/client";
import { GetLanguagesResponse } from "../interfaces/other-information-interfaces";
import { useAppSelector } from "../../../../../../redux/hooks/hooks";
import { Alert } from "@material-ui/lab";
import LanguageDisplay from "./language-display/index";
import CachedIcon from "@material-ui/icons/Cached";

interface Props {
  styles: ClassNameMap<LanguagesComponentClasses>;
}

const LanguagesComponent: React.FC<Props> = ({ styles }): JSX.Element => {
  const [t] = useTranslation("cvInformation");
  const [languageModalOpen, setLanguageModalOpen] = useState<boolean>(false);
  const { otherInformationState } = useAppSelector((state) => state);
  const { refetch, error, loading, data } = useQuery<GetLanguagesResponse>(GET_LANGUAGES);

  const refetchLanguages = async () => {
    try {
      await refetch();
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    refetchLanguages();
  }, [otherInformationState.languageModified]);

  let sortedLanguages = data?.language.getLanguages.languages;

  if (sortedLanguages) {
    sortedLanguages = [...sortedLanguages].sort((a, b) => {
      return a.languageSv.localeCompare(b.languageSv);
    });
  }

  const handleCloseLanguageModal = () => {
    setLanguageModalOpen(false);
  };

  const handleOpenLanguageModal = () => {
    setLanguageModalOpen(true);
  };

  return (
    <div className={styles.languagesWrapperStyles}>
      <Container>
        <LanguagesModal
          header={t("otherInformation.createLanguageHeader")}
          isCreate={true}
          handleClose={handleCloseLanguageModal}
          open={languageModalOpen}
        />
        {error && (
          <Alert
            className={`${styles.alertStyle}`}
            icon={<CachedIcon onClick={() => refetch()} className={styles.refetchIcon} />}
            severity="error">
            {error?.graphQLErrors.map(
              (err) => `${err.message}`
            )}
          </Alert>
        )}
        {loading && (
          <Container className={styles.loaderContainer}>
            <CircularProgress size={50} />
          </Container>
        )}
        {!loading && !error && data && (
          <Container className={styles.languagesContainer}>
            {!!sortedLanguages && (
              <div className={styles.languagesHeadingsContainer}>
                <div className={styles.languagesHeadingContainer}>
                  <Typography className={styles.versionHeader}>
                    {t("otherInformation.language.modal.languageSwedish")}
                  </Typography>
                </div>
                <div className={styles.languagesHeadingContainer}>
                  <Typography className={styles.versionHeader}>
                    {t("otherInformation.language.modal.languageEnglish")}
                  </Typography>
                  <AddIcon className={styles.addIconStyles} onClick={handleOpenLanguageModal} />
                </div>
              </div>
            )}
            <div>
              {!!sortedLanguages &&
                sortedLanguages.map((sl) => {
                  return <LanguageDisplay key={sl.id} languageData={sl} />;
                })}
            </div>
          </Container>
        )}
      </Container>
    </div>
  );
};

export default LanguagesComponent;
