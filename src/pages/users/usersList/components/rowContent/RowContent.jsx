import * as React from 'react';
import TableCell from '@mui/material/TableCell';
import { headerColumns } from '../fixedHeaderContent/FixedHeaderContent';
import { NewUserRowContent } from '../newUserRowContent/NewUserRowContent';

const RowContent = (actions, newUserErrors) => (_index, row) => {

  return (
    <React.Fragment>
      {
        row.isNewRow ? <NewUserRowContent actions={actions} newUserErrors={newUserErrors} /> :
          (<React.Fragment>
            {headerColumns.map(({dataKey, numeric, display}) => (
              <TableCell
              key={dataKey}
              align={numeric || false ? 'right' : 'left'}
              >
                {display ? display(row, actions) : row[dataKey]}
              </TableCell>
            ))}
          </React.Fragment>)
      }
    </React.Fragment>
  );
}

export { RowContent };