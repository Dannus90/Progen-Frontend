import { useHistory } from "react-router-dom";

interface ReturnObject {
  navigateTo: (location: string) => void;
}

export const useNavigation = (): ReturnObject => {
  const history = useHistory();

  const navigateTo = (location: string): void => {
    history.push(location);
  };

  return { navigateTo };
};
