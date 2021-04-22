import React from "react";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import { AccountEmailFormComponentClasses } from "./index";
import { useTranslation } from "react-i18next";
import { Card } from "@material-ui/core";

interface Props {
  styles: ClassNameMap<AccountEmailFormComponentClasses>;
}

const AccountEmailFormComponent: React.FC<Props> = ({ styles }): JSX.Element => {
  const [t, i18n] = useTranslation("home");

  return (
    <>
      <Card className={styles.accountEmailFormWrapperStyles}>
        <h4>Account email form</h4>
      </Card>
    </>
  );
};

export default AccountEmailFormComponent;
