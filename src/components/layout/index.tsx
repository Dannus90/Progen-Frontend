import React from "react";
import TopBar from "./topbar/index";
import Drawer from "./drawer/index";

const Layout: React.FC = (): JSX.Element => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = (): void => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <TopBar handleDrawerToggle={handleDrawerToggle} />
      <Drawer handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen} />
    </>
  );
};

export default Layout;
