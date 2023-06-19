import React from 'react';

export type ProgressType = {
    value: number;
    max: number;
};

export const Progress = ({ value, max }: ProgressType) => {
    const percent = (value / max) * 100;

    const progressStyle = {
        width: `${percent}%`,
        height: '10px',
        backgroundColor: 'red',
    };

    return (
        <>
            <div>{percent}</div>
            <div style={{ width: '200px', border: '1px solid black' }}>
                <div style={progressStyle}></div>
            </div>
        </>
    );
};
