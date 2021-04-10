import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Paper from "@material-ui/core/Paper";
import Draggable from "react-draggable";
import { useTranslation } from "react-i18next";
import styles from "./ComplementaryModalStyles.module.scss";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PaperComponent = (props: any): JSX.Element => {
  return (
    <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );
};

interface DraggableModalProps {
  handleClose: () => void;
  open: boolean;
  header: string;
  p1: string;
  p2?: string;
  p3?: string;
  p4?: string;
}

export default function DraggableDialog({
  handleClose,
  open,
  header,
  p1,
  p2,
  p3,
  p4
}: DraggableModalProps): JSX.Element {
  const { t } = useTranslation("common");

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title">
        <DialogTitle
          className={styles.draggableModalTitleStyle}
          style={{ cursor: "move" }}
          id="draggable-dialog-title">
          {header}
        </DialogTitle>
        <DialogContent>
          <DialogContentText className={styles.draggableModalDialogContent}>
            {p1}
            <br />
            <br />
            {p2}
            {p2 && (
              <>
                <br />
                <br />
              </>
            )}
            {p3}
            {p3 && (
              <>
                <br />
                <br />
              </>
            )}
            {p4}
            {p4 && (
              <>
                <br />
                <br />
              </>
            )}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            {t("buttonText.close")}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
