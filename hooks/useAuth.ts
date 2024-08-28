import { useEffect, useState } from "react";
import { useGlobalStore } from "@/components/context/ContextProvider";
import { _retrieveData } from "@/lib/auth";

const useAuth = () => {
    const { signIn } = useGlobalStore();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const initializeUser = async () => {
            try {
                const storedUser = await _retrieveData();
                if (storedUser) {
                    signIn(storedUser);
                }
            } catch (error) {
                console.error("Failed to load user data", error);
            } finally {
                setLoading(false);
            }
        };

        initializeUser();
    }, []);

    return loading;
};

export default useAuth;
