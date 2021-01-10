import React, { useState, useEffect } from 'react';
import { useAppContext } from '../../Context';
import { useStatementContext } from '../../StatementContext';

import Paragraph from '../Paragraphs/Paragraphs';
import './Statements.css';

function Statements() {
  const { name, tax, remainingWealth } = useAppContext();
  const {
    usaSchools,
    solarEnergy,
    hospitals,
    cash,
    schoolMeals,
    uniScolarship,
    covid,
    clothing,
    homelessNights,
    cancerTreatment,
    houses,
    libraries,
    playground,
    mileRoad,
  } = useStatementContext();
  const [energyhome, setenergyhome] = useState(0);

  useEffect(() => {
    let energyhomecalc = parseInt(solarEnergy);
    setenergyhome(energyhomecalc * 1000 * 200);
  }, [remainingWealth, solarEnergy]);

  return (
    <div className='textBox'>
      <h2 className='tax'>
        By taxing {name} wealth {tax}% it could pay for:
      </h2>
      <Paragraph
        ItemNumber={hospitals}
        text={'new hospitals in the US'}
        emoji='🏥'
      />
      <Paragraph
        ItemNumber={solarEnergy}
        text={`kilowatt's of solar energy to supply ${energyhome} homes`}
        emoji='🌞'
      />

      <Paragraph
        ItemNumber={clothing}
        text={'winter clothing for a child'}
        emoji='🧤'
      />
      <Paragraph
        ItemNumber={usaSchools}
        text={'median sized schools in the US'}
        emoji='📚'
      />
      <Paragraph
        ItemNumber={cash}
        text={'cash per person in the US'}
        emoji='💸'
      />
      <Paragraph
        ItemNumber={schoolMeals}
        text={'elementary school meals'}
        emoji='🍛'
      />
      <Paragraph
        ItemNumber={uniScolarship}
        text={'full US university scolarships'}
        emoji='👩‍🎓'
      />
      <Paragraph
        ItemNumber={covid}
        text={'Pfizer COVID vaccinations'}
        emoji='💉'
      />
      <Paragraph
        ItemNumber={homelessNights}
        text={'nights in a homeless shelter'}
        emoji='🛏'
      />
      <Paragraph
        ItemNumber={cancerTreatment}
        text={'patients cancer treatment'}
        emoji='🚑'
      />
      <Paragraph ItemNumber={libraries} text={'US libraries'} emoji='📚' />
      <Paragraph
        ItemNumber={mileRoad}
        text={'miles of highway road repaired'}
        emoji='🚦'
      />
      <Paragraph ItemNumber={houses} text={'avg. homes in the US'} emoji='🏡' />
      <Paragraph
        ItemNumber={playground}
        text={'playgrounds for kids'}
        emoji='🪁'
      />
    </div>
  );
}

export default Statements;
