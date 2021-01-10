import React, { createContext, useContext, useState, useEffect } from 'react';

const appContext = createContext(null);

export function AppProvider({ children }) {
  const [billionaire, setbillionaire] = useState(186000000000);
  const [name, setname] = useState('Jeff Bezos');
  const [remainingWealth, setremainingWealth] = useState(billionaire);
  const [tax, setTax] = useState(0);

  return (
    <appContext.Provider
      value={{
        billionaire: billionaire,
        setbillionaire: setbillionaire,
        name: name,
        setname: setname,
        remainingWealth: remainingWealth,
        setremainingWealth: setremainingWealth,
        tax: tax,
        setTax: setTax,
      }}
    >
      {children}
    </appContext.Provider>
  );
}

export function useAppContext() {
  return useContext(appContext);
}
