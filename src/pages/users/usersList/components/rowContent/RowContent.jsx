import * as React from 'react';
import TableCell from '@mui/material/TableCell';
import { headerColumns } from '../fixedHeaderContent/FixedHeaderContent';

const RowContent = (actions) => (_index, row) => {
  return (
    <React.Fragment>
      {headerColumns.map(({dataKey, numeric, display}) => (
        <TableCell
          key={dataKey}
          align={numeric || false ? 'right' : 'left'}
        >
          {display ? display(row, actions) : row[dataKey]}
        </TableCell>
      ))}
    </React.Fragment>
  );
}

export { RowContent };