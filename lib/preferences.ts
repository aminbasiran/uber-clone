import AsyncStorage from "@react-native-async-storage/async-storage";

export const _storePreferences = async (userSettings: object) => {
    try {
        const jsonValue = JSON.stringify(userSettings);
        await AsyncStorage.setItem("preferences", jsonValue);
    } catch (e) {
        console.error("Failed to save user data", e);
    }
};

export const _retrievePreferences = async () => {
    try {
        const userSettings = await AsyncStorage.getItem("preferences");
        return userSettings ? JSON.parse(userSettings) : null;
    } catch (e) {
        console.error("Failed to load user data", e);
        return null;
    }
};

export const _removePreferences = async () => {
    try {
        await AsyncStorage.removeItem("preferences");
    } catch (e) {
        console.error("Failed to log out", e);
    }
};
