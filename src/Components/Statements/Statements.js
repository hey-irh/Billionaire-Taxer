import React from 'react';
import { useAppContext } from '../../Context';
import { useStatementContext } from '../../StatementContext';

import Paragraph from '../Paragraphs/Paragraphs';
import './Statements.css';

function Statements() {
  const { name, remainingWealth } = useAppContext();
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
      <h2 className='networth'>
        You've reduced {name} Net Worth to: ${remainingWealth.toLocaleString()}
      </h2>
      <Paragraph
        ItemNumber={hospitals}
        text={'USA hospitals in USA'}
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
