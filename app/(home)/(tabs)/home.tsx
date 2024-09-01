import {
    View,
    Text,
    Image,
    Pressable,
    ImageSourcePropType,
    FlatList,
} from "react-native";
import React from "react";
import notification from "../../../assets/icons/notification.png";
import InputField from "@/components/InputField";
import { useInput } from "@/hooks/useInput";
import SavedAddress from "@/components/SavedAddress";
import RecentRide from "@/components/RecentRide";
import { data, rides } from "@/constants/Data";
import SafeareaviewWithPadding from "@/components/wrapper/SafeareaviewWithPadding";

const iconSource = notification as unknown as ImageSourcePropType;

const Home = () => {
    const destination = useInput("");
    return (
        <SafeareaviewWithPadding padding="p-3">
            <View className="w-full flex flex-row justify-between items-center place-items-center">
                <View>
                    <Text className="font-bold text-lg">
                        {/* Welcome, {user?.emailAddresses[0].emailAddress} */}
                        Welcome, aminbasiran
                    </Text>
                    <Text className="text-neutral-400">Going somewhere?</Text>
                </View>
                <View>
                    <Pressable>
                        <Image
                            source={iconSource}
                            resizeMode="contain"
                            className="w-5 h-5"
                        />
                    </Pressable>
                </View>
            </View>
            <InputField
                handleChangeText={destination.handleChange}
                value={destination.value}
                placeholder="Where to?"
                label="Search"
            />

            <FlatList
                className=""
                data={data}
                ItemSeparatorComponent={() => <View className="py-1" />}
                ListHeaderComponent={
                    <View className="w-full flex flex-row justify-between place-items-center items-center py-3">
                        <Text className="font-bold">Saved address</Text>
                        <Text className="text-red-600 font-medium">
                            Add more
                        </Text>
                    </View>
                }
                renderItem={({ item }) => (
                    <SavedAddress title={item.name} address={item.address} />
                )}
            />
            <FlatList
                className=""
                data={rides}
                ItemSeparatorComponent={() => <View className="py-1" />}
                ListHeaderComponent={
                    <View className="w-full flex flex-row justify-between place-items-center items-center py-3">
                        <Text className="font-bold">Recent Rides</Text>
                    </View>
                }
                renderItem={({ item }) => (
                    <RecentRide
                        origin={item.startLocation}
                        destination={item.endLocation}
                    />
                )}
            />
        </SafeareaviewWithPadding>
    );
};

export default Home;
