import { useState } from "react";

type ValueTypes = string;
type LoadingTypes = boolean;
type ErrorTypes = string | null;
type ValidateTypes = any; //for now

interface UseInputReturnTypes {
    value: ValueTypes;
    isLoading: LoadingTypes;
    error: ErrorTypes;
    setReset: () => void;
    handleChange: (text: string) => void;
}

export const useInput = (
    initialValue: ValueTypes,
    validate?: ValidateTypes,
): UseInputReturnTypes => {
    const [value, setValue] = useState<ValueTypes>(initialValue);
    const [error, setError] = useState<ErrorTypes>(null);
    const [isLoading, setIsLoading] = useState<LoadingTypes>(false);

    const handleChange = (text: string) => {
        setValue(text);
        console.log(text);
        // validate(text)
    };

    const setReset = () => {
        setValue(initialValue); // Reset to initial value
        setError(null);
        setIsLoading(false);
    };

    return {
        value,
        error,
        isLoading,
        handleChange,
        setReset,
    };
};
