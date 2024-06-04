import React, { createContext, useContext, useEffect, useState } from 'react';
import { useGetCurrentDataClient } from '../hooks/hooks/current-hooks-client/CurrentHooksClient';


const UserDataContext = createContext();

export const useUserData = () => useContext(UserDataContext);

export const UserProvider = ({ children }) => {
  const { data, isLoading, isError } = useGetCurrentDataClient()
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // console.log("Data:", data);
    console.log("isLoading:", isLoading);
    console.log("isError:", isError);
    if (!isLoading && !isError) {
      setUserData({userData: data, userLoading: isLoading, isError});
    }
  }, [data, isLoading, isError]);
  

  return (
    <UserDataContext.Provider value={userData}>
      {children}
    </UserDataContext.Provider>
  );
};
