import TextField from '@mui/material/TextField';
import {ChangeEvent, memo} from "react";

export type TimeType = {
    value: number;
    start: boolean;
    max: number;
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
    min: number;
    disabled: boolean;
    label: string;
};

export const InitialTime =memo( ({ value, start, max, min, handleChange, disabled, label }: TimeType) => {
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
})
