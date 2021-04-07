import { AppBar, IconButton, Menu, MenuItem, Toolbar, Typography } from "@material-ui/core";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import { AccountCircle } from "@material-ui/icons";
import MenuIcon from '@material-ui/icons/Menu';
import React from "react";

interface Props {
  styles: ClassNameMap<TopBarClasses>;
  handleDrawerToggle: () => void;
}

export type TopBarClasses = "topBarStyle" | "toolBarStyle" | "menuButton";

const Topbar: React.FC<Props> = ({ styles, handleDrawerToggle }): JSX.Element => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event: any): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" className={styles.topBarStyle}>
      <Toolbar variant="dense" className={styles.toolBarStyle}>
        <Typography variant="h6" color="inherit">
          ProGen
        </Typography>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          className={styles.menuButton}>
          <MenuIcon />
        </IconButton>
        <div>
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
            open={open}
            onClose={handleClose}>
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
