// import { useGlobalStore } from "@/components/context/ContextProvider";
import AsyncStorage from "@react-native-async-storage/async-storage";

// add with login
export const _storeData = async (userData: string) => {
    try {
        await AsyncStorage.setItem("user", userData);
    } catch (e) {
        console.error("Failed to save user data", e);
    }
};

// add to useEffect on home page load
export const _retrieveData = async () => {
    try {
        const user = await AsyncStorage.getItem("user");
        return user ? user : null;
    } catch (e) {
        console.error("Failed to load user data", e);
        return null;
    }
};

// add with logout
export const _removeData = async () => {
    try {
        await AsyncStorage.removeItem("user");
    } catch (e) {
        console.error("Failed to log out", e);
    }
};
