import * as React from 'react';
import { Button, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import { TableVirtuoso } from 'react-virtuoso';
import { VirtuosoTableComponents } from './components/virtuosoTableComponents/VirtuosoTableComponents';
import { FixedHeaderContent } from './components/fixedHeaderContent/FixedHeaderContent';
import { RowContent } from './components/rowContent/RowContent';
import { useUsersContext } from '../../../context/usersContext';
import AddButton from '../../../components/AddButton';
import styles from '../users.module.css';

const columns = [
  {
    width: 200,
    label: 'Name',
    dataKey: 'name',
  },
  {
    width: 120,
    label: 'Country',
    dataKey: 'country',
  },
  {
    width: 120,
    label: 'Email',
    dataKey: 'email',
  },
  {
    width: 120,
    label: 'Phone',
    dataKey: 'phone',
    display: ({phone}) => <a href={`tel:${phone}`}>{phone}</a>,
  },
];

function UsersList() {
  const { usersData } = useUsersContext();

  return (
    <div className={styles.usersList}>
      <div className={styles.usersListHeader}>
        <Typography variant="h6">Users List ({usersData.length})</Typography>
        <AddButton />
      </div>
      <div className={styles.usersListContent}>
        <Paper style={{ height: 400, width: '100%' }}>
          <TableVirtuoso
            data={usersData}
            components={VirtuosoTableComponents}
            fixedHeaderContent={FixedHeaderContent}
            itemContent={RowContent}
          />
        </Paper>
      </div>
    </div>
  );
}

export default UsersList;
