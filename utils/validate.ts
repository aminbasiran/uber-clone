export const validateUsername = (username: string): string | null => {
    if (username.length < 8) {
        return "Username must be at least 3 characters long.";
    }
    return null;
};

export const validatePassword = (password: string): string | null => {
    if (password.length < 6) {
        return "Password must be at least 6 characters long.";
    }
    if (!/[A-Z]/.test(password)) {
        return "Password must contain at least one uppercase letter.";
    }
    if (!/[a-z]/.test(password)) {
        return "Password must contain at least one lowercase letter.";
    }
    if (!/[0-9]/.test(password)) {
        return "Password must contain at least one digit.";
    }
    if (!/[!@#$%^&*]/.test(password)) {
        return "Password must contain at least one special character.";
    }
    return null;
};

export const validateEmail = (email: string): string | null => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return "Please enter a valid email address.";
    }
    return null;
};
