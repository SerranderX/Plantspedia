import React from 'react';

type ButtonProps = {
    children: React.ReactNode;
    onClick: () => void;
    disabled?: boolean;
    className?: string;
}

export const Button: React.FC<ButtonProps> = ({onClick, children, disabled = false, className = ""}) => {
    const props = {onClick, disabled};

    return (
        <button {...props} className={`${disabled ? 'opacity-50' : 'hover:bg-purple-700'} bg-purple-800 text-gray-100 font-bold py-2 xl:px-4 px-3 transition delay-10x0 duration-100 ease-in-out cursor-pointer${className} `} >
            {children}
        </button>
    );
};