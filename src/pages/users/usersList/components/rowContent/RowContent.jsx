import * as React from 'react';
import TableCell from '@mui/material/TableCell';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import TrashIconButton from '../../../../../components/TrashIconButton';
import { takeTheFirstNotUndefined } from '../../../../../utils/utils';
import countries from '../../../../../data/countries.json';

const RowContent = ({actions, localErrorsMap, localChangesMap}) => (_index, row) => {
  const { handleChange } = actions;
  const { id } = row;

  return (
    <React.Fragment>
      <TableCell key='name'>
        <TextField
          value={takeTheFirstNotUndefined(localChangesMap[id]?.name, row.name)}
          id="name" 
          name="name"
          fullWidth
          variant="standard" 
          onChange={(e) => handleChange(id, 'name', e.target.value, localChangesMap[id] || row)} 
          error={!!localErrorsMap[`${id}_name`]} 
        />
      </TableCell>
      <TableCell key='country'>
        <Autocomplete
          value={takeTheFirstNotUndefined(localChangesMap[id]?.country, row.country)}
          id="country"
          fullWidth
          options={countries}
          onChange={(_e, value) => handleChange(id, 'country', value, localChangesMap[id] || row)}
          name="country" 
          renderInput={(params) => <TextField
            value={takeTheFirstNotUndefined(localChangesMap[id]?.country, row.country)}
            id="country" 
            name="country"
            fullWidth
            {...params}
            variant="standard"
            error={!!localErrorsMap[`${id}_country`]}
          />}
        />
      </TableCell>
      <TableCell key='email'>
        <TextField
          value={takeTheFirstNotUndefined(localChangesMap[id]?.email, row.email)}
          id="email" 
          name="email"
          fullWidth
          variant="standard" 
          onChange={(e) => handleChange(id, 'email', e.target.value, localChangesMap[id] || row)}
          error={!!localErrorsMap[`${id}_email`]}
        />
      </TableCell>
      <TableCell key='phone'>
        <TextField
          value={takeTheFirstNotUndefined(localChangesMap[id]?.phone, row.phone)}
          id="phone" 
          name="phone"
          fullWidth 
          variant="standard" 
          onChange={(e) => handleChange(id, 'phone', e.target.value, localChangesMap[id] || row)}
          error={!!localErrorsMap[`${id}_phone`]}
        />
      </TableCell>
      <TableCell key='delete'>
        <TrashIconButton handleClick={() => actions.delete(id, takeTheFirstNotUndefined(localChangesMap[id]?.name, row.name))} />
      </TableCell>
    </React.Fragment>
  );
}

export { RowContent };