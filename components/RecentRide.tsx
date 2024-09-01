import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import rightArrow from "../assets/icons/right.png";

const RecentRide = ({ origin, destination }) => {
    return (
        <TouchableOpacity>
            <View className="w-full flex flex-row justify-between place-items-center items-center bg-neutral-200 rounded-lg p-2 space-x-3">
                <View className="flex-1">
                    <Text className="">{origin}</Text>
                </View>
                <Image
                    source={rightArrow}
                    resizeMode="contain"
                    className="w-3 h-3"
                />
                <View className="flex-1">
                    <Text className="">{destination}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default RecentRide;
