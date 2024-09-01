import { View, Text, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import home from "../assets/icons/homee.png";

interface ISavedAddressPropsTypes {
    title: string;
    address: string;
}

const SavedAddress: React.FC<ISavedAddressPropsTypes> = ({
    title,
    address,
}) => {
    return (
        <TouchableOpacity>
            <View className="w-full flex flex-row justify-between items-center  bg-neutral-200 rounded-lg p-2 ">
                <Image
                    source={home}
                    resizeMode="contain"
                    className="w-5 h-5 items-center"
                />
                <View className="pl-4 w-full">
                    <Text className="font-bold w-full">{title}</Text>
                    <Text className=" w-full">{address}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default SavedAddress;
