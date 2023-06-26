import React from 'react';
import Slider from '@mui/material/Slider';
import styled from 'styled-components';

export type RangePropsType = {
    value: number;
    onChange: (value: number) => void;
    max?: number;
    min: number;
    disabled: boolean;
    step: number;
};
export const SliderCountdown = ({ value, onChange, max, min, disabled, step }: RangePropsType) => {
    const handleSliderChange = (event: any, newValue: any) => {
        onChange(newValue);
    };
    return (
        <SliderContainer>
            <Slider value={value} onChange={handleSliderChange} max={max} min={min} disabled={disabled} step={step} />
        </SliderContainer>
    );
};

const SliderContainer = styled.div`
    width: 200px;
`;
