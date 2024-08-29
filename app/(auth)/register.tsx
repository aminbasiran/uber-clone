import { Text, SafeAreaView, View, TouchableOpacity } from "react-native";
import React from "react";
import InputField from "@/components/InputField";
import { useInput } from "@/hooks/useInput";
import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";
import {
    validateEmail,
    validatePassword,
    validateUsername,
} from "@/utils/validate";

const Register = () => {
    const email = useInput("", validateEmail);
    const username = useInput("", validateUsername);
    const password = useInput("", validatePassword);

    return (
        <SafeAreaView className="h-full w-full items-center flex flex-col justify-center">
            <Text className="font-bold text-4xl">Register page</Text>
            <View className="w-full flex flex-col gap-3">
                <View>
                    <Text className="font-bold">Username</Text>
                    <InputField
                        placeholder="example123"
                        value={username.value}
                        handleChangeText={username.handleChange}
                    />
                    <Text className="text-right text-red-500">
                        {username.error}
                    </Text>
                </View>
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
            <CustomButton textStyles="text-white font-bold" variant="black">
                <Text>Register</Text>
            </CustomButton>

            <TouchableOpacity onPress={() => router.push("/(auth)/login")}>
                <Text>Already have an account? Login</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default Register;
