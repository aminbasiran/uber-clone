import { useRouter } from "expo-router";
import { useSignUp, useSignIn, useAuth } from "@clerk/clerk-expo";
import { useCallback } from "react";

type StateTypes = "default" | "pending" | "success" | "failed";

export const useClerkService = () => {
    // Initialize signUp and signIn hooks
    const {
        isLoaded: isSignUpLoaded,
        signUp,
        setActive: setSignUpActive,
    } = useSignUp();

    const {
        isLoaded: isSignInLoaded,
        signIn,
        setActive: setSignInActive,
    } = useSignIn();

    const { signOut } = useAuth();

    const router = useRouter();

    // Handle sign up process
    const onSignUpPress = async (
        email: string,
        password: string,
        setVerificationState: (state: StateTypes) => void,
    ) => {
        if (!isSignUpLoaded) return;

        try {
            await signUp.create({
                emailAddress: email,
                password: password,
            });

            await signUp.prepareEmailAddressVerification({
                strategy: "email_code",
            });

            setVerificationState("pending");
        } catch (err: unknown) {
            console.error(JSON.stringify(err, null, 2));
        }
    };

    // Handle verification process
    const onPressVerify = async (
        code: string,
        setVerificationState: (state: StateTypes) => void,
    ) => {
        if (!isSignUpLoaded) return;

        try {
            const completeSignUp = await signUp.attemptEmailAddressVerification(
                {
                    code: code,
                },
            );

            if (completeSignUp.status === "complete") {
                await setSignUpActive({
                    session: completeSignUp.createdSessionId,
                });
                setVerificationState("success");
            } else {
                setVerificationState("failed");
            }
        } catch (err: unknown) {
            setVerificationState("failed");
            console.error(JSON.stringify(err, null, 2));
        }
    };

    // Handle sign-in process
    const onSignInPress = useCallback(
        async (email: string, password: string) => {
            if (!isSignInLoaded) return;

            try {
                const signInAttempt = await signIn.create({
                    identifier: email,
                    password: password,
                });

                if (signInAttempt.status === "complete") {
                    await setSignInActive({
                        session: signInAttempt.createdSessionId,
                    });
                } else {
                    console.error(JSON.stringify(signInAttempt, null, 2));
                }
            } catch (err: unknown) {
                console.log(JSON.stringify(err, null, 2));
            }
        },
        [isSignInLoaded, signIn, setSignInActive, router],
    );

    const onSignOutPress = async () => {
        try {
            await signOut();
        } catch (error) {
            console.error(error);
        }
    };

    return { onSignUpPress, onPressVerify, onSignInPress, onSignOutPress };
};
