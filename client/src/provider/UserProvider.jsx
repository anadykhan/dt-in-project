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
      history.push('/sign-in'); // Navigate to sign-in page
    }
  }, [data, isLoading, isError, history]);

  if (userData.userLoading) {
    return <h1>Loading...</h1>;
  }

  if (userData.isError) {
    return <h1>Error occurred while fetching user data</h1>;
  }

  return (
    <UserDataContext.Provider value={userData}>
      {children}
    </UserDataContext.Provider>
  );
};
