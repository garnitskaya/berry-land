import { useState } from "react";
import { useValidation } from ".";

type useInputType = (initialValue: string, validations: object) => {
  isEmpty: string;
  valueValid: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLFormElement>) => void;
  onBlur: () => void;
  isDirty: boolean;
  setEmptyValue: () => void;
};

export const useInput: useInputType = (initialValue, validations) => {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setIsDirty] = useState(false);
  const valid = useValidation(value, validations);

  const onChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    setValue(e.target.value);
  };

  const onBlur = () => {
    setIsDirty(true);
  };

  const setEmptyValue = () => {
    setValue("");
    setIsDirty(false);
  };

  return { value, onChange, onBlur, isDirty, setEmptyValue, ...valid };
};
