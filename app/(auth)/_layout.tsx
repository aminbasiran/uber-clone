import React from "react";
import { Stack } from "expo-router";

const AuthLayout = () => {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="onboarding" options={{ headerShown: false }} />
            <Stack.Screen name="login" options={{ headerShown: true }} />
            <Stack.Screen name="register" options={{ headerShown: true }} />
        </Stack>
    );
};

export default AuthLayout;
