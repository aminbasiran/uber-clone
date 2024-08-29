import { View, Text } from "react-native";
import React from "react";
import { useGlobalStore } from "@/components/context/ContextProvider";

const Home = () => {
    const { user } = useGlobalStore();
    return (
        <View className="h-full w-full flex items-center justify-center">
            <Text>Welcome, {user}</Text>
        </View>
    );
};

export default Home;
