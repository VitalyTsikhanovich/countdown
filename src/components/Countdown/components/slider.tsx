import Slider from '@mui/material/Slider';
import {SliderContainer} from '../../styles/stylesCountdown/Slider.style';
import {FC, memo, useCallback} from "react";


export type RangePropsType = {
    value: number;
    onChange: (value: number) => void;
    max?: number;
    min: number;
    disabled: boolean;
    step: number;
};
export const SliderCountdown: FC<RangePropsType> = memo(({value, onChange, max, min, disabled, step}) => {
    const handleSliderChange = useCallback((event: any, newValue: any) => {
        onChange(newValue);
    }, [])
    return (
        <SliderContainer>
            <Slider value={value} onChange={handleSliderChange} max={max} min={min} disabled={disabled} step={step}/>
        </SliderContainer>
    );
})


