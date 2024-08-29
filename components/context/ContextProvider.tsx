import React, { createContext, useContext, useState, ReactNode } from "react";

interface MyComponentProps {
    children: ReactNode;
}

type TUser = string;

interface DefaultContextValueType {
    signIn: (user: TUser) => void;
    signOut: () => void;
    isLoggedIn: boolean;
    user: string | null;
    userPreferences: Record<string, string>;
    setUserPreferences: React.Dispatch<
        React.SetStateAction<Record<string, string>>
    >;
}

// Initialize default values for context, leaving functions as placeholders
const defaultContextValue: DefaultContextValueType = {
    signIn: () => null,
    signOut: () => null,
    isLoggedIn: false,
    user: null,
    userPreferences: {},
    setUserPreferences: () => null,
};

const GlobalStore = createContext<DefaultContextValueType | undefined>(
    defaultContextValue,
);

const GlobalProvider: React.FC<MyComponentProps> = ({ children }) => {
    const [user, setUser] = useState<string | null>(null);
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [userPreferences, setUserPreferences] = useState<
        Record<string, string>
    >({
        theme: "light",
        notification: "disabled",
    });

    const signIn = (user: TUser) => {
        setUser(user);
        setIsLoggedIn(true);
    };

    const signOut = () => {
        setUser(null);
        setIsLoggedIn(false);
    };

    return (
        <GlobalStore.Provider
            value={{
                signIn,
                signOut,
                user,
                isLoggedIn,
                userPreferences,
                setUserPreferences,
            }}
        >
            {children}
        </GlobalStore.Provider>
    );
};

export const useGlobalStore = () => {
    const store = useContext(GlobalStore);
    if (store === undefined) {
        throw new Error("useGlobalStore must be used within a GlobalProvider");
    }
    return store;
};

export default GlobalProvider;
