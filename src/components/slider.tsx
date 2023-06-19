import React from 'react';
export type RangePropsType = {
    value: number;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    max?: number;
    min: number;
    disabled: boolean;
};

export const Slider = ({ min, max, value, handleChange, disabled }: RangePropsType) => {
    return <input type='range' min={min} max={max} value={value} onChange={handleChange} disabled={disabled} />;
};
