import React from "react";
import { HomeScreenClasses } from "./index";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import { useAppSelector, useAppDispatch } from "../../redux/hooks/hooks";
import { decrement, increment } from "../../redux/reducers/example/exampleReducer";

interface Props {
  styles: ClassNameMap<HomeScreenClasses>;
}

const HomeScreen: React.FC<Props> = ({ styles }): JSX.Element => {
  const count = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  return (
    <div className={styles.pageWrapperStyles}>
      {count.counter.value}
      <button onClick={() => dispatch(increment())}>INCREMENT</button>
      <button onClick={() => dispatch(decrement())}>DECREMENT</button>
      <p>Home Screen!</p>
    </div>
  );
};

export default HomeScreen;
