import React, { useMemo, useState } from "react";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import { ProfileCardComponentClasses } from "./index";
import { useTranslation } from "react-i18next";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography
} from "@material-ui/core";
import { useAppSelector } from "../../../../redux/hooks/hooks";
import { getProfileCardState } from "./profile-card-transformers";
import { getProfileCardDateText } from "../../../../utils/dates/date-helper";
import ProfileImageUploadModal from "../../../common/modals/ProfileImageUploadModal";
import ConfirmProfileImageDeletionModal from "../../../common/modals/ConfirmDeletionModal";

interface Props {
  styles: ClassNameMap<ProfileCardComponentClasses>;
}

const ProfileCardComponent: React.FC<Props> = ({ styles }): JSX.Element => {
  const [t, i18n] = useTranslation("home");
  const [open, setOpen] = useState<boolean>(false);
  const { userDataState } = useAppSelector((state) => state);
  const [deleteOpen, setDeleteOpen] = useState<boolean>(false);

  const handleClose = (): void => {
    setOpen(false);
  };

  const handleDeleteClose = (): void => {
    setDeleteOpen(false);
  };

  const recentState = useMemo(() => {
    return getProfileCardState(userDataState, i18n);
  }, [userDataState, i18n.language]);

  const resolveProfileImage = (): string => {
    return userDataState.profileImage
      ? userDataState.profileImage
      : "./assets/images/personPlaceholder.png";
  };

  const displayLivingPlace = (): string => {
    if (recentState.city && recentState.country)
      return `${recentState.city}, ${recentState.country}`;
    if (recentState.city) return `${recentState.city}`;
    if (recentState.country) return `${recentState.country}`;

    return "";
  };

  return (
    <>
      <Card className={styles.profileCardWrapperStyles}>
        <CardActionArea className={styles.cardActionAreaStyle}>
          <CardContent className={styles.cardContentStyle}>
            <Typography gutterBottom variant="h5" component="h2">
              {recentState.userName}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {displayLivingPlace()}
              {displayLivingPlace() && <br />}
              {getProfileCardDateText(i18n)}
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            alt="Profile image"
            height="140"
            className={styles.profileImageStyle}
            image={resolveProfileImage()}
            title="Contemplative Reptile"
          />
        </CardActionArea>
        <CardActions className={styles.cardActionsStyle}>
          <Button
            size="small"
            color="primary"
            className={styles.cardButtonAddImageStyles}
            onClick={() => setOpen(true)}>
            {t("profileCard.uploadImage")}
          </Button>
          <Button
            size="small"
            className={styles.cardButtonRemoveImageStyles}
            onClick={() => setDeleteOpen(true)}>
            {t("profileCard.removeImage")}
          </Button>
        </CardActions>
        <ProfileImageUploadModal
          handleClose={handleClose}
          open={open}
          header={t("profileCard.profileUploadHeader")}
        />
        <ConfirmProfileImageDeletionModal
          handleClose={handleDeleteClose}
          open={deleteOpen}
          header={t("profileCard.deleteImageHeader")}
        />
      </Card>
    </>
  );
};

export default ProfileCardComponent;
