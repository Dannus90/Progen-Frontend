import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useTranslation } from "react-i18next";
import { CloudUpload } from "@material-ui/icons";
import styles from "./ComplementaryModalStyles.module.scss";
import React, { useState } from "react";
import { Avatar, CircularProgress, Typography } from "@material-ui/core";
import { uploadImage } from "../../../api/api-calls";
import { useAppDispatch } from "../../../redux/hooks/hooks";
import { setProfileImageData } from "../../../redux/reducers/user-data/userDataReducer";
import { Alert } from "@material-ui/lab";

interface FileState {
  uploading: boolean;
  error: null | string;
  uploaded: boolean;
  image: FileList | null;
}

interface ProfileModalProps {
  handleClose: () => void;
  open: boolean;
  header: string;
}

const initialState: FileState = {
  uploading: false,
  error: null,
  uploaded: false,
  image: null
};

export default function ProfileImageUploadModal({
  handleClose,
  open,
  header
}: ProfileModalProps): JSX.Element {
  const { t } = useTranslation("home");
  const [fileState, setFileState] = useState<FileState>({ ...initialState });
  const dispatch = useAppDispatch();

  const handleUpload = async () => {
    if (!fileState.image) {
      return;
    }

    setFileState({
      ...fileState,
      uploading: true
    });

    try {
      const formData = new FormData();
      formData.append("file", fileState.image[0]);
      const res = await uploadImage(formData);

      dispatch(setProfileImageData(res.data));

      setFileState({ ...initialState });
      handleClose();
    } catch (err) {
      setFileState({ ...initialState, error: err.response.data.message || err.message });
    }
  };

  const onImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileState({
      ...fileState,
      uploaded: true,
      image: e.target.files
    });
  };

  const removeUploadError = (): void => {
    setFileState({ ...initialState, error: null });
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="draggable-dialog-title">
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
          {header}
        </DialogTitle>
        <DialogContent>
          <div className={styles.profileImageUploadWrapper}>
            <label htmlFor="image-upload" className={styles.iconWrapper}>
              <CloudUpload color="primary" fontSize="large" />
            </label>
            <input
              type="file"
              id="image-upload"
              multiple={false}
              style={{ display: "none" }}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => onImageUpload(e)}
            />
            {fileState.image && (
              <>
                <Avatar
                  alt="Preview image"
                  className={styles.avatarPreview}
                  src={fileState.image ? URL.createObjectURL(fileState.image[0]) : ""}
                />
                <Typography className={styles.imageText}>{fileState.image[0].name}</Typography>
              </>
            )}
          </div>
        </DialogContent>
        <DialogActions
          className={
            fileState.uploaded || fileState.error
              ? styles.buttonsWrapperUploaded
              : styles.buttonsWrapper
          }>
          {fileState.error && (
            <Alert onClose={() => removeUploadError()} severity="error">
              <p>{t("profileCard.uploadFail")}</p>
              <p>{fileState.error}</p>
            </Alert>
          )}
          {fileState.uploaded && !fileState.uploading && !fileState.error && (
            <Button autoFocus onClick={() => handleUpload()} color="primary">
              {t("common:buttonText.upload")}
            </Button>
          )}
          {fileState.uploaded && fileState.uploading && !fileState.error && (
            <CircularProgress className={styles.circularProgress} size={20} />
          )}
          <Button autoFocus onClick={handleClose} color="secondary">
            {t("common:buttonText.close")}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
