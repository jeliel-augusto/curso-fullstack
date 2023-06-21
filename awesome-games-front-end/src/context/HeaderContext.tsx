import { createContext, useState } from "react";

export const HeaderContext = createContext({ expanded: false });
export const HeaderContextProvider = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <HeaderContext.Provider
      value={{ expanded: expanded }}
    ></HeaderContext.Provider>
  );
};
