import React from 'react';

interface UsersIconProps extends React.SVGProps<SVGSVGElement> { }

const UsersIcon: React.FC<UsersIconProps> = (props) => {
    return (
        <svg
            {...props}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
            />
            <circle cx="9" cy="7" r="4" />
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M23 21v-2a4 4 0 0 0-3-3.87"
            />
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 3.13a4 4 0 0 1 0 7.75"
            />
        </svg>
    );
};

export default UsersIcon;
