import { useCallback, useMemo } from 'react';
import { Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import { TableVirtuoso } from 'react-virtuoso';
import { VirtuosoTableComponents } from './components/virtuosoTableComponents/VirtuosoTableComponents';
import { FixedHeaderContent } from './components/fixedHeaderContent/FixedHeaderContent';
import { RowContent } from './components/rowContent/RowContent';
import { useUsersContext } from '../../../context/usersContext';
import PrimaryButton from '../../../components/PrimaryButton';
import AddButton from '../../../components/AddButton';
import { ValidationInformation } from './components/validationInformation/ValidationInformation'
import { deleteUser } from './UsersList.utils'
import { useNewUser } from './hooks/useNewUser';
import styles from '../users.module.css';

function UsersList() {
  const { usersData, setUsersData, addNewUser } = useUsersContext();
  const deleteRow = useCallback(deleteUser(usersData, setUsersData), [usersData, setUsersData]);
  const { newUser, handleChange, createNewUser, setNewUser, deleteNewUser, newUserErrors, isValid } = useNewUser();
  const handleAddNewUser = useCallback(() => {
    setNewUser(null);
    addNewUser({...newUser, isNewRow: false});
  }, [newUser, addNewUser, setNewUser]);
  const actions = useMemo(() => ({delete: deleteRow, handleChange, createNewUser, deleteNewUser, handleAddNewUser}), [deleteRow, handleChange, createNewUser, deleteNewUser, handleAddNewUser]);

  return (
    <>
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
              itemContent={RowContent(actions, newUserErrors)}
              />
          </Paper>
        </div>
      </div>
      <div className={styles.rightButtonContainer}>
        {newUser && <ValidationInformation newUser={newUser} newUserErrors={newUserErrors} />}
      </div>
      <div className={styles.rightButtonContainer}>
        <PrimaryButton disabled={!isValid} handleClick={handleAddNewUser}>Save</PrimaryButton>
      </div>
    </>
  );
}

export default UsersList;
