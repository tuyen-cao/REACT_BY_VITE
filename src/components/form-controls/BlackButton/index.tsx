import { ReactNode } from 'react';

export interface BlackButtonProps {
    children: ReactNode;
    type: 'button' | 'submit' | 'reset' | undefined;
    cssClass?: string;
    handleClick?: () => void;
}

export default function BlackButton({
    children,
    type,
    cssClass,
    handleClick,
}: BlackButtonProps) {
    return (
        <button type={type} className={cssClass} onClick={handleClick}>
            {children}
        </button>
    );
}
