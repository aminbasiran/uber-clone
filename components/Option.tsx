import { View, Text, Image, Switch } from "react-native";
import React from "react";
import theme from "../assets/icons/theme.png";

const Option = () => {
    return (
        <View className="w-full flex flex-row justify-start items-center p-3">
            <Image resizeMode="contain" className="w-5 h-5" source={theme} />
            <Text className="pl-4">Dark mode</Text>
            <Switch className="ml-auto" />
        </View>
    );
};

export default Option;
