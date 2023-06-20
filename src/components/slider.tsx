import React from 'react';
import { Slider } from '@mui/material';
import styled from 'styled-components';

export type RangePropsType = {
    value: number;
    onChange: any;
    //   (event : React.ChangeEvent<HTMLInputElement>)=> void
    max?: number;
    min: number;
    disabled: boolean;
    step: number;
};
export const SliderCountdown = ({ value, onChange, max, min, disabled, step }: RangePropsType) => {
    return (
		<SliderContainer>
 <Slider value={value} onChange={onChange} max={max} min={min} disabled={disabled} step={step} />
		</SliderContainer>
	
	 )
};

const SliderContainer = styled.div`
width: 200px
`
