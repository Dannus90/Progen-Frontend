import React from "react";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import { AccountComponentClasses } from "./index";

interface Props {
  styles: ClassNameMap<AccountComponentClasses>;
}

const AccountComponent: React.FC<Props> = ({ styles }): JSX.Element => {
  return (
    <div className={styles.accountWrapperStyles}>
      Account Component
    </div>
  );
};

export default AccountComponent;
