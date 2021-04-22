import React from "react";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import { AccountPasswordFormComponentClasses } from "./index";
import { useTranslation } from "react-i18next";
import { Card } from "@material-ui/core";

interface Props {
  styles: ClassNameMap<AccountPasswordFormComponentClasses>;
}

const AccountPasswordFormComponent: React.FC<Props> = ({ styles }): JSX.Element => {
  const [t, i18n] = useTranslation("home");

  return (
    <>
      <Card className={styles.accountPasswordFormWrapperStyles}>
        <h4>Account email form</h4>
      </Card>
    </>
  );
};

export default AccountPasswordFormComponent;
