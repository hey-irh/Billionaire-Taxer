import React, { useState, useEffect } from 'react';
import { useAppContext } from '../../Context';
import { useStatementContext } from '../../StatementContext';
import Grid from '@material-ui/core/Grid';
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
  const [abolish, setabolish] = useState(false);

  useEffect(() => {
    let energyhomecalc = parseInt(solarEnergy);
    setenergyhome(energyhomecalc * 1000 * 200);
  }, [remainingWealth, solarEnergy]);

  useEffect(() => {
    if (remainingWealth <= 1000000000) {
      setabolish(true);
    }
  }, [remainingWealth]);

  return (
    <div className='textBox'>
      <h2 className='tax'>
        Taxing {name} wealth by {tax}% could pay for:
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
        <div className='billionStatement'>
          {abolish && (
            <p>
              A billion dollars is more than any individual needs. <br></br>
              <br></br>
              Proposal's to abolishing billionaires would help close the gap
              between the world's richest and poorest and help create a fairer
              society.
            </p>
          )}
        </div>
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
