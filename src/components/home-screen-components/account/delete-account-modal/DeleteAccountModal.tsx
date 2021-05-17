import React from "react";
import withStyles, { ClassNameMap } from "@material-ui/core/styles/withStyles";
import { useTranslation } from "react-i18next";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Link } from "@material-ui/core";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { deleteAccountModalComponentClasses } from ".";

interface Props {
  styles: ClassNameMap<deleteAccountModalComponentClasses>;
  handleClose: () => void;
  open: boolean;
  password: string;
}

const DeleteButton = withStyles({
  root: {
    background: "linear-gradient(45deg, #e5342a 30%, #e5342a 90%)",
    borderRadius: 4,
    border: 0,
    color: "#fff",
    height: 36,
    padding: "0 40px",
    boxShadow: "0 1px 2px 1px rgb(255 105 135 / 20%)"
  },
  label: {
    textTransform: "capitalize"
  }
})(Button);

const DeleteAccountModal: React.FC<Props> = ({ styles, handleClose, open, password }): JSX.Element => {
  const [t] = useTranslation("common");

  return (
    <Dialog
      className={styles.deleteAccountModalWrapperStyles}
      open={open}
      onClose={handleClose}
      aria-labelledby="draggable-dialog-title">
      <HighlightOffIcon className={styles.exitIcon} onClick={handleClose} />
      <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
        {t("deleteAccountModal.title")}
      </DialogTitle>
      <DialogContent>{t("deleteAccountModal.mainContent")}</DialogContent>
      <DialogActions>
        <DeleteButton autoFocus color="primary" variant="contained">
          {t("deleteAccountModal.confirm")}
        </DeleteButton>
        <Button autoFocus color="secondary" variant="contained" onClick={handleClose}>
          {t("deleteAccountModal.neglect")}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteAccountModal;
