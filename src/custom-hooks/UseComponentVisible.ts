import { useState, useEffect, useRef, Dispatch, SetStateAction } from "react";

interface ReturnData {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref: HTMLInputElement | any;
  isComponentVisible: boolean;
  setIsComponentVisible: Dispatch<SetStateAction<boolean>>;
}

export default function useComponentVisible(initialIsVisible: boolean): ReturnData {
  const [isComponentVisible, setIsComponentVisible] = useState(initialIsVisible);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useRef<HTMLInputElement | any>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current?.contains(event.target)) {
      setIsComponentVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  return { ref, isComponentVisible, setIsComponentVisible };
}
