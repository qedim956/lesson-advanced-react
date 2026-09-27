import { api } from "../api";
import React, {
  cloneElement,
  Children,
  isValidElement,
  useState,
  useEffect,
} from "react";

export const ResourceLoader = ({ resourceUrl, resourceName, children }) => {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await api.get(resourceUrl);
      setResource(response.data);
    })();
  }, [resourceUrl]);

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
