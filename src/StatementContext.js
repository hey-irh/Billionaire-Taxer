import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAppContext } from './Context';

const statementContext = createContext(null);

export function StatementProvider({ children }) {
  const { billionaire, remainingWealth } = useAppContext();
  const [usaSchools, setUsaSchools] = useState(0);
  const [waterWells, setwaterWells] = useState(0);
  const [hospitals, sethospitals] = useState(0);
  const [cash, setcash] = useState(0);
  const [africaSchools, setAfricaSchools] = useState(0);
  const [uniScolarship, setUniScolarship] = useState(0);
  const [bikes, setbikes] = useState(0);
  const [clothing, setclothing] = useState(0);
  const [homelessNights, sethomelessNights] = useState(0);

  useEffect(() => {
    setwaterWells(
      Math.round((billionaire - remainingWealth) / 8000).toLocaleString()
    );
    setUsaSchools(
      Math.round((billionaire - remainingWealth) / 16269543).toLocaleString()
    );
    sethospitals(
      Math.round((billionaire - remainingWealth) / 112500000).toLocaleString()
    );
    setcash(
      `$${Math.round(
        (billionaire - remainingWealth) / 328200000
      ).toLocaleString()}`
    );
    setAfricaSchools(
      Math.round((billionaire - remainingWealth) / 46639).toLocaleString()
    );
    setUniScolarship(
      Math.round((billionaire - remainingWealth) / 60000).toLocaleString()
    );
    setbikes(
      Math.round((billionaire - remainingWealth) / 199).toLocaleString()
    );
    setclothing(
      Math.round((billionaire - remainingWealth) / 59).toLocaleString()
    );
    sethomelessNights(
      Math.round((billionaire - remainingWealth) / 25).toLocaleString()
    );
  }, [remainingWealth]);

  return (
    <statementContext.Provider
      value={{
        usaSchools: usaSchools,
        waterWells: waterWells,
        hospitals: hospitals,
        cash: cash,
        africaSchools: africaSchools,
        uniScolarship: uniScolarship,
        bikes: bikes,
        clothing: clothing,
        homelessNights: homelessNights,
      }}
    >
      {children}
    </statementContext.Provider>
  );
}

export function useStatementContext() {
  return useContext(statementContext);
}
