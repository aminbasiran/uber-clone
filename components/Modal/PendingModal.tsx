import { View, Text } from "react-native";
import React from "react";
import Modal from "react-native-modal";
import InputField from "../InputField";
import CustomButton from "../CustomButton";

interface VerificationModalProps {
    isVisible: boolean;
    value: string;
    handleChangeText: (text: string) => void;
    onPressVerify: () => void | Promise<void>;
}

const PendingModal: React.FC<VerificationModalProps> = ({
    isVisible,
    value,
    handleChangeText,
    onPressVerify,
}) => {
    return (
        <View>
            <Modal isVisible={isVisible}>
                <View className="bg-white px-7 py-9 min-h-[300px] rounded-2xl flex flex-col justify-between">
                    <Text className="text-center text-2xl font-bold">
                        Pending Verification
                    </Text>
                    <Text>Enter your verification code</Text>
                    <View>
                        <Text className="font-bold">Verification Code</Text>
                        <InputField
                            placeholder="123456"
                            value={value}
                            handleChangeText={handleChangeText}
                        />
                    </View>
                    <CustomButton
                        variant="black"
                        textStyles="text-center text-white font-bold"
                        onPress={onPressVerify}
                    >
                        <Text>Verify code</Text>
                    </CustomButton>
                </View>
            </Modal>
        </View>
    );
};

export default PendingModal;
