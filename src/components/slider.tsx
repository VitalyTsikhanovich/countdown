
import React from 'react';
import { Slider } from '@mui/material';


export type RangePropsType = {
	    value: number;
	    onChange: any
		//   (event : React.ChangeEvent<HTMLInputElement>)=> void
	    max?: number;
	    min: number;
	    disabled: boolean;
		 step: number
	};
export const SliderCountdown = ({ value, onChange, max, min, disabled, step }: RangePropsType) => {


  return (
    <Slider
      value={value}
      onChange={onChange}
      max={max}
      min={min}
      disabled={disabled}
		step={step}
    />
  );
};



























// import { Slider } from '@mui/material';
// import React from 'react';
// // import Slider from '@mui/material/Slider';
// export type RangePropsType = {
//     value: number;
//     handleChange: any
// 	//  (event : React.ChangeEvent<HTMLInputElement>)=> void
//     max?: number;
//     min: number;
//     disabled: boolean;
// };

// export const Sliders = ({ min, max, value, handleChange, disabled }: RangePropsType) => {
   
	
	
	
	
// 	<Slider
// 	value={inputValueMinutes * 60 + inputValueSecond}
// 	onChange={handleSliderChange}
// 	max={750 * 60 + 59}
// 	min={0}
// 	disabled={start ? true : false}
//  />
// };
