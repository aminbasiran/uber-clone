import { useEffect } from "react";
import { useGlobalStore } from "@/components/context/ContextProvider";
import { _retrievePreferences } from "@/lib/preferences";

const useSettings = () => {
    const { setUserPreferences } = useGlobalStore();

    useEffect(() => {
        const initializeSettings = async () => {
            try {
                const preferences = await _retrievePreferences();
                if (preferences) {
                    setUserPreferences(preferences);
                }
            } catch (error) {
                console.log(error);
            }
        };

        initializeSettings();
    }, []);
};

export default useSettings;
