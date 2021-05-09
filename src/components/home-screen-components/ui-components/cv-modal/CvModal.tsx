import React from "react";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import { CvModalComponentClasses } from "./index";
import { useTranslation } from "react-i18next";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Link } from "@material-ui/core";
import { routeFactory } from "../../../../RouteFactory";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

interface Props {
  styles: ClassNameMap<CvModalComponentClasses>;
  handleClose: () => void;
  open: boolean;
}

const LanguageModal: React.FC<Props> = ({ styles, handleClose, open }): JSX.Element => {
  const [t] = useTranslation("common");

  return (
    <Dialog
      className={styles.cvModalWrapperStyles}
      open={open}
      onClose={handleClose}
      aria-labelledby="draggable-dialog-title">
      <HighlightOffIcon className={styles.exitIcon} onClick={handleClose} />
      <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
        {t("cvModal.title")}
      </DialogTitle>
      <DialogContent>{t("cvModal.mainContent")}</DialogContent>
      <DialogActions>
        <Link href={routeFactory.cvPrintSv.main()} underline="none">
          <Button autoFocus color="primary" variant="contained">
            {t("cvModal.swedishCv")}
          </Button>
        </Link>
        <Link href={routeFactory.cvPrintEn.main()} underline="none">
          <Button autoFocus color="secondary" variant="contained">
            {t("cvModal.englishCv")}
          </Button>
        </Link>
      </DialogActions>
    </Dialog>
  );
};

export default LanguageModal;
