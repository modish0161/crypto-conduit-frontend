import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    onClick: () => void;
    variant?: 'primary' | 'secondary';
    isLoading?: boolean;
    disabled?: boolean;
}

const buttonStyles = {
    primary: 'bg-primary-color hover:bg-primary-dark text-white',
    secondary: 'bg-secondary-color hover:bg-secondary-dark text-black',
};

export const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    variant = 'primary',
    isLoading = false,
    disabled = false,
}) => {
    const style = buttonStyles[variant];

    return (
        <button
            className={`px-4 py-2 rounded-md ${style} ${disabled || isLoading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
            onClick={onClick}
            disabled={disabled || isLoading}
        >
            {isLoading ? 'Loading...' : children}
        </button>
    );
};
