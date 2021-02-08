import React from 'react';
import './Table.css';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Table() {
  return (
    <div className='Table'>
      <div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'
          >
            <p className='title'>Cost figures used</p>
          </AccordionSummary>
          <AccordionDetails>
            <table>
              <tr>
                <th colspan='1'>Cost per single value used:</th>
              </tr>
              <tr>
                <th>New hospitals in the US $112,500,000</th>
              </tr>
              <tr>
                <th>Kilowatt's of solar energy $1,000 </th>
              </tr>
              <tr>
                <th>Children's winter clothing: $59</th>
              </tr>
              <tr>
                <td>Median sized US school $16,269,543</td>
              </tr>
              <tr>
                <td>Elementary school meal $2.48 </td>
              </tr>
              <tr>
                <td>US university scolarships $60,000</td>
              </tr>
              <tr>
                <td>US library $11,000,000</td>
              </tr>
              <tr>
                <td>Pfizer COVID vaccinations $20</td>
              </tr>
              <tr>
                <td>1 nights in a homeless shelter $25</td>
              </tr>
              <tr>
                <td>Cancer treatment $150,000</td>
              </tr>
              <tr>
                <td>1 miles of highway $28,020</td>
              </tr>
              <tr>
                <td>Avg. homes in the US $240,000</td>
              </tr>
            </table>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}

export default Table;
