import React from 'react';
import { useAppContext } from '../../Context';
import { useStatementContext } from '../../StatementContext';

import Paragraph from '../Paragraphs/Paragraphs';
import './Statements.css';

function Statements() {
  const { name, remainingWealth, tax } = useAppContext();
  const {
    usaSchools,
    waterWells,
    hospitals,
    cash,
    africaSchools,
    UniScolarship,
  } = useStatementContext();

  return (
    <div className='textBox'>
      <h2 className='tax'>
        By taxing {name} {tax}% it could pay for:
      </h2>
      <Paragraph
        ItemNumber={hospitals}
        text={'hospitals in USA'}
        emoji='hospitals'
      />
      <Paragraph
        ItemNumber={cash}
        text={'cash per person in USA'}
        emoji='$$$'
      />
      <Paragraph
        ItemNumber={usaSchools}
        text={'median sized schools in USA'}
        emoji='schools'
      />
      <Paragraph
        ItemNumber={waterWells}
        text={'water wells in Africa'}
        emoji='🚰'
      />
      <Paragraph
        ItemNumber={africaSchools}
        text={'secondary schools in Africa'}
        emoji='👩‍🏫'
      />
      <Paragraph
        ItemNumber={UniScolarship}
        text={'full university scolarships'}
        emoji='👩‍🎓'
      />
    </div>
  );
}

export default Statements;
