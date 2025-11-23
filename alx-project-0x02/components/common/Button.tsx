import { type ButtonProps } from '@/interfaces';
import React from 'react';

const Button: React.FC<ButtonProps> = ({ size, shape, label, onClick }) => {
    const sizeClasses = {
        small: 'px-2 py-1 text-sm',
        medium: 'px-4 py-2 text-base',
        large: 'px-6 py-3 text-lg',
    };

    const shapeClasses = {
        'rounded-sm': 'rounded-sm',
        'rounded-md': 'rounded-md',
        'rounded-full': 'rounded-full',
    };

    return (
        <button
            onClick={onClick}
            className={`${sizeClasses[size]} ${shapeClasses[shape]} bg-blue-500 text-white hover:bg-blue-600 transition duration-300`}
        >
            {label}
        </button>
    );
};

export default Button;
