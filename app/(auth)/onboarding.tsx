import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { router } from "expo-router";
import CustomButton from "@/components/CustomButton";

const Onboarding = () => {
    return (
        <SafeAreaView className="h-full w-full items-center flex flex-col justify-center">
            <Text className="text-md font-bold">
                You see this screen because you are not authenticated.
            </Text>
            <View className="flex flex-row gap-3">
                <CustomButton
                    variant="primary"
                    onPress={() => router.push("/(auth)/login")}
                >
                    Sign-in
                </CustomButton>
                <CustomButton
                    variant="warning"
                    onPress={() => router.push("/(auth)/register")}
                >
                    Sign-up
                </CustomButton>
            </View>
        </SafeAreaView>
    );
};

export default Onboarding;
