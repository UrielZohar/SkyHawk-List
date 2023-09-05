import * as React from 'react';
import TableCell from '@mui/material/TableCell';

function RowContent(_index, row) {
  return (
    <React.Fragment>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          align={column.numeric || false ? 'right' : 'left'}
        >
          {column.display ? column.display(row) : row[column.dataKey]}
        </TableCell>
      ))}
    </React.Fragment>
  );
}

export { RowContent };