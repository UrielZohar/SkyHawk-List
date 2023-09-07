import { useCallback, useMemo, useState } from 'react';
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
import { deleteUser, validatorMap, countEmptyFiels, countErrorFields, checkIsHasChanges, getNewEmptyUser, mergeChangesWithUsersData } from './UsersList.utils'
import styles from '../users.module.css';

function UsersList() {
  const { usersData, setUsersData } = useUsersContext();
  const [localErrorsMap, setLocalErrorsMap] = useState({});
  const [newUsers, setNewUsers] = useState([]);
  const [localChangesMap, setLocalChangesMap] = useState({});
  const deleteRow = useCallback(deleteUser({usersData, setUsersData, localChangesMap, setNewUsers, setLocalChangesMap, setLocalErrorsMap}), [usersData, setUsersData, localChangesMap, setNewUsers, setLocalChangesMap, setLocalErrorsMap]);
  const handleChange = useCallback((id, field, value, row) => {
    // save the local change
    setLocalChangesMap((prev) => ({...prev, [id]: {...row, [field]: value}}));
    // check if the change is valid
    const isValid = validatorMap[field](value);
    setLocalErrorsMap((prev) => ({...prev, [`${id}_${field}`]: !isValid}));
  }, [localChangesMap, setLocalChangesMap]);  
  const emptyFieldsCounter = countEmptyFiels(localChangesMap);
  const errorFieldsCounter = countErrorFields(localErrorsMap);
  const isHasChanges = checkIsHasChanges(localChangesMap, newUsers);
  const handleAddNewUser = useCallback(() => {
    const newUser = getNewEmptyUser();
    setNewUsers((prev) => [newUser, ...prev]);
    setLocalChangesMap((prev) => ({...prev, [newUser.id]: {...newUser}}));
  }, [setNewUsers, newUsers, setLocalChangesMap]);
  const saveLocalChanges = useCallback(() => {
    const mergedUsers = mergeChangesWithUsersData(usersData, localChangesMap);
    setLocalChangesMap({});
    setNewUsers([]);
    setUsersData(mergedUsers);
  }, [setUsersData, usersData, localChangesMap]);
  const actions = useMemo(() => ({delete: deleteRow, handleChange, handleAddNewUser}), [deleteRow, handleChange, handleAddNewUser]);

  return (
    <>
      <div className={styles.usersList}>
        <div className={styles.usersListHeader}>
          <Typography variant="h6">Users List ({usersData.length + newUsers.length})</Typography>
          <AddButton handleClick={handleAddNewUser} />
        </div>
        <div className={styles.usersListContent}>
          <Paper style={{ height: 400, width: '100%' }}>
            <TableVirtuoso
              data={[...newUsers, ...usersData]}
              components={VirtuosoTableComponents}
              fixedHeaderContent={FixedHeaderContent}
              itemContent={RowContent({actions, localErrorsMap, localChangesMap})}
              />
          </Paper>
        </div>
      </div>
      <div className={styles.rightButtonContainer}>
        {(!!(emptyFieldsCounter + errorFieldsCounter)) && <ValidationInformation emptyFieldsCounter={emptyFieldsCounter} errorFieldsCounter={errorFieldsCounter} />}
      </div>
      <div className={styles.rightButtonContainer}>
        <PrimaryButton disabled={!isHasChanges || !!(emptyFieldsCounter + errorFieldsCounter)} handleClick={saveLocalChanges}>Save</PrimaryButton>
      </div>
    </>
  );
}

export default UsersList;
