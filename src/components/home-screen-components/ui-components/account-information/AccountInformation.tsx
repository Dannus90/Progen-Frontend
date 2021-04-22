import React from "react";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import { AccountInformationComponentClasses } from "./index";
import { useTranslation } from "react-i18next";
import { Card } from "@material-ui/core";

interface Props {
  styles: ClassNameMap<AccountInformationComponentClasses>;
}

const AccountEmailFormComponent: React.FC<Props> = ({ styles }): JSX.Element => {
  const [t, i18n] = useTranslation("home");

  return (
    <>
      <Card className={styles.accountInformationWrapperStyles}>
        <h4>Account information</h4>
      </Card>
    </>
  );
};

export default AccountEmailFormComponent;
