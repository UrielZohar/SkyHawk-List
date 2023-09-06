import { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react';
import data from '../data/initialUsersData.json';

// initial value
const UsersContext = createContext({
  usersData: [],
  setUsersData: () => {},
  addNewUser: () => {},
  loading: false,
});

// value provider
export const ContextProvider = ({ children }) => {
  const [usersData, setUsersData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timeoutId = setTimeout(() => {
      setLoading(false);
      setUsersData(data);
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const addNewUser = useCallback((newUser) => {
    setUsersData((prev) => [newUser, ...prev]);
  }, [setUsersData]);

  const contextValue = useMemo(() => ({ usersData, setUsersData, addNewUser, loading }), [usersData, loading, addNewUser, setUsersData]);

  return <UsersContext.Provider value={contextValue}>{children}</UsersContext.Provider>;
};

// consumer
export const useUsersContext = () => useContext(UsersContext);

export default UsersContext;
