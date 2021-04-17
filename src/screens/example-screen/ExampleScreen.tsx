import React from "react";
import { ExampleScreenClasses } from "./index";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import { useAppSelector, useAppDispatch } from "../../redux/hooks/hooks";
import { decrement, increment } from "../../redux/reducers/example/exampleReducer";

interface Props {
  styles: ClassNameMap<ExampleScreenClasses>;
}

const TestScreen: React.FC<Props> = ({ styles }): JSX.Element => {
  const count = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  return (
    <div className={styles.pageWrapperStyles}>
      {count.counterState.value}
      <button onClick={() => dispatch(increment())}>INCREMENT</button>
      <button onClick={() => dispatch(decrement())}>DECREMENT</button>
      <p>Home Screen!</p>
    </div>
  );
};

export default TestScreen;
