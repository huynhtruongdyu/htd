import { createContext, type PropsWithChildren } from "react";

export const AppContext = createContext({});
export const AppProvider = ({ children }: PropsWithChildren) => {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};
