import { useCallback } from 'react';
import { Button, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import { TableVirtuoso } from 'react-virtuoso';
import { VirtuosoTableComponents } from './components/virtuosoTableComponents/VirtuosoTableComponents';
import { FixedHeaderContent } from './components/fixedHeaderContent/FixedHeaderContent';
import { RowContent } from './components/rowContent/RowContent';
import { useUsersContext } from '../../../context/usersContext';
import AddButton from '../../../components/AddButton';
import { deleteUser } from './UsersList.utils'
import { useNewUser } from './hooks/useNewUser';
import styles from '../users.module.css';

function UsersList() {
  const { usersData, setUsersData } = useUsersContext();
  const deleteRow = useCallback(deleteUser(usersData, setUsersData), [usersData, setUsersData]);
  const { newUser, handleChange, createNewUser, setNewUser } = useNewUser();
  console.log(newUser);

  return (
    <div className={styles.usersList}>
      <div className={styles.usersListHeader}>
        <Typography variant="h6">Users List ({usersData.length})</Typography>
        <AddButton handleClick={createNewUser} />
      </div>
      <div className={styles.usersListContent}>
        <Paper style={{ height: 400, width: '100%' }}>
          <TableVirtuoso
            data={newUser ? [newUser, ...usersData] : usersData}
            components={VirtuosoTableComponents}
            fixedHeaderContent={FixedHeaderContent}
            itemContent={RowContent({delete: deleteRow, handleChange,})}
          />
        </Paper>
      </div>
    </div>
  );
}

export default UsersList;
