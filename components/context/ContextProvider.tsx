import React, { createContext, useContext, useState, ReactNode } from "react";

interface MyComponentProps {
    children: ReactNode;
}

interface DefaultContextValueType {
    user: Record<string, string> | null;
    userPreferences: Record<string, string> | null;
    setUserPreferences: React.Dispatch<
        React.SetStateAction<Record<string, string>>
    >;
    setUser: React.Dispatch<
        React.SetStateAction<Record<string, string> | null>
    >;
}

// Initialize default values for context, leaving functions as placeholders
const defaultContextValue: DefaultContextValueType = {
    user: null,
    userPreferences: null,
    setUserPreferences: () => {}, // No-op function
    setUser: () => {}, // No-op function
};

const GlobalStore = createContext<DefaultContextValueType | undefined>(
    defaultContextValue,
);

const GlobalProvider: React.FC<MyComponentProps> = ({ children }) => {
    const [user, setUser] = useState<Record<string, string> | null>(null);
    const [userPreferences, setUserPreferences] = useState<
        Record<string, string>
    >({
        theme: "light",
        notification: "disabled",
    });

    return (
        <GlobalStore.Provider
            value={{
                user,
                setUser,
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
