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

  //Looking for collision using offsetTop
  // let P2 = document.getElementsByClassName('P2');
  // let P1 = document.getElementsByClassName('P1');

  // useEffect(() => {
  //   console.log(P2[0].offsetTop);
  //   if (P2[0].offsetTop - P1[0].offsetTop === 64) {
  //     console.log('collisison');
  //     console.log(P2[0].offsetTop);
  //   }
  // }, [P1, P2]);

  return (
    <div className='textBox'>
      <h2 className='tax'>
        By taxing {name} wealth {tax}% it could pay for:
      </h2>
      <div className='P1'>
        <Paragraph
          ItemNumber={hospitals}
          text={'new hospitals in the US'}
          emoji='🏥'
        />
      </div>
      <div className='P2'>
        <Paragraph
          ItemNumber={solarEnergy}
          text={`kilowatt's of solar energy to supply ${energyhome} homes`}
          emoji='🌞'
        />
      </div>
      <div className='P3'>
        <Paragraph
          ItemNumber={clothing}
          text={'winter clothing for a child'}
          emoji='🧤'
        />
      </div>
      <div className='P4'>
        <Paragraph
          ItemNumber={usaSchools}
          text={'median sized schools in the US'}
          emoji='📚'
        />
      </div>
      <div className='P5'>
        <Paragraph
          ItemNumber={cash}
          text={'cash per person in the US'}
          emoji='💸'
        />
      </div>
      <div className='P6'>
        <Paragraph
          ItemNumber={schoolMeals}
          text={'elementary school meals'}
          emoji='🍛'
        />
      </div>
      <div className='P7'>
        <Paragraph
          ItemNumber={uniScolarship}
          text={'full US university scolarships'}
          emoji='👩‍🎓'
        />
      </div>
      <div className='P8'>
        <Paragraph ItemNumber={libraries} text={'US libraries'} emoji='📚' />
      </div>
      <div className='P9'>
        <Paragraph
          ItemNumber={covid}
          text={'Pfizer COVID vaccinations'}
          emoji='💉'
        />
      </div>
      <div className='P10'>
        <Paragraph
          ItemNumber={homelessNights}
          text={'nights in a homeless shelter'}
          emoji='🛏'
        />
      </div>
      <div className='P11'>
        <Paragraph
          ItemNumber={cancerTreatment}
          text={'patients cancer treatment'}
          emoji='🚑'
        />
      </div>

      <div className='P12'>
        <Paragraph
          ItemNumber={mileRoad}
          text={'miles of highway road repaired'}
          emoji='🚦'
        />
      </div>
      <div className='P13'>
        <Paragraph
          ItemNumber={houses}
          text={'avg. homes in the US'}
          emoji='🏡'
        />
      </div>
      <div className='P14'>
        <Paragraph
          ItemNumber={playground}
          text={'childrens playgrounds'}
          emoji='🪁'
        />
      </div>
    </div>
  );
}

export default Statements;
