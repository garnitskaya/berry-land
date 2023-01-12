import { useEffect, useState } from "react";

type useValidationType = (
  value: string,
  validations: object
) => {
  isEmpty: string;
  valueValid: boolean;
};

export const useValidation: useValidationType = (value, validations) => {
  const [isEmpty, setIsEmpty] = useState("Заполните поле");
  const [valueValid, setValueValid] = useState(false);

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case "isEmpty":
          value ? setIsEmpty("") : setIsEmpty("Заполните поле");
          break;
        default:
          break;
      }
    }
  }, [value]);

  useEffect(() => {
    isEmpty ? setValueValid(false) : setValueValid(true);
  }, [isEmpty]);

  return { isEmpty, valueValid };
};
