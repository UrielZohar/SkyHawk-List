import * as React from 'react';
import countries from '../../../../../data/countries.json';
import TableCell from '@mui/material/TableCell';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import TrashIconButton from '../../../../../components/TrashIconButton';


const NewUserRowContent = ({actions, newUserErrors}) => {
  const { handleChange, deleteNewUser } = actions;

  return (
    <React.Fragment>
      <TableCell key='name'>
        <TextField id="name" name="name" label="Name" variant="standard" onChange={handleChange} error={!!newUserErrors.name} />
      </TableCell>
      <TableCell key='country'>
        <Autocomplete 
          id="country" 
          options={countries}
          onChange={(e, value) => handleChange(e, value, 'country')}
          name="country" 
          renderInput={(params) => <TextField 
            id="country" 
            name="country" 
            {...params}
            label="Country" 
            variant="standard"
            error={!!newUserErrors.country}  
          />}
        />
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