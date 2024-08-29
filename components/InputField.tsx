import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";

interface IInputFieldPropsTypes {
    label?: string;
    value: string;
    placeholder: string;
    handleChangeText: (text: string) => void;
}

const InputField: React.FC<IInputFieldPropsTypes> = ({
    placeholder,
    label,
    handleChangeText,
    value,
    ...props
}) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };
    return (
        <View
            {...props}
            className="w-full h-9 px-3 bg-neutral-300 rounded-lg flex flex-row justify-between place-items-center items-center"
        >
            <TextInput
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
        </View>
    );
};

export default InputField;
