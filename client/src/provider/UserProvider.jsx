import React, { createContext, useContext, useEffect, useState } from 'react';
import { useGetCurrentDataClient } from '../hooks/hooks/current-hooks-client/CurrentHooksClient';

const UserDataContext = createContext();

export const useUserData = () => useContext(UserDataContext);

export const UserProvider = ({ children }) => {
  const { data, isLoading, isError } = useGetCurrentDataClient();
  const [userData, setUserData] = useState({
    userData: null,
    userLoading: true,
    isError: false
  });

  useEffect(() => {
    if (!isLoading && !isError) {
      setUserData({ userData: data, userLoading: false, isError: false });
    } else if (isError) {
      setUserData({ userData: null, userLoading: false, isError: true });
    }
  }, [data, isLoading, isError,]);

  if (userData.userLoading) {
    console.log('User not found')
  }

  if (userData.isError) {
    console.log('User finding error')
  }

  return (
    <UserDataContext.Provider value={userData}>
      {children}
    </UserDataContext.Provider>
  );
};
