import { useState } from 'react';
import { validator } from './useNewUser.utils';

const useNewUser = () => {
  const [newUser, setNewUser] = useState();
  const [newUserErrors, setNewUserErrors] = useState({});

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

  const handleChange = (event) => {
    const tmpNewUser = {
      ...newUser,
      [event.target.name]: event.target.value,
    };
    setNewUserErrors(validator(newUser, tmpNewUser));
    setNewUser(tmpNewUser);
  };

  return {
    newUser,
    handleChange,
    setNewUser,
    createNewUser,
    newUserErrors,
  };
};

export { useNewUser };