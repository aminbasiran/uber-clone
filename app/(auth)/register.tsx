import { Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import { router } from "expo-router";

const Register = () => {
    return (
        <SafeAreaView className="h-full w-full items-center flex flex-col justify-center">
            <Text className="font-bold text-4xl">Register page</Text>
            <Text>For this purpose, this screen is just a placeholder.</Text>
            <Text className="text-center">
                In real world, you must create user credentials first before you
                can sign-in.
            </Text>
            <TouchableOpacity onPress={() => router.push("/(auth)/login")}>
                <Text className="font-bold">Go to login page</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default Register;
