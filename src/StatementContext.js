import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAppContext } from './Context';

const statementContext = createContext(null);

export function StatementProvider({ children }) {
  const { billionaire, remainingWealth } = useAppContext();
  const [usaSchools, setUsaSchools] = useState(0);
  const [solarEnergy, setsolarEnergy] = useState(0);
  const [hospitals, sethospitals] = useState(0);
  const [cash, setcash] = useState(0);
  const [schoolMeals, setschoolMeals] = useState(0);
  const [uniScolarship, setUniScolarship] = useState(0);
  const [covid, setcovid] = useState(0);
  const [clothing, setclothing] = useState(0);
  const [homelessNights, sethomelessNights] = useState(0);
  const [cancerTreatment, setcancerTreatment] = useState(0);
  const [houses, sethouses] = useState(0);
  const [libraries, setlibraries] = useState(0);
  const [playground, setplayground] = useState(0);
  const [mileRoad, setmileRoad] = useState(0);

  useEffect(() => {
    setsolarEnergy(
      Math.round((billionaire - remainingWealth) / 1000).toLocaleString()
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
    setschoolMeals(
      Math.round((billionaire - remainingWealth) / 2.48).toLocaleString()
    );
    setUniScolarship(
      Math.round((billionaire - remainingWealth) / 60000).toLocaleString()
    );
    setcovid(Math.round((billionaire - remainingWealth) / 20).toLocaleString());

    setplayground(
      Math.round((billionaire - remainingWealth) / 29000).toLocaleString()
    );
    setclothing(
      Math.round((billionaire - remainingWealth) / 59).toLocaleString()
    );
    sethomelessNights(
      Math.round((billionaire - remainingWealth) / 25).toLocaleString()
    );
    setcancerTreatment(
      Math.round((billionaire - remainingWealth) / 150000).toLocaleString()
    );
    sethouses(
      Math.round((billionaire - remainingWealth) / 240000).toLocaleString()
    );
    setlibraries(
      Math.round((billionaire - remainingWealth) / 11000000).toLocaleString()
    );
    setmileRoad(
      Math.round((billionaire - remainingWealth) / 28020).toLocaleString()
    );
  }, [remainingWealth]);

  return (
    <statementContext.Provider
      value={{
        usaSchools: usaSchools,
        solarEnergy: solarEnergy,
        hospitals: hospitals,
        cash: cash,
        schoolMeals: schoolMeals,
        uniScolarship: uniScolarship,
        covid: covid,
        clothing: clothing,
        homelessNights: homelessNights,
        cancerTreatment: cancerTreatment,
        houses: houses,
        libraries: libraries,
        playground: playground,
        mileRoad: mileRoad,
      }}
    >
      {children}
    </statementContext.Provider>
  );
}

export function useStatementContext() {
  return useContext(statementContext);
}
