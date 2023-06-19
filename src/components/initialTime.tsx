
import React, { useState, useEffect } from 'react';
// import { Sliders } from './slider';
import TextField from '@mui/material/TextField';
export type TimeType = {
    value: number;
    start: boolean;
    max: number;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    min: number;
    disabled: boolean;
	 label: string
};

export const InitialTime = ({ value, start, max, min, handleChange, disabled, label }: TimeType) => {
    return (
      
          

            <TextField
                id='outlined-basic'
                label={label}
                variant='outlined'
					 size='small'
                type='number'
                value={value}
                onChange={handleChange}
                disabled={disabled}
            />
      
    );
};
