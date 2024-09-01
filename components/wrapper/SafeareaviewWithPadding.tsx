import { View, SafeAreaView } from "react-native";
import React from "react";
import clsx from "clsx";

interface ISafeareaviewWithPaddingPropsTypes {
    children: React.ReactNode;
    padding: string;
}

const SafeareaviewWithPadding: React.FC<ISafeareaviewWithPaddingPropsTypes> = ({
    children,
    padding,
}) => {
    const baseStyles = "w-full h-full";
    const paddingStyles = clsx(baseStyles, padding);

    return (
        <SafeAreaView>
            <View className={paddingStyles}>{children}</View>
        </SafeAreaView>
    );
};

export default SafeareaviewWithPadding;
