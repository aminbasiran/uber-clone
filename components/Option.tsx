import { View, Text } from "react-native";
import React from "react";

interface OptionPropsTypes {
    title: string;
    value: string | boolean;
}

const Option: React.FC<OptionPropsTypes> = ({ title, value, ...props }) => {
    return (
        <View
            {...props}
            className="w-full h-12 flex flex-row justify-between items-center p-2"
        >
            <Text className="font-bold">{title}</Text>
            <Text>{value}</Text>
        </View>
    );
};

export default Option;
