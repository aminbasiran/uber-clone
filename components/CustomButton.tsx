import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import React from "react";
import { cn } from "@/utils/cn";

interface CustomButtonProps extends TouchableOpacityProps {
    classNames?: string;
    children?: React.ReactNode;
    variant?:
        | "primary"
        | "secondary"
        | "success"
        | "danger"
        | "warning"
        | "black";
    onPress?: () => void;
    textStyles?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
    children,
    classNames,
    variant = "primary",
    onPress,
    textStyles,
    ...props
}) => {
    const baseStyles = "p-4 rounded-md";
    const variantStyles: Record<string, string> = {
        primary: "bg-blue-500",
        secondary: "bg-gray-500",
        success: "bg-green-500",
        danger: "bg-red-400",
        warning: "bg-yellow-500",

        black: "bg-black",
        // Add more variants as needed
    };

    const buttonStyles = cn(baseStyles, variantStyles[variant], classNames);

    return (
        <TouchableOpacity {...props} className={buttonStyles} onPress={onPress}>
            <Text className={textStyles}>{children}</Text>
        </TouchableOpacity>
    );
};

export default CustomButton;
