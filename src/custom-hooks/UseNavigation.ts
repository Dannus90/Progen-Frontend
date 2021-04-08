import { useHistory } from "react-router-dom";

interface NavigationObject {
  navigateTo: (location: string) => void;
}

export const useNavigation = (): NavigationObject => {
  const history = useHistory();

  const navigateTo = (location: string): void => {
    history.push(location);
  };

  return { navigateTo };
};
