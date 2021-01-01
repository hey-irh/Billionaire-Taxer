import React from 'react';
import { useAppContext } from '../../Context';
import { useStatementContext } from '../../StatementContext';
import Paper from '@material-ui/core/Paper';

import Paragraph from '../Paragraphs/Paragraphs';
import './Statements.css';

function Statements() {
  const { name, tax } = useAppContext();
  const {
    usaSchools,
    waterWells,
    hospitals,
    cash,
    africaSchools,
    uniScolarship,
    bikes,
    clothing,
    homelessNights,
  } = useStatementContext();

  return (
    <div className='textBox'>
      <h2 className='tax'>
        By taxing {name} wealth {tax}% it could pay for:
      </h2>
      <Paragraph ItemNumber={hospitals} text={'Hospitals in USA'} emoji='🏥' />
      <Paragraph
        ItemNumber={waterWells}
        text={'Water wells in Africa'}
        emoji='🚰'
      />

      <Paragraph
        ItemNumber={clothing}
        text={'Winter clothing for a child'}
        emoji='🧤'
      />
      <Paragraph
        ItemNumber={usaSchools}
        text={'Median sized schools in USA'}
        emoji='📚'
      />
      <Paragraph
        ItemNumber={cash}
        text={'Cash per person in the US'}
        emoji='💸'
      />
      <Paragraph
        ItemNumber={africaSchools}
        text={'Secondary schools in Africa'}
        emoji='✏️'
      />
      <Paragraph
        ItemNumber={uniScolarship}
        text={'Full university scolarships in USA'}
        emoji='👩‍🎓'
      />
      <Paragraph
        ItemNumber={bikes}
        text={'Bikes for school children & health workers'}
        emoji='🚲'
      />
      <Paragraph
        ItemNumber={homelessNights}
        text={'nights in a homeless shelter'}
        emoji='🛏'
      />
    </div>
  );
}

export default Statements;
