import { ReactNode } from 'react';

export interface SubmitButtonProps {
    children: ReactNode;
    cssClass?: string;
}

export function SubmitButton({ children, cssClass }: SubmitButtonProps) {
    return (
        <button className={cssClass} type="submit">
            {children}
        </button>
    );
}
