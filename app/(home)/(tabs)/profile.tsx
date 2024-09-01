import { Text, View } from "react-native";
import React from "react";
import { router } from "expo-router";
import CustomButton from "@/components/CustomButton";
import { useClerkService } from "@/hooks/useClerk";
import { useUser } from "@clerk/clerk-expo";
import SafeareaviewWithPadding from "@/components/wrapper/SafeareaviewWithPadding";
import InputField from "@/components/InputField";
import { useInput } from "@/hooks/useInput";

const Profile = () => {
    const { onSignOutPress } = useClerkService();
    const { user } = useUser();

    const fullname = useInput("");
    const username = useInput("");
    const email = useInput("");
    const gender = useInput("");
    const phone = useInput("");
    const address = useInput("");

    const handleLogout = async () => {
        await onSignOutPress();
        router.push("/");
    };
    return (
        <SafeareaviewWithPadding padding="p-1">
            <View className="w-full h-full p-3 flex flex-col space-y-3">
                <View className="flex flex_col justify-center items-center place-items-center space-y-2">
                    <View className="bg-blue-200 w-28 h-28 rounded-full"></View>
                    <Text className="font-bold text-3xl">aminpls</Text>
                    <Text className="text-neutral-500">
                        {user?.emailAddresses[0].emailAddress}
                    </Text>
                    <View>
                        <Text>Full name</Text>
                        <InputField
                            placeholder="full name"
                            value={fullname.value}
                            handleChangeText={fullname.handleChange}
                        />
                    </View>
                    <View>
                        <Text>Username</Text>
                        <InputField
                            placeholder="username"
                            value={username.value}
                            handleChangeText={username.handleChange}
                        />
                    </View>
                    <View>
                        <Text>Email</Text>
                        <InputField
                            placeholder="email"
                            value={email.value}
                            handleChangeText={email.handleChange}
                        />
                    </View>
                    <View>
                        <Text>Gender</Text>
                        <InputField
                            placeholder="gender"
                            value={gender.value}
                            handleChangeText={gender.handleChange}
                        />
                    </View>
                    <View>
                        <Text>Phone</Text>
                        <InputField
                            placeholder="phone"
                            value={phone.value}
                            handleChangeText={phone.handleChange}
                        />
                    </View>
                    <View>
                        <Text>Address</Text>
                        <InputField
                            placeholder="address"
                            value={address.value}
                            handleChangeText={address.handleChange}
                        />
                    </View>
                    {/* <CustomButton
                        textStyles="font-bold text-white"
                        variant="black"
                    >
                        Edit profile
                    </CustomButton> */}
                </View>
                {/* <View>
                    <Text className="font-bold">Preferences</Text>
                    <View className="bg-neutral-200 rounded-lg w-full">
                        <Option />
                        <Option />
                    </View>
                </View> */}
                <CustomButton
                    variant="danger"
                    onPress={handleLogout}
                    textStyles="text-center font-bold"
                >
                    Log out
                </CustomButton>
                <CustomButton
                    variant="black"
                    onPress={handleLogout}
                    textStyles="text-red-500 font-bold text-center"
                >
                    Delete account
                </CustomButton>
            </View>
        </SafeareaviewWithPadding>
    );
};

export default Profile;
