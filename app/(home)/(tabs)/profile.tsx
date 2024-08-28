import { Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import { useGlobalStore } from "@/components/context/ContextProvider";
import { _removeData } from "@/lib/auth";
import { router } from "expo-router";
import CustomButton from "@/components/CustomButton";

const Profile = () => {
    const { signOut } = useGlobalStore();

    const handleLogout = () => {
        signOut();
        _removeData();
        router.replace("/");
    };
    return (
        <SafeAreaView className="w-full h-full flex flex-col justify-center items-center">
            <Text>profile</Text>
            <CustomButton variant="danger" onPress={handleLogout}>
                <Text>Log out</Text>
            </CustomButton>
        </SafeAreaView>
    );
};

export default Profile;
