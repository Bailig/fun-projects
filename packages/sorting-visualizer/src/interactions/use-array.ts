import { randomArray } from "@fun-projects/utils";
import { useCallback, useRef, useState } from "react";

export const useArray = () => {
  const arrayLengthRef = useRef(15);
  const generateRandomArray = () =>
    randomArray(arrayLengthRef.current, arrayLengthRef.current * 2);
  const [array, setArray] = useState(generateRandomArray());

  const setRandomArray = useCallback(() => {
    setArray(generateRandomArray());
  }, []);

  return {
    arrayLengthRef,
    array,
    setRandomArray,
  };
};
