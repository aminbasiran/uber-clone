import { SafeAreaView, Text } from "react-native";
import { useGlobalStore } from "@/components/context/ContextProvider";
import { Redirect } from "expo-router";
import useAuth from "@/hooks/useAuth";
import React from "react";
import useSettings from "@/hooks/useSettings";

const index = () => {
    const { user } = useGlobalStore();

    // fix loading
    const loading = useAuth();
    useSettings();

    if (loading) {
        return (
            <SafeAreaView>
                <Text>...Loading</Text>
            </SafeAreaView>
        );
    }

    return user ? (
        <Redirect href={"/(home)/home"} />
    ) : (
        <Redirect href={"/(auth)/onboarding"} />
    );
};

export default index;
