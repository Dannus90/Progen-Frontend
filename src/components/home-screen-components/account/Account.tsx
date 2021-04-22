import React, { useEffect } from "react";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import { AccountComponentClasses } from "./index";
import { useDispatch } from "react-redux";
import { accountClicked } from "../../../redux/reducers/user-data/generalReducer";

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
  return <div className={styles.accountWrapperStyles}>Account Component</div>;
};

export default AccountComponent;
