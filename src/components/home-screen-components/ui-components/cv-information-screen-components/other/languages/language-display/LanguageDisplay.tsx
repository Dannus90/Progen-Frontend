import React, { useState } from "react";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import { Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import EditIcon from "@material-ui/icons/Edit";
import { LanguageDisplayComponentClasses } from ".";
import LanguageModal from "../languages-modal/index";
import { GetLanguageResponse } from "../../interfaces/other-information-interfaces";

interface Props {
  styles: ClassNameMap<LanguageDisplayComponentClasses>;
  languageData: GetLanguageResponse;
}

const LanguageDisplayComponent: React.FC<Props> = ({ styles, languageData }): JSX.Element => {
  const [t] = useTranslation("cvInformation");
  const [editModalOpen, setEditModalOpen] = useState<boolean>(false);

  const languageSv = languageData.languageSv;
  const languageEn = languageData.languageEn;

  const handleEditModalClose = () => {
    setEditModalOpen(false);
  };

  return (
    <div className={styles.languageDisplayWrapperStyles}>
      <div className={styles.languageContainer}>
        <Typography className={styles.language}>{`* ${languageSv}`}</Typography>
      </div>
      <div className={styles.languageContainer}>
        <div className={styles.headingIconWrapper}>
          <Typography className={styles.language}>{`* ${languageEn}`}</Typography>
          <EditIcon
            color="action"
            className={styles.editIcon}
            onClick={() => setEditModalOpen(true)}
          />
        </div>
        <LanguageModal
          isCreate={false}
          handleClose={handleEditModalClose}
          open={editModalOpen}
          header={t("otherInformation.language.modal.edit")}
          language={languageData}
        />
      </div>
    </div>
  );
};

export default LanguageDisplayComponent;
