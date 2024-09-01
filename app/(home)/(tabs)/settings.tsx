import { Text, SafeAreaView, Switch, View } from "react-native";
import React from "react";
import { useGlobalStore } from "@/components/context/ContextProvider";
import { _storePreferences } from "@/lib/preferences";

const Settings = () => {
    const { userPreferences, setUserPreferences } = useGlobalStore();

    const toggleTheme = () => {
        setUserPreferences((prevPreferences) => {
            const newPreferences = {
                ...prevPreferences,
                theme: prevPreferences.theme === "light" ? "dark" : "light",
            };
            _storePreferences(newPreferences);
            return newPreferences;
        });
    };

    const toggleNotification = () => {
        setUserPreferences((prevPreferences) => {
            const newPreferences = {
                ...prevPreferences,
                notification:
                    prevPreferences.notification === "disabled"
                        ? "enabled"
                        : "disabled",
            };
            _storePreferences(newPreferences);
            return newPreferences;
        });
    };

    return (
        <SafeAreaView>
            <View>
                <Text>Dark Mode</Text>
                <Switch
                    value={userPreferences.theme === "dark"}
                    onValueChange={toggleTheme}
                />

                <View>
                    <Text>
                        {userPreferences.notification === "disabled"
                            ? "Enable"
                            : "Disable"}{" "}
                        Notifications
                    </Text>
                    <Switch
                        value={userPreferences.notification === "enabled"}
                        onValueChange={toggleNotification}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Settings;
