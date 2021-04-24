import {
  AppBar,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme
} from "@material-ui/core";
import LanguageIcon from "@material-ui/icons/Language";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import { AccountCircle } from "@material-ui/icons";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";
import { MainTheme } from "../../../styles/theme";
import { TopBarClasses } from ".";
import useComponentVisible from "../../../custom-hooks/UseComponentVisible";
import LanguagePicker from "../../common/language-picker/index";
import { useTranslation } from "react-i18next";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { accountClicked, profileClicked } from "../../../redux/reducers/user-data/generalReducer";

interface Props {
  styles: ClassNameMap<TopBarClasses>;
  handleDrawerToggle: () => void;
}

const TopBar: React.FC<Props> = ({ styles, handleDrawerToggle }): JSX.Element => {
  const { t } = useTranslation("common");
  const theme = useTheme<MainTheme>();
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);
  const screenSize = useMediaQuery(theme.breakpoints.up("md"));
  const [anchorEl, setAnchorEl] = React.useState<(EventTarget & HTMLButtonElement) | null>();
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleDisplayLanguagePicker = (): void => {
    setIsComponentVisible((prev) => !prev);
  };

  const handleMenu = (event: React.SyntheticEvent<HTMLButtonElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (): void => {
    setAnchorEl(null);
  };

  const handleCloseAccount = (): void => {
    history.push("/home");
    dispatch(accountClicked(true));
    setAnchorEl(null);
  };

  const handleCloseProfile = (): void => {
    history.push("/home");
    dispatch(profileClicked(true));
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed" className={styles.topBarStyle}>
      <Toolbar variant="dense" className={styles.toolBarStyle}>
        {screenSize && (
          <Link to="/home" className={styles.proGenSignature}>
            <Typography variant="h6" color="inherit">
              ProGen
            </Typography>
          </Link>
        )}

        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          className={styles.menuButton}>
          <MenuIcon />
        </IconButton>
        <div className={styles.languageProfileContainer}>
          <LanguageIcon
            color="primary"
            fontSize="large"
            className={styles.languageIcon}
            onClick={handleDisplayLanguagePicker}
          />
          <div ref={ref}>{isComponentVisible && <LanguagePicker isHome={true} />}</div>
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit">
            <AccountCircle />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right"
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right"
            }}
            className={styles.menu}
            open={open}
            onClose={handleClose}>
            <MenuItem onClick={handleCloseProfile}>{t("topBar.menu.profile")}</MenuItem>
            <MenuItem onClick={handleCloseAccount}>{t("topBar.menu.account")}</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
