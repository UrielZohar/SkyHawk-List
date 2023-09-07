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
import { deleteUser, validatorMap, countEmptyFiels, countErrorFields, checkIsHasChanges } from './UsersList.utils'
import styles from '../users.module.css';

function UsersList() {
  const { usersData, setUsersData } = useUsersContext();
  const [localErrorsMap, setLocalErrorsMap] = useState({});
  const [newUsers, setNewUsers] = useState([]);
  const [localChangesMap, setLocalChangesMap] = useState({});
  const deleteRow = useCallback(deleteUser({usersData, setUsersData, localChangesMap, setNewUsers, setLocalChangesMap, setLocalErrorsMap}), [usersData, setUsersData, localChangesMap]);
  const handleChange = useCallback((id, field, value) => {
    // save the local change
    setLocalChangesMap((prev) => ({...prev, [id]: {...prev[id], [field]: value}}));
    // validate the change
    const isError = validatorMap[field](value);
    setLocalErrorsMap((prev) => ({...prev, [`${id}_${field}`]: isError}));
  }, [localChangesMap, setLocalChangesMap]);  
  const emptyFieldsCounter = countEmptyFiels(localChangesMap, newUsers);
  const errorFieldsCounter = countErrorFields(localErrorsMap);
  const isHasChanges = checkIsHasChanges(localChangesMap, newUsers);
  const handleAddNewUser = useCallback(() => {
    setNewUsers((prev) => [getNewEmptyUser(), ...prev]);
  }, [setNewUsers, newUsers]);
  const actions = useMemo(() => ({delete: deleteRow, handleChange, createNewUser, handleAddNewUser}), [deleteRow, handleChange, createNewUser, deleteNewUser, handleAddNewUser]);

  return (
    <>
      <div className={styles.usersList}>
        <div className={styles.usersListHeader}>
          <Typography variant="h6">Users List ({usersData.length})</Typography>
          <AddButton handleClick={createNewUser} disabled={!!newUser} />
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
        {(emptyFieldsCounter + errorFieldsCounter) && <ValidationInformation emptyFieldsCounter={emptyFieldsCounter} errorFieldsCount={errorFieldsCounter} />}
      </div>
      <div className={styles.rightButtonContainer}>
        <PrimaryButton disabled={!isHasChanges && (emptyFieldsCounter + errorFieldsCounter)} handleClick={saveLocalChanges}>Save</PrimaryButton>
      </div>
    </>
  );
}

export default UsersList;
