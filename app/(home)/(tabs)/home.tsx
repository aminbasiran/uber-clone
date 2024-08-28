import { View, Text, Pressable } from "react-native";
import React from "react";
import { useGlobalStore } from "@/components/context/ContextProvider";
import { router } from "expo-router";

const Home = () => {
    return (
        <View className="h-full w-full flex items-center justify-center">
            <Text>home</Text>
        </View>
    );
};

export default Home;
