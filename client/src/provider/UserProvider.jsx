import React, { createContext, useContext, useEffect, useState } from 'react';
import { useGetCurrentDataClient } from './hooks/useGetCurrentDataClient';

const UserDataContext = createContext();

export const useUserData = () => useContext(UserDataContext);

export const UserProvider = ({ children }) => {
  const { data, isLoading, isError } = useGetCurrentDataClient();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (!isLoading && !isError) {
      setUserData(data); // Assuming the user data is directly received from the API
    }
  }, [data, isLoading, isError]);

  return (
    <UserDataContext.Provider value={userData}>
      {children}
    </UserDataContext.Provider>
  );
};
