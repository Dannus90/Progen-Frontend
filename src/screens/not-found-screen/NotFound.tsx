import React from "react";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import { Typography } from "@material-ui/core";
import { NotFoundComponentClasses } from ".";
import { useTranslation } from "react-i18next";

interface Props {
  styles: ClassNameMap<NotFoundComponentClasses>;
}

const NotFoundComponent: React.FC<Props> = ({ styles }): JSX.Element => {
  const { t } = useTranslation("common");
  return (
    <div className={styles.notFoundWrapperStyles}>
      <Typography className={styles.pageNotFoundText}>{t("notFound.message")}</Typography>
    </div>
  );
};

export default NotFoundComponent;
