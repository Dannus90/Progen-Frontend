import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useTranslation } from "react-i18next";
import { CloudUpload } from "@material-ui/icons";
import styles from "./ComplementaryModalStyles.module.scss";
import React, { useState } from "react";
import { Avatar, Typography } from "@material-ui/core";

interface FileState {
  uploading: boolean;
  error: boolean;
  uploaded: boolean;
  image: FileList | null;
}

interface DraggableModalProps {
  handleClose: () => void;
  open: boolean;
  header: string;
}

export default function ProfileImageUploadModal({
  handleClose,
  open,
  header
}: DraggableModalProps): JSX.Element {
  const { t } = useTranslation("common");
  const [fileState, setFileState] = useState<FileState>({
    uploading: false,
    error: false,
    uploaded: false,
    image: null
  });

  const handleUpload = () => {
    console.log("TIME FOR UPLOAD!");
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
          {fileState.uploaded && (
            <Button autoFocus onClick={() => handleUpload()} color="primary">
              {t("buttonText.upload")}
            </Button>
          )}
          <Button autoFocus onClick={handleClose} color="secondary">
            {t("buttonText.close")}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
