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

interface FileState {
  uploading: boolean;
  error: boolean;
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
  error: false,
  uploaded: false,
  image: null
};

export default function ProfileImageUploadModal({
  handleClose,
  open,
  header
}: ProfileModalProps): JSX.Element {
  const { t } = useTranslation("common");
  const [fileState, setFileState] = useState<FileState>({ ...initialState });

  const handleUpload = () => {
    setFileState({
      ...fileState,
      uploading: true
    });

    try {
      setTimeout(() => {
        setFileState({ ...initialState });
        handleClose();
      }, 1000);
    } catch (err) {
      console.error(err);
    }
  };

  const onImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileState({
      ...fileState,
      uploaded: true,
      image: e.target.files
    });
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
          className={fileState.uploaded ? styles.buttonsWrapperUploaded : styles.buttonsWrapper}>
          {fileState.uploaded && !fileState.uploading && (
            <Button autoFocus onClick={() => handleUpload()} color="primary">
              {t("buttonText.upload")}
            </Button>
          )}
          {fileState.uploaded && fileState.uploading && (
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
