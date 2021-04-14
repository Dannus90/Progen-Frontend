import React from "react";
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
  Typography,
  useTheme
} from "@material-ui/core";
import { MainTheme } from "../../../../styles/theme";

interface Props {
  styles: ClassNameMap<ProfileCardComponentClasses>;
}

const ProfileCardComponent: React.FC<Props> = ({ styles }): JSX.Element => {
  const [t] = useTranslation("home");

  return (
    <>
      <Card className={styles.profileCardWrapperStyles}>
        <CardActionArea className={styles.cardActionAreaStyle}>
          <CardContent className={styles.cardContentStyle}>
            <Typography gutterBottom variant="h5" component="h2">
              Daniel Persson
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Gothenburg, Sweden
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            alt="Profile image"
            height="140"
            className={styles.profileImageStyle}
            image="./assets/images/SmallProfile.jpg"
            title="Contemplative Reptile"
          />
        </CardActionArea>
        <CardActions className={styles.cardActionsStyle}>
          <Button size="small" color="primary" className={styles.cardButtonAddImageStyles}>
            {t("profileCard.uploadImage")}
          </Button>
          <Button size="small" className={styles.cardButtonRemoveImageStyles}>
            {t("profileCard.removeImage")}
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default ProfileCardComponent;
