import { useState } from 'react';
import { validator, checkIsValid } from './useNewUser.utils';

const useNewUser = () => {
  const [newUser, setNewUser] = useState();
  const [newUserErrors, setNewUserErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const createNewUser = () => {
    setNewUser({
      id: Date.now(),
      name: '',
      country: '',
      email: '',
      phone: '',
      isNewRow: true,
    });
  };

  const handleChange = (event, value, name) => {
    const tmpNewUser = {
      ...newUser,
      [event.target.name || name]: event.target.value || value,
    };
    const newUserErrors = validator(newUser, tmpNewUser);
    setNewUserErrors(newUserErrors);
    setNewUser(tmpNewUser);
    setIsValid(checkIsValid(tmpNewUser, newUserErrors));
  };

  const deleteNewUser = () => {
    setNewUser(null);
  }

  return {
    newUser,
    handleChange,
    setNewUser,
    createNewUser,
    newUserErrors,
    deleteNewUser,
    isValid,
  };
};

export { useNewUser };