"use client";

import { createContext, useContext, useState } from "react";

const StoreContext = createContext();

export const StoreContextProvider = ({ children }) => {
  const [orderPrice, setOrderPrice] = useState(0);
  const [orderQuantity, setOrderQuantity] = useState(0);
  const [orderPlayerId, setOrderPlayerId] = useState("");

  return (
    <StoreContext.Provider
      value={{
        orderPrice,
        setOrderPrice,
        orderQuantity,
        setOrderQuantity,
        orderPlayerId,
        setOrderPlayerId,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
