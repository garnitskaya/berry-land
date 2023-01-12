import { useState, useLayoutEffect } from "react";

const queries = [
  "(max-width: 768px)",
  "(max-width: 992px)"
];

type TypeQueries = {
  isMobile: boolean;
  isTablet: boolean;
};

export const useMatchMedia = () => {
  const mediaQueryLists = queries.map((query) => matchMedia(query));

  const getValues = () => mediaQueryLists.map((list) => list.matches);

  const [values, setValues] = useState(getValues);

  useLayoutEffect(() => {
    const handler = () => setValues(getValues);

    mediaQueryLists.forEach((list) => list.addEventListener("change", handler));

    return () =>
      mediaQueryLists.forEach((list) =>
        list.removeEventListener("change", handler)
      );
  }, []);

  return ["isMobile", "isTablet"].reduce(
    (acc, screen, index) => ({
      ...acc,
      [screen]: values[index],
    }),
    {} as TypeQueries
  );
};
