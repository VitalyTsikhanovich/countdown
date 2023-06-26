import React from 'react';
import { CircularProgress } from '@mui/material';

type ProgressPropsType = {
    value: number;
};

export const Progress: React.FC<ProgressPropsType > = ({ value }) => {
    return (
        <>
            <CircularProgress variant='determinate' value={value} />
            {/* {Math.floor(value)}% */}
        </>
    );
};
