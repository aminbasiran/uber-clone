import { View, Text, Image, ImageSourcePropType } from "react-native";
import React from "react";
import Modal from "react-native-modal";
import CustomButton from "../CustomButton";
import verified from "../../assets/icons/check.png";

const iconSource = verified as unknown as ImageSourcePropType;

type StateTypes = "default" | "pending" | "success" | "failed";

interface VerificationModalProps {
    isVisible: boolean;
    setVerificationState: (value: StateTypes) => void; // Correct type for the state setter
}

const VerifiedModal: React.FC<VerificationModalProps> = ({
    isVisible,
    setVerificationState,
}) => {
    return (
        <View>
            <Modal isVisible={isVisible}>
                <View className="bg-white px-7 py-9 min-h-[300px] rounded-2xl flex flex-col justify-between">
                    <Text className="text-center text-2xl font-bold">
                        You have been verified
                    </Text>
                    <Image resizeMode="contain" source={iconSource} />
                    <CustomButton
                        variant="black"
                        textStyles="text-center text-white font-bold"
                        onPress={() => setVerificationState("default")}
                    >
                        <Text>Back to Default</Text>
                    </CustomButton>
                </View>
            </Modal>
        </View>
    );
};

export default VerifiedModal;
