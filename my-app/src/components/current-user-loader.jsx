import { api } from "../api";
import React, {
  cloneElement,
  Children,
  isValidElement,
  useState,
  useEffect,
} from "react";

export const CurrentUserLoader = ({ children }) => {
  const [user, setUser] = useState(null);

  console.log('render sayi')

  useEffect(() => {
    (async () => {
      const response = await api.get("/current-user");
      console.log({response})
      setUser(response.data);
    })();
  }, []);

  return (
    <>
      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          return cloneElement(child, { user });
        }

        return child;
      })}
    </>
  );
};
