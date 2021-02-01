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

  //need to add in the missing figures to be zero as at the moment the state is reamining when you move up and down
  useEffect(() => {
    if (remainingWealth >= 165000000000) {
      //first 3
      sethospitals(
        Math.round(
          ((billionaire - remainingWealth) * 0.5) / 112500000
        ).toLocaleString()
      );
      setsolarEnergy(
        Math.round(
          ((billionaire - remainingWealth) * 0.25) / 1000
        ).toLocaleString()
      );
      setclothing(
        Math.round(
          ((billionaire - remainingWealth) * 0.25) / 59
        ).toLocaleString()
      );
      setUsaSchools(0);
      setcash(0);
      setschoolMeals(0);
      setUniScolarship(0);
      setlibraries(0);
      setcovid(0);
      sethomelessNights(0);
      setcancerTreatment(0);
      setmileRoad(0);
      sethouses(0);
      setplayground(0);
    } else if (
      remainingWealth < 165000000000 &&
      remainingWealth >= 133000000000
    ) {
      //first 6
      sethospitals(
        Math.round(
          ((billionaire - remainingWealth) * 0.3) / 112500000
        ).toLocaleString()
      );
      setsolarEnergy(
        Math.round(
          ((billionaire - remainingWealth) * 0.12) / 1000
        ).toLocaleString()
      );
      setclothing(
        Math.round(
          ((billionaire - remainingWealth) * 0.12) / 59
        ).toLocaleString()
      );
      setUsaSchools(
        Math.round(
          ((billionaire - remainingWealth) * 0.16) / 16269543
        ).toLocaleString()
      );
      setcash(
        `$${Math.round(
          ((billionaire - remainingWealth) * 0.2) / 328200000
        ).toLocaleString()}`
      );
      setschoolMeals(
        Math.round(
          ((billionaire - remainingWealth) * 0.1) / 2.48
        ).toLocaleString()
      );
      setUniScolarship(0);
      setlibraries(0);
      setcovid(0);
      sethomelessNights(0);
      setcancerTreatment(0);
      setmileRoad(0);
      sethouses(0);
      setplayground(0);
    }

    if (remainingWealth < 133000000000 && remainingWealth >= 100000000000) {
      //first 9
      sethospitals(
        Math.round(
          ((billionaire - remainingWealth) * 0.2) / 112500000
        ).toLocaleString()
      );
      setsolarEnergy(
        Math.round(
          ((billionaire - remainingWealth) * 0.09) / 1000
        ).toLocaleString()
      );
      setclothing(
        Math.round(
          ((billionaire - remainingWealth) * 0.09) / 59
        ).toLocaleString()
      );
      setUsaSchools(
        Math.round(
          ((billionaire - remainingWealth) * 0.09) / 16269543
        ).toLocaleString()
      );
      setcash(
        `$${Math.round(
          ((billionaire - remainingWealth) * 0.13) / 328200000
        ).toLocaleString()}`
      );
      setschoolMeals(
        Math.round(
          ((billionaire - remainingWealth) * 0.09) / 2.48
        ).toLocaleString()
      );
      setUniScolarship(
        Math.round(
          ((billionaire - remainingWealth) * 0.09) / 60000
        ).toLocaleString()
      );
      setlibraries(
        Math.round(
          ((billionaire - remainingWealth) * 0.09) / 11000000
        ).toLocaleString()
      );
      setcovid(
        Math.round(
          ((billionaire - remainingWealth) * 0.13) / 20
        ).toLocaleString()
      );
      sethomelessNights(0);
      setcancerTreatment(0);
      setmileRoad(0);
      sethouses(0);
      setplayground(0);
    }

    if (remainingWealth < 100000000000 && remainingWealth >= 71000000000) {
      //first 11
      setsolarEnergy(
        Math.round(
          ((billionaire - remainingWealth) * 0.06) / 1000
        ).toLocaleString()
      );
      setUsaSchools(
        Math.round(
          ((billionaire - remainingWealth) * 0.1) / 16269543
        ).toLocaleString()
      );
      sethospitals(
        Math.round(
          ((billionaire - remainingWealth) * 0.12) / 112500000
        ).toLocaleString()
      );
      setcash(
        `$${Math.round(
          ((billionaire - remainingWealth) * 0.12) / 328200000
        ).toLocaleString()}`
      );
      setschoolMeals(
        Math.round(
          ((billionaire - remainingWealth) * 0.06) / 2.48
        ).toLocaleString()
      );
      setUniScolarship(
        Math.round(
          ((billionaire - remainingWealth) * 0.07) / 60000
        ).toLocaleString()
      );
      setlibraries(
        Math.round(
          ((billionaire - remainingWealth) * 0.07) / 11000000
        ).toLocaleString()
      );
      setcovid(
        Math.round(
          ((billionaire - remainingWealth) * 0.1) / 20
        ).toLocaleString()
      );
      setclothing(
        Math.round(
          ((billionaire - remainingWealth) * 0.06) / 59
        ).toLocaleString()
      );
      sethomelessNights(
        Math.round(
          ((billionaire - remainingWealth) * 0.07) / 25
        ).toLocaleString()
      );
      setcancerTreatment(
        Math.round(
          ((billionaire - remainingWealth) * 0.1) / 150000
        ).toLocaleString()
      );
      setmileRoad(
        Math.round(
          ((billionaire - remainingWealth) * 0.07) / 28020
        ).toLocaleString()
      );
      sethouses(0);
      setplayground(0);
    } else if (remainingWealth < 71000000000) {
      //All options
      setsolarEnergy(
        Math.round(
          ((billionaire - remainingWealth) * 0.06) / 1000
        ).toLocaleString()
      );
      setUsaSchools(
        Math.round(
          ((billionaire - remainingWealth) * 0.08) / 16269543
        ).toLocaleString()
      );
      sethospitals(
        Math.round(
          ((billionaire - remainingWealth) * 0.1) / 112500000
        ).toLocaleString()
      );
      setcash(
        `$${Math.round(
          ((billionaire - remainingWealth) * 0.1) / 328200000
        ).toLocaleString()}`
      );
      setschoolMeals(
        Math.round(
          ((billionaire - remainingWealth) * 0.05) / 2.48
        ).toLocaleString()
      );
      setUniScolarship(
        Math.round(
          ((billionaire - remainingWealth) * 0.06) / 60000
        ).toLocaleString()
      );
      setlibraries(
        Math.round(
          ((billionaire - remainingWealth) * 0.06) / 11000000
        ).toLocaleString()
      );
      setcovid(
        Math.round(
          ((billionaire - remainingWealth) * 0.1) / 20
        ).toLocaleString()
      );
      setplayground(
        Math.round(
          ((billionaire - remainingWealth) * 0.06) / 29000
        ).toLocaleString()
      );
      setclothing(
        Math.round(
          ((billionaire - remainingWealth) * 0.05) / 59
        ).toLocaleString()
      );
      sethomelessNights(
        Math.round(
          ((billionaire - remainingWealth) * 0.06) / 25
        ).toLocaleString()
      );
      setcancerTreatment(
        Math.round(
          ((billionaire - remainingWealth) * 0.1) / 150000
        ).toLocaleString()
      );
      sethouses(
        Math.round(
          ((billionaire - remainingWealth) * 0.06) / 240000
        ).toLocaleString()
      );
      setmileRoad(
        Math.round(
          ((billionaire - remainingWealth) * 0.06) / 28020
        ).toLocaleString()
      );
    }
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
