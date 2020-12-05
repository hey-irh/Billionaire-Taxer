import React, { createContext, useContext, useState } from "react";

const appContext = createContext(null);

export function AppProvider({ children }) {
  const [billionaire, setbillionaire] = useState(183600000000);
  const [name, setname] = useState("Jeff Bezos");
  const [remainingWealth, setremainingWealth] = useState(billionaire);

  return (
    <appContext.Provider
      value={{
        billionaire: billionaire,
        setbillionaire: setbillionaire,
        name: name,
        setname: setname,
        remainingWealth: remainingWealth,
        setremainingWealth: setremainingWealth,
      }}
    >
      {children}
    </appContext.Provider>
  );
}

export function useAppContext() {
  return useContext(appContext);
}
