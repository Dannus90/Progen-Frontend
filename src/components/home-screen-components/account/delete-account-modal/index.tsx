import { makeStyles, Theme } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { CreateCSSProperties } from "@material-ui/core/styles/withStyles";
import React, { CSSProperties } from "react";
import { MainTheme } from "../../../../styles/theme";
import DeleteAccountModal from "./DeleteAccountModal";

export interface CvModalComponentStyles extends Theme {
  cvModalWrapperStyles: CreateCSSProperties | CSSProperties;
  exitIcon: CreateCSSProperties | CSSProperties;
}

interface Props {
  handleClose: () => void;
  open: boolean;
  password: string;
}

export type deleteAccountModalComponentClasses = "deleteAccountModalWrapperStyles" | "exitIcon";

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
      padding: "5rem"
    },
    exitIcon: {
      position: "absolute",
      top: 7.5,
      right: 7.5,
      color: theme.palette.secondary.main,
      cursor: "pointer"
    }
  });

  const styles = deleteAccountModalComponentStyles();

  return (
    <DeleteAccountModal password={password} open={open} handleClose={handleClose} styles={styles} />
  );
};

export default deleteAccountModalComponentWrapper;
