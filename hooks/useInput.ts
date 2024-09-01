import { useState } from "react";

type ValueTypes = string;
type LoadingTypes = boolean;
type ErrorTypes = string | null;
type ValidateTypes = (value: string) => string | null; //for now

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
        console.log(text);
        if (validate) {
            const validationError = validate(text);
            if (validationError) {
                setError(validationError); // Set error if validation fails
                return; // Do not update the value if there's an error
            }
        }

        setValue(text); // Update the value if validation passes
        setError(null); // Clear the error if validation passes
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
