import { CircularProgress } from '@mui/material';
import { memo } from 'react';

type ProgressPropsType = {
    value: number;
};

export const Progress = memo(({ value }: ProgressPropsType) => {
    return (
        <>
            <CircularProgress variant='determinate' value={value} />
            {/* {Math.floor(value)}% */}
        </>
    );
});
