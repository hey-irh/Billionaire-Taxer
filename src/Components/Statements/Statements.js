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
      <div className='networth'>
        <h2>
          You've reduced {name} Net Worth to: ${remainingWealth.toLocaleString()}
        </h2>
        <Paragraph
          ItemNumber={hospitals}
          text={'hospitals in USA'}
          emoji='hospitals'
          firstStatement='true'
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
    </div>
  );
}

export default Statements;
