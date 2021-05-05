import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useTranslation } from "react-i18next";
import styles from "./ComplementaryModalStyles.module.scss";
import { useState } from "react";
import { CircularProgress } from "@material-ui/core";
import { deleteImage } from "../../../api/api-calls";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks/hooks";
import { Alert } from "@material-ui/lab";
import { setProfileImageData } from "../../../redux/reducers/user-data/actions";

type DeleteState = {
  error: null | string;
  isDeleting: boolean;
};

interface ProfileImageDeleteProps {
  handleClose: () => void;
  open: boolean;
  header: string;
}

const initialState: DeleteState = {
  error: null,
  isDeleting: false
};

export default function ConfirmProfileImageDeletionModal({
  handleClose,
  open,
  header
}: ProfileImageDeleteProps): JSX.Element {
  const { t } = useTranslation("common");
  const [deleteState, setDeleteState] = useState<DeleteState>({ ...initialState });
  const dispatch = useAppDispatch();
  const { userDataState } = useAppSelector((state) => state);

  const handledDeleteProfileImage = async (): Promise<void> => {
    if (!userDataState.publicId) {
      setDeleteState({ ...deleteState, error: t("deleteProfileImageError") });
      return;
    }

    setDeleteState({ ...deleteState, isDeleting: true });

    try {
      await deleteImage(userDataState.publicId);

      const imageData = {
        profileImage: "",
        profileImagePublicId: ""
      };

      dispatch(setProfileImageData(imageData));

      setDeleteState({ ...initialState });
      handleClose();
    } catch (err) {
      setDeleteState({ ...initialState, error: err.response.data.message || err.message });
      console.error(err);
    }
  };

  const removeDeleteError = (): void => {
    setDeleteState({ ...initialState });
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="draggable-dialog-title">
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
          {header}
        </DialogTitle>
        <DialogActions className={styles.buttonsWrapperUploaded}>
          {deleteState.error && (
            <Alert onClose={() => removeDeleteError()} severity="error">
              <p>{deleteState.error}</p>
            </Alert>
          )}
          {!deleteState.isDeleting && !deleteState.error && (
            <Button autoFocus onClick={() => handledDeleteProfileImage()} color="primary">
              {t("buttonText.deleteImage")}
            </Button>
          )}
          {deleteState.isDeleting && !deleteState.error && (
            <CircularProgress className={styles.circularProgress} size={20} />
          )}
          <Button autoFocus onClick={handleClose} color="secondary">
            {t("buttonText.close")}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
