import * as React from 'react';
import TableCell from '@mui/material/TableCell';
import TextField from '@mui/material/TextField';

const NewUserRowContent = ({actions}) => {
  const { handleChange } = actions;
  return (
    <React.Fragment>
      <TableCell key='name'>
        <TextField id="name" name="name" label="Name" variant="standard" onChange={handleChange} />
      </TableCell>
      <TableCell key='country'>
        <TextField id="country" name="country" label="Country" variant="standard" onChange={handleChange} />
      </TableCell>
      <TableCell key='email'>
        <TextField id="email" name="email" label="Email" variant="standard" onChange={handleChange} />
      </TableCell>
      <TableCell key='phone'>
        <TextField id="phone" name="phone" label="Phone" variant="standard" onChange={handleChange} />
      </TableCell>
      <TableCell key='delete'>
      </TableCell>
    </React.Fragment>
  );
}

export { NewUserRowContent };