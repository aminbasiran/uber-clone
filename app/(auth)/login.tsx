import {
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
    Alert,
} from "react-native";
// import { useGlobalStore } from "@/components/context/ContextProvider";
import { router } from "expo-router";
// import { _storeData } from "@/lib/auth";
import CustomButton from "@/components/CustomButton";
import { useInput } from "@/hooks/useInput";
import InputField from "@/components/InputField";
import React from "react";
import { validateEmail, validatePassword } from "@/utils/validate";
import { useClerkService } from "@/hooks/useClerk";

const Login = () => {
    const email = useInput("", validateEmail);
    const password = useInput("", validatePassword);

    const { onSignInPress } = useClerkService();

    const handleLogin = async () => {
        if (!email.value || !password.value) {
            Alert.alert("Please enter valid email and password to log in");
            return;
        }
        await onSignInPress(email.value, password.value);
        router.push("/");
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
                onPress={handleLogin}
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
