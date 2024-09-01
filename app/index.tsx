import { Redirect } from "expo-router";
import React from "react";
import { useAuth } from "@clerk/clerk-expo";

const index = () => {
    const { isSignedIn } = useAuth();

    return isSignedIn ? (
        <Redirect href={"/(home)/home"} />
    ) : (
        <Redirect href={"/(auth)/onboarding"} />
    );
};

export default index;
