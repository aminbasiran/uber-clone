import { Text, SafeAreaView } from "react-native";
import React from "react";
import { useGlobalStore } from "@/components/context/ContextProvider";
import { router } from "expo-router";
import { _storeData } from "@/lib/auth";
import CustomButton from "@/components/CustomButton";

const USER = "amin";

const Login = () => {
    const { signIn } = useGlobalStore();

    const handleLogin = (x: string) => {
        signIn(x);
        _storeData(x);
        router.replace("/");
    };
    return (
        <SafeAreaView className="h-full w-full items-center flex flex-col justify-center">
            <Text className="font-bold text-4xl">Login page</Text>
            <Text className="text-center">
                Click the log in button above to simulate authentication. Under
                the hood, this is just simply a boolean value that dictates
                which screen is shown.
            </Text>

            <Text className="text-center">
                Use your own authentication provider for more robust and secure
                auth management.
            </Text>
            <CustomButton variant="primary" onPress={() => handleLogin(USER)}>
                <Text>Log in</Text>
            </CustomButton>
        </SafeAreaView>
    );
};

export default Login;
