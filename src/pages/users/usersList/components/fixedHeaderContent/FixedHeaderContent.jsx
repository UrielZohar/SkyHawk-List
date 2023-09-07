import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TrashIconButton from '../../../../../components/TrashIconButton';

const headerColumns = [
  {
    width: 120,
    label: 'Name',
    dataKey: 'name',
  },
  {
    width: 100,
    label: 'Country',
    dataKey: 'country',
  },
  {
    width: 200,
    label: 'Email',
    dataKey: 'email',
  },
  {
    width: 120,
    label: 'Phone',
    dataKey: 'phone',
  },
  {
    width: 30,
    label: '',
    dataKey: 'delete',
    display: (row, actions) => {
      const deleteRow = () => actions.delete(row);
      return (<TrashIconButton handleClick={deleteRow} />);
    },
  }
];

function FixedHeaderContent() {
  return (
    <TableRow>
      {headerColumns.map(({dataKey, numeric, width, label}) => (
        <TableCell
          key={dataKey}
          variant="head"
          align={numeric || false ? 'right' : 'left'}
          style={{ width: width }}
          sx={{
            backgroundColor: 'background.paper',
          }}
        >
          {label}
        </TableCell>
      ))}
    </TableRow>
  );
}

export { FixedHeaderContent, headerColumns };