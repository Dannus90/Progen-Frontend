import React, { useEffect } from "react";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import { AccountComponentClasses } from "./index";
import { useDispatch } from "react-redux";
import { accountClicked } from "../../../redux/reducers/user-data/generalReducer";
import { Container } from "@material-ui/core";
import AccountEmailForm from "../ui-components/account-email-form/index";
import AccountPasswordForm from "../ui-components/account-password-form/index";
import AccountInformation from "../ui-components/account-information/index";

interface Props {
  styles: ClassNameMap<AccountComponentClasses>;
}

const AccountComponent: React.FC<Props> = ({ styles }): JSX.Element => {
  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      dispatch(accountClicked(false));
    };
  }, []);
  return (
    <div className={styles.accountWrapperStyles}>
      <Container className={styles.formsContainer}>
        <AccountEmailForm />
        <AccountPasswordForm />
      </Container>
      <Container className={styles.informationContainer}>
        <AccountInformation />
      </Container>
    </div>
  );
};

export default AccountComponent;
