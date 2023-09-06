import * as React from 'react';
import TableCell from '@mui/material/TableCell';
import TextField from '@mui/material/TextField';
import TrashIconButton from '../../../../../components/TrashIconButton';


const NewUserRowContent = ({actions, newUserErrors}) => {
  const { handleChange, deleteNewUser } = actions;

  return (
    <React.Fragment>
      <TableCell key='name'>
        <TextField id="name" name="name" label="Name" variant="standard" onChange={handleChange} error={!!newUserErrors.name} />
      </TableCell>
      <TableCell key='country'>
        <TextField id="country" name="country" label="Country" variant="standard" onChange={handleChange} error={!!newUserErrors.country} />
      </TableCell>
      <TableCell key='email'>
        <TextField id="email" name="email" label="Email" variant="standard" onChange={handleChange} error={!!newUserErrors.email} />
      </TableCell>
      <TableCell key='phone'>
        <TextField id="phone" name="phone" label="Phone" variant="standard" onChange={handleChange} error={!!newUserErrors.phone} />
      </TableCell>
      <TableCell key='delete'>
        <TrashIconButton handleClick={deleteNewUser} />
      </TableCell>
    </React.Fragment>
  );
}

export { NewUserRowContent };