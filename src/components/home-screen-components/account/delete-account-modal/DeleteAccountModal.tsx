import React, { useMemo } from "react";
import withStyles, { ClassNameMap } from "@material-ui/core/styles/withStyles";
import { useTranslation } from "react-i18next";
import {
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle
} from "@material-ui/core";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { deleteAccountModalComponentClasses } from ".";
import { useMutation } from "@apollo/client";
import { DeleteAccountInput, DeleteAccountResponse } from "./interfaces/delete-account-interfaces";
import { DELETE_ACCOUNT } from "./gql";
import { Alert, AlertTitle } from "@material-ui/lab";
import { useNavigation } from "../../../../custom-hooks/UseNavigation";

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
    padding: "20px 40px",
    boxShadow: "0 1px 2px 1px rgb(255 105 135 / 20%)"
  },
  label: {
    textTransform: "capitalize"
  }
})(Button);

const DeleteAccountModal: React.FC<Props> = ({
  styles,
  handleClose,
  open,
  password
}): JSX.Element => {
  const [t] = useTranslation("common");
  const { navigateTo } = useNavigation();

  const [deleteAccount, { error, data, loading: isDeleting }] =
    useMutation<{
      authentication: DeleteAccountResponse;
      deleteAccountInput: DeleteAccountInput;
    }>(DELETE_ACCOUNT);

  const handleDeleteAccount = async () => {
    await deleteAccount({
      variables: {
        deleteAccountInput: {
          password
        }
      }
    });
  };

  useMemo(() => {
    if (data?.authentication.deleteAccount.statusCode === 200) {
      localStorage.removeItem("tokenData");
      return navigateTo("/login");
    }
  }, [data]);

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
      <DialogActions className={styles.buttonErrorContainer}>
        <div className={styles.buttonContainer}>
          <DeleteButton onClick={handleDeleteAccount} autoFocus color="primary" variant="contained">
            {t("deleteAccountModal.confirm")}
            {isDeleting && <CircularProgress size={20} color="inherit" />}
          </DeleteButton>
          <Button autoFocus color="secondary" variant="contained" onClick={handleClose}>
            {t("deleteAccountModal.neglect")}
          </Button>
        </div>
        {error && (
          <div className={styles.errorContainer}>
            <Alert className={`${styles.alertStyle}`} severity="error">
              <AlertTitle>Error</AlertTitle>
              {error &&
                error?.graphQLErrors.map(
                  (err) => `${err.extensions?.exception.statusCode} ${error?.message}`
                )}
            </Alert>
          </div>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default DeleteAccountModal;
