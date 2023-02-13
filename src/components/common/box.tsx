import * as React from 'react';

export interface BoxProps {
    children: React.ReactNode
}

export default function Box({ children }: BoxProps) {
    const styles = {
        border: '1px solid rgba(0, 0, 0, 0.5)',
        padding: '10px',
        marginBottom: '20px'
    };

    return (
        <div style={styles}>
            {children}
        </div>
    );
}
