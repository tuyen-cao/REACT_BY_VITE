import { ReactNode } from 'react';

export interface SubmitButtonProps {
    children: ReactNode
}

export function SubmitButton({ children }: SubmitButtonProps) {
    return (
        <button type='submit'>{children}</button>
    );
}
