import { Text, View } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { useGlobalStore } from "@/components/context/ContextProvider";
import { Redirect } from "expo-router";
import useAuth from "@/hooks/useAuth";

const index = () => {
    const { user } = useGlobalStore();
    const loading = useAuth();

    if (loading) {
        return (
            <View>
                <Text>...Loading</Text>
            </View>
        );
    }

    return user ? (
        <Redirect href={"/(home)/home"} />
    ) : (
        <Redirect href={"/(auth)/onboarding"} />
    );
};

export default index;
