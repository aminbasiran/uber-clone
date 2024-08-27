import { Text, View } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { useGlobalStore } from "@/components/context/ContextProvider";
import { Redirect } from "expo-router";
import { useEffect } from "react";
import { useRouter } from "expo-router";

const index = () => {
    const { user } = useGlobalStore();
    console.log("index", user);
    if (user) {
        return <Redirect href={"/(home)/home"} />;
    }
    return <Redirect href="/(auth)/onboarding" />;
};

export default index;
