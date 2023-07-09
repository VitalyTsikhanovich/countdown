import TextField from '@mui/material/TextField';
import {ChangeEvent, FC, memo} from "react";
import {Initial} from "../../styles/stylesCountdown/Countdown.style";

export type TimeType = {
    value: number;
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
    disabled: boolean;
    label: string;


};

export const InitialTime: FC<TimeType> = memo(({value, handleChange, disabled, label}) => {
    return (
<Initial>
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
  </Initial>
    );
})
