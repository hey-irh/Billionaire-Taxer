import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    padding: 5,
    backgroundColor: '#282c34;',
  },
  cell: {
    color: 'white',
    padding: 0.5,
  },
});

function createData(name, calories) {
  return { name, calories };
}

const rows = [
  createData(
    `Children's winter clothing: $59`,
    `Median sized US school: $16,269,543`
  ),
  createData(`Elementary school seal: $2.48`, `University scolarship: $60,000`),
  createData(`Library: $11,000,000`, `Pfizer COVID vaccination: $20`),
  createData(
    `A night in a homeless shelter: $25`,
    `Cancer treatment: $150,000`
  ),
  createData(`1 miles of highway $28,020`, `Avg. homes in the US $240,000`),
];

export default function TableData() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell className='Cell'>Hospital: $112,500,000</TableCell>
            <TableCell align='right'>Kilowatt of solar energy: $1000</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component='th' scope='row'>
                {row.name}
              </TableCell>
              <TableCell align='right'>{row.calories}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

//
// import React from 'react';
// import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';
// import { FixedSizeList } from 'react-window';
// import './Table.css';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: '100%',
//     height: 150,
//     maxWidth: 300,
//     backgroundColor: '#282c34',
//   },
// }));

// let text = [
//   `- Hospital: $112,500,000`,
//   `- Kilowatt of solar energy: $1000`,
//   `- Children's winter clothing: $59`,
//   `- Median sized US school: $16,269,543`,
//   `- Elementary school seal: $2.48`,
//   `- University scolarship: $60,000`,
//   `- Library: $11,000,000`,
//   `- Pfizer COVID vaccination: $20`,
//   `- A night in a homeless shelter: $25`,
//   `- Cancer treatment: $150,000`,
//   `- 1 miles of highway $28,020`,
//   `- Avg. homes in the US $240,000`,
// ];

// function renderRow(props) {
//   const { index, style } = props;

//   return (
//     <ListItem button style={style} key={index}>
//       <ListItemText primary={text[index]} />
//     </ListItem>
//   );
// }

// renderRow.propTypes = {
//   index: PropTypes.number.isRequired,
//   style: PropTypes.object.isRequired,
// };

// function Table() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <div>
//         <h3>Cost per single value used:</h3>
//         <FixedSizeList height={150} width={600} itemSize={46} itemCount={12}>
//           {renderRow}
//         </FixedSizeList>
//       </div>
//     </div>
//   );
// }

// export default Table;
