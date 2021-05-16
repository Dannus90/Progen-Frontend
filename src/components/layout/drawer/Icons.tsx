import { ContactSupportOutlined, Dashboard, Group } from "@material-ui/icons";

export const listIconsUpper = [
  {
    name: "dashboard",
    icon: <Dashboard />,
    navigateTo: "/home"
  },
  {
    name: "team",
    icon: <Group />,
    navigateTo: "/your-team"
  }
];

export const listIconsLower = [
  {
    name: "support",
    icon: <ContactSupportOutlined />,
    navigateTo: "/support"
  }
];
