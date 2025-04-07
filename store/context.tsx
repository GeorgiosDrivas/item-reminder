import React, { createContext, useState, useContext, ReactNode } from "react";

interface StoreContextType {
  itemsList: string[];
  setItemsList: React.Dispatch<React.SetStateAction<string[]>>;
}

const StoreContext = createContext<StoreContextType>({
  itemsList: [],
  setItemsList: () => {},
});

export const StoreProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [itemsList, setItemsList] = useState<string[]>([]);

  return (
    <StoreContext.Provider value={{ itemsList, setItemsList }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
