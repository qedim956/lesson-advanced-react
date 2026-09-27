import { api } from "../api";
import React, {
  cloneElement,
  Children,
  isValidElement,
  useState,
  useEffect,
} from "react";

export const DataSource = ({ getData = () => {}, resourceName, children }) => {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    (async () => {
      const data = await getData();
      setResource(data);
    })();
  }, [getData]);

  return (
    <>
      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          return cloneElement(child, { [resourceName]: resource });
        }

        return child;
      })}
    </>
  );
};
