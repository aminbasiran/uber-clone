import {
    Text,
    SafeAreaView,
    View,
    TouchableOpacity,
    Alert,
} from "react-native";
import React, { useState } from "react";
import { useInput } from "@/hooks/useInput";
import InputField from "@/components/InputField";
import CustomButton from "@/components/CustomButton";
import PendingModal from "@/components/Modal/PendingModal";
import {
    validateEmail,
    validatePassword,
    validateUsername,
    validateClerkCode,
} from "@/utils/validate";
import { useRouter } from "expo-router";
import { useClerkService } from "@/hooks/useClerk";
import VerifiedModal from "@/components/Modal/VerifiedModal";

type StateTypes = "default" | "pending" | "success" | "failed";

const Register = () => {
    const { onSignUpPress, onPressVerify } = useClerkService();

    const email = useInput("", validateEmail);
    const username = useInput("", validateUsername);
    const password = useInput("", validatePassword);

    const [verificationState, setVerificationState] =
        useState<StateTypes>("default");
    const code = useInput("", validateClerkCode);
    const router = useRouter();

    const handleReset = () => {
        email.setReset();
        username.setReset();
        password.setReset();
    };

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
            <CustomButton
                textStyles="text-white font-bold"
                variant="black"
                onPress={() => {
                    if (!email.value || !password.value || !username.value) {
                        Alert.alert(
                            "Please enter all your credentials before registering.",
                        );
                        handleReset();
                        return;
                    }

                    onSignUpPress(
                        email.value,
                        password.value,
                        setVerificationState,
                    );
                    handleReset();
                }}
            >
                <Text>Register</Text>
            </CustomButton>

            <TouchableOpacity onPress={() => router.push("/(auth)/login")}>
                <Text>Already have an account? Login</Text>
            </TouchableOpacity>

            <PendingModal
                isVisible={verificationState === "pending"}
                value={code.value}
                handleChangeText={code.handleChange}
                onPressVerify={() =>
                    onPressVerify(code.value, setVerificationState)
                }
            />

            <VerifiedModal
                isVisible={verificationState === "success"}
                setVerificationState={setVerificationState}
            />
        </SafeAreaView>
    );
};

export default Register;
