import { Text, View, SafeAreaView, TouchableOpacity } from "react-native";
import { useGlobalStore } from "@/components/context/ContextProvider";
import { router } from "expo-router";
import { _storeData } from "@/lib/auth";
import CustomButton from "@/components/CustomButton";
import { useInput } from "@/hooks/useInput";
import InputField from "@/components/InputField";
import React from "react";
import { validateEmail, validatePassword } from "@/utils/validate";

const USER = "amin";

const Login = () => {
    const email = useInput("", validateEmail);
    const password = useInput("", validatePassword);

    const { signIn } = useGlobalStore();

    const handleLogin = (x: string) => {
        signIn(x);
        _storeData(x);
        router.replace("/");
    };

    return (
        <SafeAreaView className="h-full w-full items-center flex flex-col justify-center">
            <Text className="font-bold text-4xl">Login</Text>
            <View className="w-full flex flex-col gap-3">
                <View>
                    <Text className="font-bold">Email</Text>
                    <InputField
                        placeholder="example@gmail.com"
                        value={email.value}
                        handleChangeText={email.handleChange}
                    />
                    <Text className="text-right text-red-500">
                        {email.error}
                    </Text>
                </View>
                <View>
                    <Text className="font-bold">Password</Text>
                    <InputField
                        label="Password"
                        placeholder="example123"
                        value={password.value}
                        handleChangeText={password.handleChange}
                    />
                    <Text className="text-right text-red-500">
                        {password.error}
                    </Text>
                </View>
            </View>

            <CustomButton
                textStyles="text-white font-bold"
                variant="black"
                onPress={() => handleLogin(USER)}
            >
                <Text>Log in</Text>
            </CustomButton>

            <TouchableOpacity onPress={() => router.push("/(auth)/register")}>
                <Text>Dont have an account yet? Register</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default Login;
