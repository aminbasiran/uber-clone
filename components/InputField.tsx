import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { cn } from "@/utils/cn";

interface IInputFieldPropsTypes {
    label?: string;
    value: string;
    placeholder?: string;
    handleChangeText: (text: string) => void;
    classNames?: string;
}

const InputField: React.FC<IInputFieldPropsTypes> = ({
    placeholder,
    label,
    handleChangeText,
    value,
    classNames,
    ...props
}) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    const toggleOpenMaps = () => {};

    const baseStyles =
        "w-full h-9 px-3 bg-neutral-300 rounded-lg flex flex-row justify-between place-items-center items-center";
    const buttonStyles = cn(baseStyles, classNames);

    return (
        <View {...props} className={buttonStyles}>
            <TextInput
                autoCapitalize="none"
                placeholder={placeholder}
                onChangeText={handleChangeText}
                className="flex-1"
                secureTextEntry={label === "Password" && !showPassword}
            >
                {value}
            </TextInput>
            {label === "Password" && (
                <TouchableOpacity onPress={togglePasswordVisibility}>
                    <Text>{showPassword ? "Hide" : "Show"}</Text>
                </TouchableOpacity>
            )}

            {label === "Search" && (
                <TouchableOpacity
                    onPress={toggleOpenMaps}
                    className="bg-gray-100 p-1 rounded-lg"
                >
                    <Text className="text-neutral-600">Open maps</Text>
                </TouchableOpacity>
            )}
        </View>
    );
};

export default InputField;
