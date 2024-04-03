import * as React from 'react';

interface FlagIconProps extends React.SVGProps<SVGSVGElement> { }

const FlagIcon: React.FC<FlagIconProps> = (props) => {
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
                d="M2 2l20 6-8 4-12-6v16"
            />
        </svg>
    );
};

export default FlagIcon;
