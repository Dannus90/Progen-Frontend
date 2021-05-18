import { makeStyles } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import React from "react";
import { MainTheme } from "../../../../styles/theme";
import DeleteAccountModal from "./DeleteAccountModal";

interface Props {
  handleClose: () => void;
  open: boolean;
  password: string;
}

export type deleteAccountModalComponentClasses =
  | "deleteAccountModalWrapperStyles"
  | "exitIcon"
  | "alertStyle"
  | "buttonErrorContainer"
  | "buttonContainer"
  | "errorContainer";

const deleteAccountModalComponentWrapper: React.FC<Props> = ({
  handleClose,
  open,
  password
}): JSX.Element => {
  const theme = useTheme<MainTheme>();

  const deleteAccountModalComponentStyles = makeStyles({
    deleteAccountModalWrapperStyles: {
      margin: "auto",
      minWidth: "400px",
      position: "relative",
      padding: "1rem"
    },
    exitIcon: {
      position: "absolute",
      top: 7.5,
      right: 7.5,
      color: theme.palette.secondary.main,
      cursor: "pointer"
    },
    alertStyle: {
      height: "auto",
      padding: "5px 30px",
      width: "100%",
      fontSize: "14px",
      marginBottom: `${theme.customSpacings.xxs}`
    },
    buttonErrorContainer: {
      display: "flex",
      flexDirection: "column"
    },
    buttonContainer: {
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
      padding: "0.75rem 0.75rem"
    },
    errorContainer: {
      display: "flex",
      width: "100%",
      padding: "0.25rem 0.5rem"
    }
  });

  const styles = deleteAccountModalComponentStyles();

  return (
    <DeleteAccountModal password={password} open={open} handleClose={handleClose} styles={styles} />
  );
};

export default deleteAccountModalComponentWrapper;
