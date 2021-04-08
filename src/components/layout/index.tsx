import React from "react";
import TopBar from "./topbar/index";
import Drawer from "./drawer/index";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }): JSX.Element => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = (): void => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <TopBar handleDrawerToggle={handleDrawerToggle} />
      <Drawer handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen} />
      {children}
    </>
  );
};

export default Layout;
