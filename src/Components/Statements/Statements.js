import React, { useState, useEffect } from "react";
import { useAppContext } from "../../Context";
import Paragraph from "../Paragraphs/Paragraphs";

function Statements() {
  const { billionaire, remainingWealth } = useAppContext();
  const [schools, setschools] = useState(0);
  const [waterPumps, setwaterPumps] = useState(0);

  useEffect(() => {
    setschools(
      Math.round(billionaire - remainingWealth / 16269543).toLocaleString()
    );
  });

  useEffect(() => {
    setwaterPumps(
      Math.round(billionaire - remainingWealth / 359).toLocaleString()
    );
  });
  console.log(schools);
  console.log(waterPumps);

  return (
    <div className="statements">
      <Paragraph ItemNumber={schools} text={"schools"} />
      <Paragraph ItemNumber={waterPumps} text={"water pumps"} />
    </div>
  );
}

export default Statements;
