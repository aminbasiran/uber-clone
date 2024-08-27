import React, { createContext, useContext, useState, ReactNode } from 'react';
import { router } from 'expo-router';

interface MyComponentProps {
  children: ReactNode;
}

type UserType = {} | boolean | any;

interface DefaultContextValueType {
  user: UserType;
  handleSetData: () => void;
}

// Initialize default values for context, leaving functions as placeholders
const defaultContextValue: DefaultContextValueType = {
  user: true,
  handleSetData: () => {}, // Placeholder function
};

const GlobalStore = createContext<DefaultContextValueType | undefined>(
  defaultContextValue
);

const GlobalProvider: React.FC<MyComponentProps> = ({ children }) => {
  const [user, setUser] = useState<UserType>(false);

  const handleSetData = () => {
    setUser(true);
    router.replace('/');
  };

  return (
    <GlobalStore.Provider value={{ user, handleSetData }}>
      {children}
    </GlobalStore.Provider>
  );
};

export const useGlobalStore = () => {
  const store = useContext(GlobalStore);
  if (store === undefined) {
    throw new Error('useGlobalStore must be used within a GlobalProvider');
  }
  return store;
};

export default GlobalProvider;
