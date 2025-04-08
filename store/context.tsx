import React, { createContext, useState, useContext, ReactNode } from "react";

interface StoreContextType {
  itemsList: string[];
  setItemsList: React.Dispatch<React.SetStateAction<string[]>>;
  address: string | null;
  setAddress: React.Dispatch<React.SetStateAction<string | null>>;
}

const StoreContext = createContext<StoreContextType>({
  itemsList: [],
  setItemsList: () => {},
  address: null,
  setAddress: () => {},
});

export const StoreProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [itemsList, setItemsList] = useState<string[]>([]);
  const [address, setAddress] = useState<string | null>(null);

  return (
    <StoreContext.Provider
      value={{ itemsList, setItemsList, address, setAddress }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
