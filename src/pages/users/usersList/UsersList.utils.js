import countries from '../../../data/countries.json';

const userScheme = ['name', 'country', 'email', 'phone'];

const validatorMap = {
  name: (value) => value.length,
  country: (value) => countries.includes(value),
  email: (value) => value.includes('@'),
  phone: (value) => value.startsWith('+') && value.length > 1,
};

const getNewEmptyUser = () => ({
  id: Date.now(),
  name: '',
  country: '',
  email: '',
  phone: '',
});

const countErrorFields = (localErrorsMap) => {
  return Object.keys(localErrorsMap).filter((key) => localErrorsMap[key]).length;
};

const countEmptyFiels = (localChangesMap, newUsers) => {
  let counter = 0;
  Object.keys(localChangesMap).forEach((key) => {
    userScheme.forEach((field) => {
      if (!localChangesMap[key][field]) {
        counter++;
      }
    });
  });
  newUsers.forEach((user) => {
    userScheme.forEach((field) => {
      if (!user[field]) {
        counter++;
      }
    });
  });
  return counter;
};

const deleteUser = ({users, setUsers, localChangesMap, setNewUsers, setLocalChangesMap, setLocalErrorsMap}) => ({id, name}) => {
  if (localChangesMap[id]) {
    const answer = confirm(`Are you sure you want to delete '${name}' ?`);
    if (!answer) return;
    const usersAfterDelete = users.filter((user) => user.id !== id);
    setUsers(usersAfterDelete);
  } else {
    setNewUsers((prevNewUsers) => prevNewUsers.filter((user) => user.id !== id));
  }
  setLocalErrorsMap((prevLocalErrorsMap) => {
    return Object.keys(prevLocalErrorsMap).reduce((acc, key) => {
      if (!id.includes(key)) {
        acc[key] = prevLocalErrorsMap[key];
      }
      return acc;
    }, {});
  });
  setLocalChangesMap((prevLocalChangesMap) => {
    return Object.keys(prevLocalChangesMap).reduce((acc, key) => {
      if (id !== key) {
        acc[key] = prevLocalChangesMap[key];
      }
      return acc;
    }, {});
  });
};

const checkIsHasChanges = (localChangesMap, newUsers) => {
  const isHasChanges = Object.keys(localChangesMap).length > 0 || newUsers.length > 0;
  return isHasChanges;
};

export { 
  deleteUser,
  validatorMap,
  getNewEmptyUser,
  countEmptyFiels,
  countErrorFields,
  checkIsHasChanges,
};